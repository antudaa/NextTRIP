import React from 'react';

const State = () => {
    return (
        <div className="px-4 py-16 z-40 mx-auto w-[90%] md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                <div className="text-center">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        10 Years
                    </h6>
                    <p className="font-bold">Service</p>
                </div>
                <div className="text-center">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        22.1K+
                    </h6>
                    <p className="font-bold">Happy Travellers</p>
                </div>
                <div className="text-center">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        1.2K+
                    </h6>
                    <p className="font-bold">Reviews</p>
                </div>
                <div className="text-center">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        20k+
                    </h6>
                    <p className="font-bold">Subscribers</p>
                </div>
            </div>
        </div>
    );
};

export default State;