import React from 'react';
import BeachVideo from '../../assets/Videos/video-section.mp4';

const BestBeaches = () => {

    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10 ">
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        Our Best Deal
                    </h5>
                    {/* Description About Deal*/}
                    <p className="mb-6 text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem totam rem aperiam, eaque ipsa quae explicabo.
                    </p>
                    {/* Price */}
                    <p className="py-4">
                        {" "}
                        <span className="line-through text-4xl text-slate-300">
                            800{" "}
                        </span>{" "}
                        <span className="text-4xl ml-2"> 500 $</span>{" "}
                        <span>/For person</span>
                    </p>
                    <hr className="mb-5 border-gray-300" />
                    {/* Book Now Button */}
                    <div className="flex items-center space-x-4">
                        <button className="btn bg-cyan-400 px-8 hover:bg-cyan-500 text-white border-none rounded-full">
                            Book Now 
                        </button>
                    </div>
                </div>
                <div className="relative">

                    {/* Right Side Video */}
                    <video className=" object-cover w-full h-56 rounded shadow-lg sm:h-96" src={BeachVideo} autoPlay loop muted />
                    <div className="mt-[-50px]">
                        <ul className="flex gap-y-2 z-40 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
                            {/* DAYS */}
                            <li className="bg-cyan-400 w-36 text-white p-4 flex-col">
                                <p className="text-center text-3xl">00</p>
                                <p className="capitalize text-center text-sm">DAYS</p>
                            </li>

                            {/* HOURS */}
                            <li className="bg-cyan-400 w-36 text-white p-4 flex-col">
                                <p className="mx-auto text-center text-3xl">00</p>
                                <p className="capitalize text-center text-sm">HOURS</p>
                            </li>

                            {/* MINUTES */}
                            <li className="bg-cyan-400 w-36 text-white p-4 flex-col">
                                <p className="mx-auto text-center text-3xl">00</p>
                                <p className="capitalize text-center text-sm">MINUTES</p>
                            </li>

                            {/* SECONDS */}
                            <li className="bg-cyan-400 w-36 text-white p-4 flex-col">
                                <p className="mx-auto text-center text-3xl">00</p>
                                <p className="capitalize text-center text-sm">SECONDS</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestBeaches;