import React from 'react';
import footerLogo from "../assets/petLogo.png";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-orange-300 py-8 text-white">
            <div className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">

                    <div className="flex flex-col items-center">
                        <img className="w-[100px] mx-auto md:mx-0" src={footerLogo} alt="WarmPaws Logo" />
                        <p className="font-semibold text-2xl mt-2">
                            Warm<span className="text-orange-700">Paws</span>
                        </p>
                    </div>

                    <div className="flex justify-center gap-8 text-3xl">
                        <FaFacebook className="hover:text-orange-700 transition-colors duration-200" />
                        <FaTwitter className="hover:text-orange-700 transition-colors duration-200" />
                        <FaInstagram className="hover:text-orange-700 transition-colors duration-200" />
                    </div>

                    <nav className="flex flex-col gap-7 md:flex-row justify-center items-center">
                        <a href="" className="hover:text-orange-700">Contact Info</a>
                        <a href="" className="hover:text-orange-700">Privacy Policy</a>
                    </nav>
                </div>

                <aside className="mt-8 border-t border-dashed border-orange-400 pt-5">
                    <p className="text-center text-white">
                        Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
                        <span className="font-bold text-orange-700">WarmPaws</span>
                    </p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
