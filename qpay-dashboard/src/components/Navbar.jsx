import React from 'react'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import profileImg from "../assets/profile.png";
import logo from "../assets/logo.png";



export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="flex justify-between items-center bg-white md:px-20 px-3 py-3 shadow-md">
                {/* Logo */}
                <div className='flex items-center'>
                    <img
                        src={logo}
                        alt="logo"
                        className="object-cover"
                    />
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-3 cursor-pointer relative">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className=" object-cover"
                    />
                    <div className="text-left hidden md:block lg:block">
                        <p className="text-sm text-gray-500">Hello</p>
                        <p className="font-semibold text-gray-800">Thomas Shelby</p>
                    </div>

                    {/* Dropdown icon */}
                    <ChevronDown
                        size={20}
                        className={`text-gray-600 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                            }`}
                        onClick={() => setIsOpen(!isOpen)}
                    />

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute top-14 right-0 w-40 bg-white shadow-lg rounded-md py-2 border border-gray-200 z-50">
                            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</p>
                            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</p>
                            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</p>
                        </div>

                    )}
                </div>
            </nav>
        </>
    )
}
