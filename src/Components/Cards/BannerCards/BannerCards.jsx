import React from 'react';
import culture from "../../../assets/Icons/culture.png";
import relax from "../../../assets/Icons/relax.png";
import history from "../../../assets/Icons/history.png";
import city from "../../../assets/Icons/city.png";

const integrations = [
    {
        title: "Culture",
        icon: culture

    },
    {
        title: "Relax",
        icon: relax

    },
    {
        title: "History",
        icon: history

    },
    {
        title: "City",
        icon: city

    },

]

const BannerCards = () => {
    return (
        <section className="">
            <div className="max-w-screen-xxl mx-auto px-4 md:px-8">
                <ul className="mt-16 flex justify-around items-center flex-wrap gap-8">
                    {
                        integrations.map((item, idx) => (
                            <div key={idx} className="w-[100px] z-20 p-4 rounded-md shadow-md mx-auto backdrop-blur-sm bg-white/30">
                                <img src={item.icon} alt="" className="object-cover z-50 object-center w-[60px] rounded-md h-[60px] " />
                                <h3 className='text-center z-50 mt-2 text-white'>{item.title}</h3>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default BannerCards;