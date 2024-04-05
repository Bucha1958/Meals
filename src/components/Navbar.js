import React from "react";
import {BsCart3, BsSearch} from "react-icons/bs";
import Logo from "../images/Vector.png";
import Sidebar from "./Sidebar";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div
            className="xl:px-40 px-5 py-5 bg-[#ffffff] shadow-md flex justify-between items-center text-gray-600 font-bold sticky top-0 z-50">
            <Link to="/">
                <div
                    className="logo cursor-pointer flex items-center justify-center font-bold text-xl space-x-2">
                    <img src={Logo} alt="" className="w-10 h-5"/>
                    <span className="capitalize text-gray-900 mt-2">meals</span>
                </div>
            </Link>

            <div className="hidden xl:block">
                <ul className="flex gap-10 capitalize">
                    <Link to="/">
                        <li className="cursor-pointer hover:text-[#da3743] hover:border-b-2 hover:border-[#da3743] transition duration-300 ease-out">
                            home
                        </li>
                    </Link>
                    <li className="cursor-pointer hover:text-[#da3743] hover:border-b-2 hover:border-[#da3743] transition duration-300 ease-out">
                        menu
                    </li>
                    <li className="cursor-pointer hover:text-[#da3743] hover:border-b-2 hover:border-[#da3743] transition duration-300 ease-out">
                        meal plans
                    </li>
                </ul>
            </div>

            <div className="flex justify-center items-center space-x-20">
                <div className="relative search xl:flex xl:justify-center xl:items-center xl:space-x-5">
                    <BsSearch className="hidden xl:block cursor-pointer text-xl"/>
                    <Link to="/cart">
                        <BsCart3
                            className="cursor-pointer text-xl xl:-right-12 xl:-top-1 xl:mt-1 md:-right-80 absolute -right-28 -top-2 xl:-top-1"/>
                        <span
                            className="absolute xl:ml-12 bg-[#DA3743] md:ml-80 -top-4 ml-28 rounded-full px-1 flex justify-center items-center text-white">
                            3
                        </span>
                    </Link>
                </div>

                <div className="hidden xl:block capitalize cursor-pointer ml-5">sign in</div>

                <div>
                    <span
                        className="hidden xl:block capitalize cursor-pointer bg-[#da3743] whitespace-nowrap text-white px-5 py-3 rounded-full">
                        create account
                    </span>
                </div>
            </div>

            <div className="xl:hidden block flex flex-col items-center justify-center">
                <Sidebar/>
            </div>
        </div>
    );
};

export default Navbar;
