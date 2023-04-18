import React from 'react';
import img from "../../assets/images/city6.jpg";

const NextHoliday = () => {

    return (
        // Background Image
        <div className="hero h-96 bg-no-repeat bg-cover w-full" style={{ backgroundImage: `url(${img})`, }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-justify items-center text-neutral-content">
                <div className="flex flex-col lg:flex-row">
                    <h1 className="mb-5 text-5xl text-white font-bold">
                        Your
                        <br />
                        Next
                        {/* Underline Text Color  */}
                        <span className="underline text-sky-400">
                            {/* Text Color */}
                            <span className="text-white">
                                Holiday
                            </span>
                        </span>
                    </h1>
                    <button className="btn px-10 bg-white text-sky-400 ml-20 mt-8 rounded-3xl">
                        View all Package
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NextHoliday;