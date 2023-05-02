import React from 'react';
import culture from "../../../assets/Icons/theatre.png";

const integrations = [
    {
        title: "Figma",
        desc: "Ut enim ad minim veniam",
        icon: culture

    },
    {
        title: "Figma",
        desc: "Ut enim ad minim veniam",
        icon: culture

    },
    {
        title: "Figma",
        desc: "Ut enim ad minim veniam",
        icon: culture

    },
    {
        title: "Figma",
        desc: "Ut enim ad minim veniam",
        icon: culture

    },

]

const BannerCards = () => {
    return (
        <section className="">
            <div className="max-w-screen-xxl mx-auto px-4 md:px-8">
                <ul className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        integrations.map((item, idx) => (
                            <div key={idx} className="w-[100px] z-20 p-4 rounded-md shadow-md mx-auto bg-gray-900">
                                <img src={item.icon} alt="" className="object-cover object-center w-[60px] rounded-md h-[60px] dark:bg-gray-500" />

                            </div>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default BannerCards;