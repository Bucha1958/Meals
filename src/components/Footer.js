import React from "react";
import Logo from "../images/Vector.png";
import {CgFacebook} from "react-icons/cg";
import {RiInstagramLine} from "react-icons/ri";
import {VscTwitter} from "react-icons/vsc";

const Footer = () => {
    return (
        <div className="md:px-40 px-5 bg-[#fafafa]">
            <div className="xl:grid xl:grid-cols-3 my-10">
                <div className="flex gap-3 items-center xl:pt-0 pt-32">
                    <img src={Logo} className="" alt=""/>
                    <h1 className="capitalize font-bold mt-3 text-gray-900">meals</h1>
                </div>

                <div className="flex xl:justify-between xl:gap-0 gap-20">
                    <div className="mt-28">
                        <ul className="space-y-3 capitalize text-sm">
                            <li className="font-bold text-gray-900 capitalize">company</li>
                            <li className="text-gray-500">blog</li>
                            <li className="text-gray-500">about us</li>
                            <li className="text-gray-500">contact us</li>
                        </ul>
                    </div>

                    <div className="mt-28">
                        <ul className="space-y-3 capitalize text-sm">
                            <li className="font-bold text-gray-900 capitalize">services</li>
                            <li className="text-gray-500">FAQs</li>
                            <li className="text-gray-500">our menu</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="mt-10 flex justify-between items-center">
                <div>
                    <h1 className="text-xs text-gray-500">© 2022 Meals. All rights reserved.</h1>
                </div>
                <div className="flex xl:space-x-5 md:space-x-3 space-x-2 text-gray-500">
                    <CgFacebook
                        className="bg-[#f3eee4] xl:w-10 xl:h-10 w-12 h-12 rounded-full xl:p-3 p-4 cursor-pointer"/>
                    <RiInstagramLine
                        className="bg-[#f3eee4] xl:w-10 xl:h-10 w-12 h-12 rounded-full xl:p-3 p-4 cursor-pointer"/>
                    <VscTwitter
                        className="bg-[#f3eee4] xl:w-10 xl:h-10 w-12 h-12 rounded-full xl:p-3 p-4 cursor-pointer"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
