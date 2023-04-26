import React from 'react';
import ChooseCountry from '../ChooseCountry/ChooseCountry';

const BannerBookTrip = () => {
    return (
        <div className="gap-4 px-auto lg:grid-cols-4 lg:grid mx-auto mt-24">
            {/* Location Date People Query/Explore */}
            <div
                className="grid w-[310px] md:w-[450px] lg:w-[600px] grid-cols-1 gap-2 rounded-xl bg-[aliceblue] text-white shadow-blue-200 shadow-lg">
                <form className="grid px-2 py-4 lg:py-8 grid-cols-2 lg:grid-cols-4 text-redis-neutral-800 max-w-2xl mx-auto">
                    <div className=' flex flex-col'>
                        <label className='text-gray-900 font-semibold text-start' htmlFor="tentacles">Location</label>
                        <select id="countries" className="bg-gray-50 w-[100px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1 px-2">
                            <option defaultValue="US">Select</option>
                            <option defaultValue="US">USA</option>
                            <option defaultValue="CA">Canada</option>
                            <option defaultValue="FR">France</option>
                            <option defaultValue="DE">Germany</option>
                        </select>
                    </div>
                    <div className='w-[150px] flex flex-col'>
                        <label className='text-gray-900 font-semibold text-start' htmlFor="tentacles">Date</label>
                        <input className='appearance-none w-[150px] text-sm border rounded shadow py-1 px-2 text-gray-600' type="datetime-local" id="party" name="bday" />
                    </div>
                    <div className='lg:ml-6 flex flex-col'>
                        <label className='text-gray-900 font-semibold text-start' htmlFor="tentacles">People</label>
                        <input
                            className='appearance-none text-sm w-[80px] border rounded shadow py-1 px-2 text-gray-600'
                            type="number" defaultValue={1} id="tentacles" name="tentacles"
                            min="1" max="50" />
                    </div>
                    <div className='my-auto'>
                        <input
                            className='appearance-none cursor-pointer border shadow py-1 px-4 rounded-full text-[aliceblue] bg-black'
                            type="submit" />
                    </div>
                </form>
                {/* Top Countries To Travel */}
                <div className="bg-neutral-100 shadow-blue-200 shadow-lg relative p-2 rounded-lg w-[310px] sm:w-[510px] md:w-[720px] h-[350px] lg:w-[900px] xl:w-[1100px]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="lg:font-bold font-semibold text-start tracking-tight text-gray-800 lg:text-3xl text-2xl">Top Countries To Visit</h2>
                        <ChooseCountry />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBookTrip;