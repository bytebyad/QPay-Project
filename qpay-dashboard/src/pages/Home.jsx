import React from 'react'
import homeImage from "../assets/bill-payment.png";
import QRScann from "../assets/QR-Scann.jpg";
import '../index.css'
import { Link } from "react-router-dom";

export const Home = () => {
    const data = [
        { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
        { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
        { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
    ];
    return (
        <>
            <div className="space-y-6 bg-white overflow-auto max-h-screen p-2 md:p-0 lg:p-2  hide-scrollbar">
                {/* Top Banner */}
                <div
                    className={`
    relative flex justify-between items-end rounded-xl  border-secondary border-2 overflow-hidden
  `}
                >
                    {/* Background */}
                    <div
                        className={`
      absolute inset-0
      lg:bg-[linear-gradient(128deg,#42794A_0%,#61ce70_55%,#ffffff_50%,#ffffff_100%)]
      bg-gradient-to-r from-[#42794A] to-[#61ce70]
    `}
                    ></div>

                    {/* Overlay (keeps text readable) */}
                    <div className="absolute inset-0 bg-black/0"></div>

                    {/* Left Text Section */}
                    <div className="relative z-10 flex flex-col space-y-4 p-4 text-white max-w-full md:max-w-lg px-2 md:px-6 text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
                            Pay <span className="font-extraboldness">₹1/month*</span> for the{" "}
                            <span className="font-extraboldness">
                                QPay<br className="hidden md:block" /> POS Device
                            </span>
                        </h1>
                        <p className="text-gray-200 text-sm sm:text-base">
                            One device for accepting all modes of payments
                        </p>
                        <div>
                            <button className="inline-block bg-white text-green-800 font-medium px-4 sm:px-6 py-2 rounded-md shadow hover:bg-gray-100 transition">
                                Download App Now!
                            </button>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative z-10 flex-shrink-0 w-full md:w-auto lg:pr-16 pr-0 flex justify-center hidden lg:block">
                        <img
                            src={homeImage}
                            alt="POS Device"
                            className="w-40 sm:w-56 md:w-50 lg:w-50 h-auto object-contain"
                        />
                    </div>
                </div>


                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        { value: "1.5k", label: "Account Holders" },
                        { value: "2.1k", label: "Transactions" },
                        { value: "2.3k", label: "Settlement" },
                        { value: "45k", label: "QR Orders" }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white p-6 sm:p-8 border border-gray-100 rounded-xl shadow text-center">
                            <p className="text-2xl sm:text-3xl font-bold text-green-700">{stat.value}</p>
                            <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Profile & QR Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Profile Card */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wide mb-4">
                            PROFILE
                        </p>

                        {/* Progress + Text */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                            {/* Circular Progress */}
                            <div className="relative w-40 h-40 flex-shrink-0">
                                <svg className="w-full h-full transform -rotate-90">
                                    {/* Background circle */}
                                    <circle
                                        cx="72"
                                        cy="72"
                                        r="58"
                                        stroke="#e5e7eb"
                                        strokeWidth="10"
                                        fill="none"
                                    />
                                    {/* Progress circle */}
                                    <circle
                                        cx="72"
                                        cy="72"
                                        r="58"
                                        stroke="#22c55e"
                                        strokeWidth="10"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeDasharray={2 * Math.PI * 58}
                                        strokeDashoffset={(2 * Math.PI * 58 * (100 - 30)) / 100}
                                    />
                                </svg>
                                {/* Percentage text */}
                                <span className="absolute inset-0 flex items-center justify-center text-green-600 font-semibold text-xl sm:text-2xl">
                                    30%
                                </span>
                            </div>

                            {/* Profile Completion Text */}
                            <div className="text-center sm:text-left">
                                <p className="text-lg sm:text-xl text-gray-800 font-semibold">
                                    Complete your profile
                                </p>
                                <ul className="mt-2 text-sm sm:text-lg text-gray-500 space-y-1">
                                    <li>Personal KYC</li>
                                    <li>Company KYC</li>
                                    <li>Onboarding details</li>
                                </ul>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-300 my-6"></div>

                        {/* Button */}
                        <button className="w-full bg-primary hover:bg-green-800 text-white font-medium py-2 sm:py-3 rounded-xl shadow">
                            Next
                        </button>
                    </div>

                    {/* QR Card */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wide mb-4">
                            QR
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                            {/* QR Image */}
                            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
                                <img src={QRScann} alt="QRScann" className="w-full h-full object-contain rounded-lg" />
                            </div>

                            {/* QR Details */}
                            <div className="text-center sm:text-left">
                                <p className="text-lg sm:text-xl text-gray-800 font-semibold">
                                    Complete your profile
                                </p>
                                <ul className="mt-2 text-sm sm:text-lg text-gray-500 space-y-1">
                                    <li>Receive Payment</li>
                                    <li>Order new QR's</li>
                                    <li>Download QR</li>
                                </ul>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-300 my-6"></div>

                        {/* Button */}
                        <button className="w-full bg-primary hover:bg-green-800 text-white font-medium py-2 sm:py-3 rounded-xl shadow">
                            <Link
                                to='/qr'>
                                View More
                            </Link>
                        </button>


                    </div>
                </div>

                {/* Statement */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
                    {/* Settlement Card */}
                    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <p className="text-xs font-semibold text-gray-500 tracking-wide">SETTLEMENT</p>
                                <p className="text-xl font-semibold text-gray-800">₹1,23,816.19</p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* List */}
                        <div className="flex-1 space-y-3">
                            {data.map((item, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <div>
                                        <p className="text-gray-800 font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                    </div>
                                    <p className="text-gray-800 font-semibold">{item.amount}</p>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <button className="mt-4 w-full bg-primary hover:bg-green-800 text-white font-medium py-3 rounded-xl shadow">

                            <Link
                                to='/history'>
                                Settle Now
                            </Link>

                        </button>
                    </div>

                    {/* Total Transactions Card */}
                    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <p className="text-xs font-semibold text-gray-500 tracking-wide">TOTAL TRANSACTIONS</p>
                                <p className="text-xl font-semibold text-gray-800">₹1,23,816.19</p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* List */}
                        <div className="flex-1 space-y-3">
                            {data.map((item, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <div>
                                        <p className="text-gray-800  font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                    </div>
                                    <p className="text-gray-800 font-semibold">{item.amount}</p>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <button className="mt-4 w-full bg-primary hover:bg-green-800 text-white font-medium py-3 rounded-xl shadow">
                            View All
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
