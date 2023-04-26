import React, { useState } from 'react';
import BannerBookTrip from '../BannerBookTrip/BannerBookTrip';

const BannerSection = () => {

    return (
        // Background Image Added From Imagebb 
        <section className="h-[115vh] w-[90vw] mx-auto rounded-2xl pb-6 bg-blue-100 px-[2%] pt-[20vh] lg:pt-[20vh] text-center opacity-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://i.ibb.co/5kXJFpM/Login-Page-Background.jpg)`, backgroundSize: "scroll" }} >

            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-2 bg-clip-text bg-gradient-to-r"><span className="text-white">Search your next</span> <span className="underline text-[skyblue]"><span className="text-white">Holiday</span></span></h1>

            <p className="my-8 text-white text-md lg:w-[60%] mx-auto md:w-[60%]">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration with us ...</p>

            {/* Booking Trip Form & Top Countries To Visit  */}
            <BannerBookTrip />

        </section>
    );
};

export default BannerSection;