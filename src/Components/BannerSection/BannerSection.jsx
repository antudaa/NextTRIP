import React, { useState } from 'react';
import BackgroundImage from "../../assets/images/LoginPageBackground.jpg";
import { Link } from 'react-router-dom';
import BannerCards from '../Cards/BannerCards/BannerCards';


const BannerSection = () => {

    const [isVideoPoppedUp, setVideoPopUp] = useState(false);

    return (
        <section>
            <div className="max-w-screen-xxl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
                <img src='https://i.ibb.co/5kXJFpM/Login-Page-Background.jpg'
                    className="absolute top-0 lg:top-0 left-0 w-full sm:h-[70%] h-[70%] lg:h-full opacity-90 object-cover " />
                <div className="space-y-5 z-30 mx-auto text-center">
                    <h1 className=" text-2xl lg:text-4xl text-white font-extrabold mx-auto">
                        Search Your Next <span>Trip</span>
                    </h1>
                    <p className="mx-auto xl:mx-0 capitalize text-center text-xl lg:text-2xl text-white">
                        Explore the beauty of the world with us...
                    </p>
                    <div>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="max-w-md px-4 mx-auto mt-12">
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                                />
                            </div>
                        </form>
                    </div>
                    {/* Banner Cards */}
                    <BannerCards className="x-40" />
                </div>
            </div>
        </section>
    )
}

export default BannerSection;