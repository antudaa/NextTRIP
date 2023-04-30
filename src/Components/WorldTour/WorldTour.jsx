import React from 'react';
import WorldTourCard from '../Cards/WorldTourCard/WorldTourCard';
import { useGetWorldTourQuery } from '../../Features/worldTourApi/worldTourApi';

const WorldTour = () => {

    // Fetching Data Via RTK Query 
    const { data } = useGetWorldTourQuery();
    // console.log(data);

    return (
        <div className="max-w-screen-xxl w-[90%] mx-auto pt-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    data?.map((tour) => (
                        // Card For World Tour
                        <WorldTourCard
                            key={tour._id}
                            tour={tour}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default WorldTour;