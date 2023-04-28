import React, { useEffect, useState } from 'react';
import EventTourCard from '../Cards/EventTourCard/EventTourCard';
import backArrow from "../../assets/Icons/previous.png";
import nextArrow from "../../assets/Icons/next.png";
import data from "../../../ToursData.json";

const BestPackagesHomePage = () => {

    // Handler For Back
    const scrollBack = () => {
        document.getElementById("tour-card-content").scrollLeft -= 350;
    };

    // Handler For Slide Next
    const scrollNext = () => {
        document.getElementById("tour-card-content").scrollLeft += 350;
    };

    return (
        <div className="container w-[90%] max-w-screen-xxl relative mx-auto">
            <div className='lg:text-5xl md:text-3xl text-2xl font-semibold text-black pl-6 text-start my-6'>
                {/* Header Text For Best Packages Home Section */}
                <h2>Find Popular <br /> Destinations </h2>
            </div>

            {/* Next Previous Button To Control Slider */}
            <div className='absolute right-0 z-10 top-0'>
                {/* Button For Slide Back */}
                <button onClick={scrollBack} className='p-3 m-2 rounded-full bg-white hover:bg-slate-600'>
                    <img className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]' src={backArrow} alt="" />
                </button>
                {/* Button For Slide Next */}
                <button onClick={scrollNext} className='p-3 m-2 rounded-full bg-white hover:bg-slate-600'>
                    <img className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]' src={nextArrow} alt="" />
                </button>
            </div>
            {/* Card Slider */}
            <div id="tour-card-content" className='carousel scroll-smooth relative p-4 flex items-center justify-start gap-4 overflow-x-auto'>
                {
                    data.map((tourData, i) => (
                        <EventTourCard key={i} data={tourData} />
                    ))
                }
            </div>
        </div>
    );
};

export default BestPackagesHomePage;