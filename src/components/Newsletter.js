import React from "react";
import Rec69 from "../images/Rectangle 69.png";
import Rec70 from "../images/Rectangle 70.png";
import Rec71 from "../images/Rectangle 71.png";

const Newsletter = () => {
    const news = [
        {
            img: Rec69,
            date: "01 October 2019",
            title: "Better Than Takeout Kung Pao Chicken",
            desc: "This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe ",
        },
        {
            img: Rec70,
            date: "03 October 2021",
            title: "The Best Sesame Soy Broccoli Salad",
            desc: "Hello broccoli salad! Broccoli salad with a sweet and tangy dressing is my new go to for summer parties. ",
        },
        {
            img: Rec71,
            date: "14 August 2022",
            title: "Better Than Takeout Kung Pao Chicken",
            desc: "This super easy version of dan dan noodles is fast, flavorful, and vegetarian to boot. It’s definitely ",
        },
    ];

    return (
        <div className="md:px-40 px-5">

            <div className="flex justify-center mt-10 m-auto">
                <div>
                    <h1 className="xl:w-80 xl:h-10 w-60 h-5 ml-10 text-lg text-center xl:ml-8 mb-4 xl:text-3xl font-bold">
                        Blog Our Latest News
                    </h1>
                    <p className="xl:w-96 xl:h-10 w-80 h-10 text-center text-sm text-gray-500">
                        Have you ever browsed food blogs like mine and wondered how to start a food blog of your very
                        own?
                    </p>
                </div>
            </div>

            <div className="grid xl:grid-cols-3 gap-5 mt-10 mb-28">
                {news.map((e) => {
                    return (
                        <div className="shadow rounded-xl">
                            <img src={e.img} alt="" className="m-auto"/>
                            <div className="p-8">
                                <div className="flex gap-5 mb-5">
                                    <p className="capitalize text-[#da3743] font-bold text-xs">design</p>
                                    <p className="text-xs text-gray-500">{e.date}</p>
                                </div>

                                <h1 className="font-bold text-gray-700 mb-5">{e.title}</h1>

                                <p className="text-xs text-gray-500 mb-5">
                                    {e.desc}
                                </p>
                                <button className="text-[#da3743] font-bold">READ MORE</button>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Newsletter;
