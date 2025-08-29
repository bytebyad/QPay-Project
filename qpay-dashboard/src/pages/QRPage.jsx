import React, { useState } from 'react';
import logo from "../assets/logo.png";
import download from "../assets/icons/download.png";
import share from "../assets/icons/share.png";
import QRScann from "../assets/QR.png";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

export const QRPage = ({ activeList = [], requestList = [] }) => {
    const [activeTab, setActiveTab] = useState("active");
    const [openIndex, setOpenIndex] = useState(null);
    const [selectedStages, setSelectedStages] = useState({});

    // fallback data if no props are passed
    const fallbackActiveList = [
        { id: "Q201946579", name: "All Marketing Sales-", code: "MSI7903041535313648960231", terminal: "Terminal 1" },
        { id: "Q201946580", name: "Branch Marketing-", code: "MSI7903041535313648960232", terminal: "Terminal 2" },
        { id: "Q201946581", name: "Head Office-", code: "MSI7903041535313648960233", terminal: "Terminal 3" },
        { id: "Q201946582", name: "Franchise-", code: "MSI7903041535313648960234", terminal: "Terminal 4" },
    ];

    const fallbackRequestList = [
        {
            name: "All Marketing Sales",
            address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004",
            date: "26.04.2025",
            stages: ["Awaiting Production", "Awaiting Dispatch", "Awaiting Delivery"],
        },
        {
            name: "Branch Office",
            address: "12, Marina St, Chennai, 600001",
            date: "20.04.2025",
            stages: ["Awaiting Production", "Awaiting Dispatch", "Awaiting Delivery"],
        },
    ];

    const finalActiveList = activeList.length ? activeList : fallbackActiveList;
    const finalRequestList = requestList.length ? requestList : fallbackRequestList;

    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    const handleStageSelect = (idx, stage) => {
        setSelectedStages((prev) => ({
            ...prev,
            [idx]: stage,
        }));
    };

    return (
        <>
            <h1 className='font-bold text-2xl px-4'>Manage QR/POS</h1>

            {/* <div className="p-4 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6 "> */}
            <div className="space-y-6 lg:space-y-0 bg-white overflow-auto max-h-screen p-2 md:p-0 lg:p-2 lg:grid lg:grid-cols-2 lg:gap-6">

                {/* Left Card - Main QR */}
                <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center space-y-4">
                    <img src={logo} alt="logo" className='pb-6 ' />
                    <img
                        src={QRScann}
                        alt="Main QR"
                        className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
                    />
                    <div className="text-center space-y-1">
                        <p className="text-sm text-gray-700 font-medium">
                            UPI ID: <span className="text-gray-900 font-semibold">9876543210@qpay</span>
                        </p>
                        <p className="text-gray-500 text-sm">Ibrahim Mohammedali</p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full justify-center items-center">
                        <button className="flex-1 flex justify-center items-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg shadow">
                            <img src={download} alt="Download Icon" className='px-2' />
                            Download
                        </button>
                        <button className="flex-1 flex justify-center items-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg shadow">
                            <img src={share} alt="Share Icon" className='px-2' />
                            Share
                        </button>
                    </div>
                </div>

                {/* new */}
                {/* Right Card - QR List */}
                <div className="bg-white rounded-xl shadow p-4 flex flex-col space-y-4 w-full">

                    {/* Tabs */}
                    <div className="grid grid-cols-2 border p-1 rounded-md w-full">
                        <button
                            onClick={() => setActiveTab("active")}
                            className={`px-4 py-2 font-medium rounded-md transition text-center w-full text-sm md:text-md ${activeTab === "active" ? "bg-primary text-white" : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            Active QR Codes
                        </button>
                        <button
                            onClick={() => setActiveTab("requests")}
                            className={`px-4 py-2 font-medium rounded-md transition text-center w-full text-sm md:text-md ${activeTab === "requests" ? "bg-primary text-white" : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            QR Code Requests
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-auto space-y-4 max-h-[450px] pr-2">
                        {activeTab === "active" ? (
                            finalActiveList.map((qr, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 border-b pb-3 last:border-b-0"
                                >
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=sample"
                                        alt="Small QR"
                                        className="w-16 h-16 flex-shrink-0 mx-auto sm:mx-0"
                                    />
                                    <div className="flex flex-col flex-1 min-w-0 text-center sm:text-left">
                                        <p className="text-gray-900 font-semibold">{qr.id}</p>
                                        <p className="text-gray-500 text-sm truncate">{qr.name}{qr.code}</p>
                                        <p className="text-gray-400 text-sm">{qr.terminal}</p>
                                    </div>
                                    <ChevronRight size={16} className="cursor-pointer text-gray-400 flex-shrink-0 mx-auto sm:mx-0" />
                                </div>
                            ))
                        ) : (
                            finalRequestList.map((req, idx) => (
                                <div key={idx} className="border rounded-lg p-4 space-y-3">
                                    {/* Request Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                                        <img
                                            src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=request"
                                            alt="Small QR"
                                            className="w-16 h-16 flex-shrink-0 mx-auto sm:mx-0"
                                        />
                                        <div className="flex flex-col flex-1 min-w-0 text-center sm:text-left">
                                            <p className="text-gray-900 font-semibold">{req.name}</p>
                                            <p className="text-gray-500 text-sm">{req.address}</p>
                                            <p className="text-gray-400 text-sm">Requested on {req.date}</p>
                                        </div>
                                    </div>

                                    {/* Dropdown Section */}
                                    <div className="bg-green-50 p-3 rounded-lg space-y-2">
                                        {/* Dropdown Toggle */}
                                        <div
                                            className="flex items-center text-green-700 font-medium justify-between cursor-pointer"
                                            onClick={() => handleToggle(idx)}
                                        >
                                            <div className="flex items-center">
                                                <span className="mr-2">✔</span>
                                                {selectedStages[idx] || "QR Request Accepted"}
                                            </div>
                                            {openIndex === idx ? (
                                                <ChevronUp size={16} className="text-gray-400" />
                                            ) : (
                                                <ChevronDown size={16} className="text-gray-400" />
                                            )}
                                        </div>

                                        {/* Dropdown Content */}
                                        {openIndex === idx && (
                                            <div className="space-y-2 pt-2">
                                                {req.stages.map((stage, i) => (
                                                    <label
                                                        key={i}
                                                        className={`flex items-center space-x-2 cursor-pointer rounded-md px-2 py-1 
                      ${selectedStages[idx] === stage ? "bg-green-100 text-green-700 font-medium" : "text-gray-600 hover:bg-green-100"}
                    `}
                                                        onClick={() => handleStageSelect(idx, stage)}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name={`stage-${idx}`}
                                                            checked={selectedStages[idx] === stage}
                                                            onChange={() => handleStageSelect(idx, stage)}
                                                        />
                                                        <span>{stage}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Request Button */}
                    {activeTab === "active" && (
                        <button className="w-full bg-primary hover:bg-green-800 text-white font-medium py-3 rounded-xl shadow">
                            Request more QR Codes
                        </button>
                    )}
                </div>

            </div>
        </>
    );
};
