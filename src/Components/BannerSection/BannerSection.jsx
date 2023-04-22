import React, { useState } from 'react';
import BannerBackground from "../../assets/images/LoginPageBackground.jpg";

const BannerSection = () => {

    return (
        <section className="h-[115vh] pb-6 bg-blue-100 px-[12%] pt-[10vh] lg:pt-[8vh] text-center opacity-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BannerBackground})`, backgroundSize: "scroll" }} >

            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-2 bg-clip-text bg-gradient-to-r"><span className="text-white">Search your next</span> <span className="underline text-[skyblue]"><span className="text-white">Holiday</span></span></h1>

            <p className="my-8 text-white text-md lg:w-[60%] mx-auto md:w-[60%]">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration with us ...</p>

            <div className="w-11/12 z-0 md:w-80 lg:w-96 mx-auto mb-8">
                <div className="relative flex items-center">
                    <input id="10" placeholder="Find your Destination..." type="text" className="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" />
                    <img className="absolute right-2 h-6 w-6 rounded-md bg-transparent text-xs font-semibold text-white transition-all duration-200" src="https://cdn-icons-png.flaticon.com/512/8915/8915520.png" alt="search icon"></img>
                </div>
            </div>

            <div className="gap-4 lg:grid-cols-4 lg:grid mx-auto mt-24">
                {/* Location Date People Query/Explore */}
                <div
                    className="grid w-[310px] md:w-[450px] lg:w-[600px] grid-cols-1 gap-2 rounded-xl bg-[aliceblue] text-white shadow-blue-200 dark:shadow-blue-900 shadow-lg">
                    <form className="grid p-2 grid-cols-2 lg:grid-cols-4 text-redis-neutral-800 max-w-2xl mx-auto">
                        <div className=' flex flex-col'>
                            <label className='text-gray-800 text-start' htmlFor="tentacles">Location</label>
                            <select id="countries" className="bg-gray-50 w-[100px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1 px-2">
                                <option defaultValue="US">Select</option>
                                <option defaultValue="US">USA</option>
                                <option defaultValue="CA">Canada</option>
                                <option defaultValue="FR">France</option>
                                <option defaultValue="DE">Germany</option>
                            </select>
                        </div>
                        <div className='w-[150px] flex flex-col'>
                            <label className='text-gray-800 text-start' htmlFor="tentacles">Date</label>
                            <input className='appearance-none w-[150px] text-sm border rounded shadow py-1 px-2 text-gray-600' type="datetime-local" id="party" name="bday" />
                        </div>
                        <div className='lg:ml-6 flex flex-col'>
                            <label className='text-gray-800 text-start' htmlFor="tentacles">People</label>
                            <input
                                className='appearance-none text-sm w-[80px] border rounded shadow py-1 px-2 text-gray-600'
                                type="number" defaultValue={1} id="tentacles" name="tentacles"
                                min="1" max="50" />
                        </div>
                        <div className='my-auto'>
                            <input
                                className='appearance-none border rounded shadow py-1 px-2 text-gray-600'
                                type="submit" />
                        </div>
                    </form>
                    {/* Top Countries To Travel */}
                    <div className="bg-neutral-100 p-2 rounded-lg w-[310px] md:w-[650px] h-[300px] lg:w-[1000px]">
                        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:py-24 lg:px-8">
                            <h2 className="font-bold text-start tracking-tight text-gray-800 text-3xl">Top Countries To Visit</h2>
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
                                <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">
                                        <dl>
                                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">Total free servers</dt>
                                            <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">1.6M</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">
                                        <dl>
                                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">Servers a month</dt>
                                            <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">19.2K</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">
                                        <dl>
                                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">Servers a week</dt>
                                            <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">4.9K</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">
                                        <dl>
                                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">Total users</dt>
                                            <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">166.7K</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BannerSection;