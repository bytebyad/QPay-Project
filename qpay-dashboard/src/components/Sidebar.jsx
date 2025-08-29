import React, { useState } from 'react';
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import home from "../assets/sidebar/home.png";
import QR from "../assets/sidebar/customer.png";
import history from "../assets/sidebar/history.png";
import profile from "../assets/sidebar/profile.png";
import Bharatconnectlogo from "../assets/sidebar/bharat-logo.jpg";

export const Sidebar = () => {
    const [openHistory, setOpenHistory] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");
    const [mobileOpen, setMobileOpen] = useState(false);

    // Helper to handle selection + auto close on mobile
    const handleSelect = (item) => {
        setActiveItem(item);
        setMobileOpen(false); // auto-close sidebar on mobile
    };

    const SidebarContent = (
        <aside className="w-60 h-screen bg-primary text-white flex flex-col rounded-2xl border border-primary">
            <nav className="flex-1 p-4 space-y-2">
                {/* Home */}
                <Link
                    to="/"
                    onClick={() => handleSelect("Home")}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer mt-6 md:mt-0 
                        ${activeItem === "Home" ? "bg-white text-green-900" : "hover:bg-green-800"}`}
                >
                    <img src={home} alt="home" className="object-cover" />
                    <span className="font-medium">Home</span>
                </Link>

                {/* QR */}
                <Link
                    to="/qr"
                    onClick={() => handleSelect("QR")}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer 
                        ${activeItem === "QR" ? "bg-white text-green-900" : "hover:bg-green-800"}`}
                >
                    <img src={QR} alt="QR" className="object-cover" />
                    <span className="font-medium">QR</span>
                </Link>

                {/* History (collapsible) */}
                <div>
                    <div
                        className={`flex items-center justify-between px-4 py-3 cursor-pointer 
                            ${openHistory ? "rounded-t-xl" : "rounded-xl"} 
                            ${activeItem === "History" ? "bg-white text-green-900" : "hover:bg-green-800"}`}
                    >
                        <Link
                            to="/history"
                            onClick={() => handleSelect("History")}
                            className="flex items-center space-x-3 flex-1"
                        >
                            <img src={history} alt="History" className="object-cover" />
                            <span className="font-medium">History</span>
                        </Link>

                        <ChevronDown
                            size={18}
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenHistory(!openHistory);
                            }}
                            className={`cursor-pointer transition-transform duration-200 ${openHistory ? "rotate-180" : ""}`}
                        />
                    </div>

                    {openHistory && (
                        <div className="bg-white p-3 space-y-2 rounded-b-xl">
                            <div
                                className={`flex items-center space-x-2 cursor-pointer px-3 py-2 rounded-lg 
                                    ${activeItem === "Transaction History" ? "bg-white text-green-800" : "hover:bg-gray-200 text-green-700"}`}
                                onClick={() => handleSelect("Transaction History")}
                            >
                                <img src={history} alt="transaction" className="w-4 h-4" />
                                <span className="text-sm font-medium">Transaction History</span>
                            </div>
                            <div
                                className={`flex items-center space-x-2 cursor-pointer px-3 py-2 rounded-lg 
                                    ${activeItem === "Settlement History" ? "bg-white text-green-800" : "hover:bg-gray-200 text-green-700"}`}
                                onClick={() => handleSelect("Settlement History")}
                            >
                                <img src={history} alt="settlement" className="w-4 h-4" />
                                <span className="text-sm font-medium">Settlement History</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <Link
                    to="/profile"
                    onClick={() => handleSelect("Profile")}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer 
                        ${activeItem === "Profile" ? "bg-white text-green-900" : "hover:bg-green-800"}`}
                >
                    <img src={profile} alt="Profile" className="object-cover" />
                    <span className="font-medium">Profile</span>
                </Link>
            </nav>

            <div className='bg-white flex justify-center items-center rounded-b-2xl p-4'>
                <img src={Bharatconnectlogo} alt="logo" />
            </div>
        </aside>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:flex m-6 md:ml-12 md:mt-12">
                {SidebarContent}
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden  items-center justify-between bg-primary text-white p-2 h-screen">
                {mobileOpen ? (
                    <X size={28} onClick={() => setMobileOpen(false)} className="cursor-pointer" />
                ) : (
                    <Menu size={28} onClick={() => setMobileOpen(true)} className="cursor-pointer" />
                )}
            </div>

            {/* Mobile Sidebar Drawer */}
            {mobileOpen && (
                <div className="fixed mt-0 w-60 h-screen shadow-lg z-50">
                    {SidebarContent}
                    <button
                        className="absolute top-0 right-4 text-white text-2xl rounded-full mt-2"
                        onClick={() => setMobileOpen(false)}
                    >
                        <X size={24} />
                    </button>
                </div>
            )}
        </>
    );
};
