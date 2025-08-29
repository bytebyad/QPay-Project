import React from 'react'
import transactionImage from "../assets/transaction.png";
import buildingIcon from "../assets/icons/court.png";
import businessIcon from "../assets/icons/suitcase.png";
import cartIcon from "../assets/icons/cart.png";
import walletIcon from "../assets/icons/wallet.png";
import smartPhoneIcon from "../assets/icons/telephone.png";
import smartSpeakerIcon from "../assets/icons/QRScann.png";
import settingIcon from "../assets/icons/settings.png";
import usersIcon from "../assets/icons/users.png";
import languageIcon from "../assets/icons/language.png";
import QRScann from "../assets/QR-Scann.jpg";
import '../index.css'
import { Settings, Users, Languages, Smartphone, Calculator } from "lucide-react";
import { ChevronRight } from "lucide-react";

export const ProfilePage = () => {
    const data = [
        { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
        { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
        { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+₹90' },
    ];
    return (
        <>

            <div className="space-y-6 bg-white overflow-auto max-h-screen p-2 md:p-0 lg:p-2 hide-scrollbar">
                {/* Top Banner */}
                <div
                    className={`
    relative flex justify-between items-end rounded-xl p-4 border-secondary border-2 overflow-hidden
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

                    {/* Overlay to make content visible */}
                    <div className="absolute inset-0 bg-black/0"></div>

                    {/* Content Wrapper */}
                    <div className="relative z-10 flex flex-col space-y-4 text-white max-w-full md:max-w-lg px-2 md:px-6 text-center md:text-left">
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

                    {/* Right Image (hidden on md and smaller) */}
                    <div className="relative z-10 flex-shrink-0 w-full md:w-auto lg:pr-16 pr-0 flex justify-center hidden lg:block">
                        <img
                            src={transactionImage}
                            alt="POS Device"
                            className="w-40 sm:w-56 md:w-64 lg:w-56 h-auto object-contain"
                        />
                    </div>
                </div>

                {/* cards part */}
                <div className="p-6  min-h-screen">
                    {/* cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {/* Bank Account */}
                        <div className="bg-lightGreen p-5 rounded-xl shadow hover:shadow-lg cursor-pointer transition">
                            <div className="flex items-center justify-between">
                                <div className="bg-primary text-white p-3 rounded-full">
                                    <img src={buildingIcon} alt="Chennai Icon" className="w-8 h-8" />
                                </div>
                                <ChevronRight size={24} className="text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mt-3 text-green-800">XXXX 9820</h3>
                            <p className="text-gray-700 text-sm">ICICI Bank | Chennai Egmore Branch</p>
                        </div>

                        {/* Business Profile */}
                        <div className="bg-lightGreen p-5 rounded-xl shadow hover:shadow-lg cursor-pointer transition">
                            <div className="flex items-center justify-between">
                                <div className="bg-primary text-white p-3 rounded-full">
                                    <img src={businessIcon} alt="Chennai Icon" className="w-9 h-9" />
                                </div>
                                <ChevronRight size={24} className="text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mt-3 text-green-800">Business Profile</h3>
                            <p className="text-gray-700 text-sm">View and edit your business details</p>
                        </div>

                        {/* KYC Verification */}
                        <div className="bg-lightGreen p-5 rounded-xl shadow hover:shadow-lg cursor-pointer transition">
                            <div className="flex items-center justify-between">
                                <div className="bg-primary text-white p-3 rounded-full">
                                    <img src={walletIcon} alt="Chennai Icon" className="w-9 h-8" />
                                </div>
                                <ChevronRight size={24} className="text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mt-3 text-green-800">KYC Verification</h3>
                            <p className="text-gray-700 text-sm">Unlock exclusive benefits with KYC</p>
                        </div>

                        {/* Order QR */}
                        <div className="bg-lightGreen p-5 rounded-xl shadow hover:shadow-lg cursor-pointer transition">
                            <div className="flex items-center justify-between">
                                <div className="bg-primary text-white p-3 rounded-full">
                                    <img src={cartIcon} alt="Chennai Icon" className="w-9 h-9" />
                                </div>
                                <ChevronRight size={24} className="text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mt-3 text-green-800">Order QR</h3>
                            <p className="text-gray-700 text-sm">Get paid, manage & order QRs</p>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Business Services */}
                        <div className="bg-white p-6 rounded-xl shadow ">
                            <h4 className="text-gray-400 uppercase text-sm font-semibold mb-4">
                                Business Services
                            </h4>
                            <div className="flex gap-6  items-center">
                                <div className="flex flex-col items-center cursor-pointer hover:text-green-700 transition">
                                    <img src={smartSpeakerIcon} alt="Smart Phone Icon" />
                                    <span className="text-sm text-center lg:pt-2">Smart<br></br> Speaker</span>
                                </div>
                                <div className="flex flex-col items-center cursor-pointer hover:text-green-700 transition">
                                    <img src={smartPhoneIcon} alt="Smart Phone Icon" />
                                    <span className="text-sm text-center lg:pt-2">POS <br></br> Machine</span>
                                </div>
                            </div>
                        </div>

                        {/* Manage Business */}
                        <div className="bg-white p-6 rounded-xl shadow ">
                            <h4 className="text-gray-400 uppercase text-sm font-semibold mb-4">
                                Manage Business
                            </h4>
                            <div className="md:flex gap-6 items-center">
                                <div className="flex md:flex-col my-6 md:my-0 items-center cursor-pointer hover:text-green-700 transition">
                                    <img src={settingIcon} alt="Smart Phone Icon" className='shadow-md rounded-md bg-white p-2' />
                                    <span className="text-sm text-center lg:pt-2">Payment<br></br>  Settings</span>
                                </div>
                                <div className="flex md:flex-col my-6 md:my-0 items-center cursor-pointer hover:text-green-700 transition">
                                    <img src={usersIcon} alt="Smart Phone Icon" className='shadow-md rounded-md bg-white p-2' />
                                    <span className="text-sm text-center lg:pt-2">Manage<br></br>  Staff</span>
                                </div>
                                <div className="flex md:flex-col my-6 md:my-0 items-center cursor-pointer hover:text-green-700 transition">
                                    <img src={languageIcon} alt="Smart Phone Icon" className='shadow-md rounded-md bg-white p-2' />
                                    <span className="text-sm text-center lg:pt-2">Change <br></br> Language</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
