import React, { useEffect, useState } from "react";
import axios from "axios";
import { Download, Search, Clock } from "lucide-react";
import filterImage from "../assets/icons/filter.png";
import settleImage from "../assets/icons/clock.png";
import { X } from "lucide-react";

export const History = () => {
    const [openModal, setOpenModal] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");

    const pageSize = 5;

    const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk";

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            setLoading(true);
            const res = await axios.post(
                "https://dev.expressfintech.in/transaction_history/",
                new URLSearchParams({ service_id: "111" }),
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            setTransactions(res.data?.data || []);
        } catch (err) {
            console.error("Error fetching transactions:", err.response?.data || err.message);
        } finally {
            setLoading(false);
        }
    };

    const filteredTransactions = transactions.filter(
        (t) =>
            t.transaction_id?.toLowerCase().includes(search.toLowerCase()) ||
            t.service_ref_id?.toLowerCase().includes(search.toLowerCase())
    );

    const paginatedTransactions = filteredTransactions.slice(
        page * pageSize,
        (page + 1) * pageSize
    );

    const totalPages = Math.ceil(filteredTransactions.length / pageSize);

    return (
        <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto  overflow-x-hidden">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3 w-full overflow-x-hidden">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center md:text-left">
                    Transaction History
                </h1>
                <button className="flex items-center gap-2 border border-green-700 text-green-700 px-3 py-2 rounded-lg shadow hover:bg-primary hover:text-white transition text-sm">
                    <Download size={16} />
                    <span className="hidden sm:block">Download statement</span>
                </button>
            </div>

            {/* Search + Filter */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4 w-full">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by Transaction ID or Ref ID"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    />
                </div>
                <button className="p-2 sm:p-3 text-white bg-primary hover:bg-green-800 rounded-md">
                    <img src={filterImage} alt="Filter Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>

            {/* new */}
            {/* Info Box */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-green-50 border border-green-200 rounded-lg p-4 mb-6 gap-3 w-full">
                <div className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                    <Clock size={28} className="text-primary" />
                    <p>
                        Today’s total collection will be auto-settled by{" "}
                        <span className="font-semibold text-green-800">
                            08:00AM, 23rd Oct’22
                        </span>{" "}
                        Tomorrow.
                    </p>
                </div>
                <button
                    onClick={() => setOpenModal(true)}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-green-800 transition text-sm"
                >
                    <img src={settleImage} alt="Settle Icon" />
                    Settle Now!
                </button>
            </div>

            {/* Modal */}
            {openModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md relative p-6">
                        {/* Close Button */}
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        {/* Title */}
                        <h2 className="text-lg font-semibold mb-4">Manage QR/POS</h2>

                        {/* Today's Collection */}
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Today’s Total Collection</span>
                            <span className="font-semibold text-lg">₹1,023</span>
                        </div>
                        <p className="text-green-600 text-sm mb-4">✅ Already Settled ₹100</p>

                        {/* Settlement Calculation */}
                        <div className="border-t border-b py-4 mb-4">
                            <div className="flex justify-between text-sm text-gray-700 mb-2">
                                <span>Amount yet to be settled</span>
                                <span className="font-medium">IBRAHIM MOHAMMEDALI</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-700 mb-2">
                                <span>Past pending amount</span>
                                <span className="font-medium">09214214127</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-700">
                                <span>Charges</span>
                                <span className="font-medium">07 Aug 2024</span>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center bg-green-50 border border-green-200 rounded-lg p-3">
                            <p className="text-sm text-gray-700">
                                Tap <span className="font-semibold">Settle Now</span> to
                                instantly get settlements in your bank account.
                            </p>
                            <button className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-green-800 transition text-sm">
                                Settle Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Table */}
            <div className=" rounded-xl border shadow-sm w-full overflow-x-auto">
                <table className="table-fixed w-full text-xs sm:text-sm lg:text-base text-gray-700">
                    <thead className="bg-gray-100 text-gray-600 text-left w-full">
                        <tr>
                            <th className="p-3 truncate">Transaction ID</th>
                            <th className="p-3 truncate">Amount</th>
                            <th className="p-3 truncate">Wallet</th>
                            <th className="p-3 truncate">Action</th>
                            <th className="p-3 truncate">Status</th>
                            <th className="p-3 truncate">Created Date</th>
                            <th className="p-3 truncate">Details</th>
                        </tr>
                    </thead>
                    <tbody className=" ">
                        {loading ? (
                            <tr>
                                <td colSpan="7" className="text-center p-6">
                                    Loading...
                                </td>
                            </tr>
                        ) : paginatedTransactions.length > 0 ? (
                            paginatedTransactions.map((tx, idx) => (
                                <tr key={idx} className="border-t hover:bg-gray-50 transition">
                                    <td className="p-3 break-all max-w-[120px] sm:max-w-none truncate">{tx.transaction_id}</td>
                                    <td className="p-3 font-medium">₹{tx.amount || "0"}</td>
                                    <td className="p-3 flex items-center gap-2">
                                        {tx.wallet?.image && (
                                            <img
                                                src={tx.wallet.image}
                                                alt={tx.wallet?.name || "wallet"}
                                                className="w-6 h-6 rounded-full "
                                            />
                                        )}
                                        <span className="truncate max-w-[100px] sm:max-w-none">
                                            {tx.wallet?.name || "--"}
                                        </span>
                                    </td>
                                    <td className="p-3">{tx.service_action_type}</td>
                                    <td className="p-3 truncate">
                                        <span
                                            className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium 
                          ${tx.status === "SUCCESS"
                                                    ? "bg-green-100 text-green-700"
                                                    : tx.status === "FAILED"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-yellow-100 text-yellow-700"}`}
                                        >
                                            {tx.status}
                                        </span>
                                    </td>
                                    <td className="p-3 whitespace-nowrap truncate">
                                        {tx.created_date
                                            ? new Date(tx.created_date).toLocaleString("en-IN", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })
                                            : "--"}
                                    </td>
                                    <td className="p-3 text-green-600 font-medium cursor-pointer hover:underline">
                                        View
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center p-6 text-gray-500">
                                    No transactions found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 gap-1 sm:gap-2 flex-wrap">
                {/* Prev */}
                <button
                    onClick={() => setPage(page > 0 ? page - 1 : 0)}
                    disabled={page === 0}
                    className="px-2 sm:px-3 py-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                >
                    &lt;
                </button>

                {/* First page */}
                {page > 1 && (
                    <button
                        onClick={() => setPage(0)}
                        className="px-2 sm:px-3 py-1 rounded-full hover:bg-gray-200"
                    >
                        1
                    </button>
                )}

                {/* Left dots */}
                {page > 2 && <span className="px-1 sm:px-2">...</span>}

                {/* Current -1, Current, Current +1 */}
                {Array.from({ length: totalPages }, (_, i) => i)
                    .filter((p) => p >= page - 1 && p <= page + 1)
                    .map((p) => (
                        <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`px-2 sm:px-3 py-1 rounded-full ${page === p
                                ? "bg-green-800 text-white"
                                : "hover:bg-gray-200"
                                }`}
                        >
                            {p + 1}
                        </button>
                    ))}

                {/* Right dots */}
                {page < totalPages - 3 && <span className="px-1 sm:px-2">...</span>}

                {/* Last page */}
                {page < totalPages - 2 && (
                    <button
                        onClick={() => setPage(totalPages - 1)}
                        className="px-2 sm:px-3 py-1 rounded-full hover:bg-gray-200"
                    >
                        {totalPages}
                    </button>
                )}

                {/* Next */}
                <button
                    onClick={() => setPage(page + 1 < totalPages ? page + 1 : page)}
                    disabled={page + 1 >= totalPages}
                    className="px-2 sm:px-3 py-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};
