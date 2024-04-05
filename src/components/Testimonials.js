// @ts-nocheck
import React from "react";
import Lady from "../images/Image.png";
import QuoteIcon from "../images/Icon Color.png";
import Active from "../images/Active.png";

const Testimonials = () => {
    return (
        <div className="xl:px-40 md:px-5 bg-[#f9e1e3] grid md:grid-cols-2">
            <div className="md:mt-20">
                <h1 className="xl:w-80 xl:h-40 md:mx-0 mx-5 text-xl md:mt-0 mt-10 xl:text-5xl md:text-3xl text-gray-700 mb-5 font-bold">
                    What our customers say about us
                </h1>
                <h3 className="w-80 md:h-20 h-10 xl:mb-0 mb-28 font-bold text-gray-500 md:mx-0 mx-5">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
                </h3>
            </div>

            <div>
                <div
                    className="flex rounded-xl shadow-md bg-white md:p-5 px-4 pt-4 pb-10 md:mt-16 justify-center xl:w-full xl:h-80 md:w-80 md:h-48 md:mx-0 mx-5">
                    <div className="xl:flex grid xl:gap-10">
                        <div className="flex xl:flex-col xl:gap-0 gap-5">
                            <img src={Lady} className="xl:w-40 xl:h-full w-10 h-10 object-contain" alt=""/>
                            <div>
                                <p className="text-center xl:w-20 xl:h-16 xl:ml-10 xl:text-xl font-bold xl:-mt-5">
                                    John Samson
                                </p>
                                <p className="whitespace-nowrap xl:ml-8 xl:text-sm text-xs ml-3 text-gray-700">
                                    Enugu, Nigeria
                                </p>
                            </div>
                        </div>

                        <div
                            className="xl:mt-20 xl:w-96 xl:h-20 h-20 mt-4 xl:text-base text-xs text-gray-500">
                            White dwarf a still more glorious dawn awaits tingling of the spine emerged into
                            consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the
                            energy hidden
                            in matter concept of the number one permanence.
                        </div>
                    </div>

                    <div>
                        <img src={QuoteIcon} className="xl:w-full xl:h-5 w-20 h-3" alt=""/>
                    </div>
                </div>

                <div className="flex justify-center items-center my-20">
                    <img src={Active} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
