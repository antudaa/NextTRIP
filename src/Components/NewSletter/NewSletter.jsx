import React from 'react';
import { Link } from 'react-router-dom';

const NewSletter = () => {

    return (
        <section className="py-14 w-[90%] mx-auto">
            <div
                // Background Image For NewSletter 
                style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/880/574/451/landscape-railay-beach-nature-thailand-wallpaper-preview.jpg)` }}
                className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl opacity-100 bg-cover bg-center bg-no-repeat md:px-8 md:mx-8">
                <div className="relative z-10 max-w-xl mx-auto sm:text-center">
                    <div className="space-y-3">

                        <h3 className="text-3xl text-white font-bold">
                            Sign up to our newsletter
                        </h3>
                        <p className="text-blue-100 leading-relaxed">
                            Receive latest tours, updates and many other things every weak...
                        </p>
                    </div>
                    <div className="mt-6">
                        {/* Newsletter Form */}
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="text-gray-500 w-full p-2 outline-none"
                            />
                            {/* Submit Button For NewSletter Form  */}
                            <Link
                                className="p-2 px-3 rounded-lg font-medium text-white bg-sky-500 hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none"
                            >
                                <img className='w-[22px] h-[22px] inline mx-auto my-auto'
                                    src="https://cdn-icons-png.flaticon.com/512/2983/2983787.png" alt=""
                                />
                            </Link>
                        </form>
                        {/* Privacy Message For User */}
                        <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
                            No spam ever, we are care about the protection of your data.
                            Read our <Link className="underline" href="javascript:void(0)"> Privacy Policy </Link>
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
            </div>
        </section>
    );
};

export default NewSletter;