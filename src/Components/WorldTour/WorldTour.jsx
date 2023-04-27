import React from 'react';
import WorldTourCard from '../Cards/WorldTourCard/WorldTourCard';
import { useGetWorldTourQuery } from '../../Features/worldTourApi/worldTourApi';

// World Tour Data
// const WorldTourData = [
//     {
        
//         tourName: "World Tour",
//         img: "https://cdn-icons-png.flaticon.com/512/3943/3943319.png",
//         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Similique, perferendis."
//     },
//     {
       
//         tourName: "Cruises",
//         img: "https://cdn-icons-png.flaticon.com/512/5452/5452393.png",
//         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Similique, perferendis."
//     },
//     {
        
//         tourName: "Best Tours",
//         img: "https://cdn-icons-png.flaticon.com/512/2697/2697612.png",
//         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Similique, perferendis."
//     }
// ]

const WorldTour = () => {

    const {data} = useGetWorldTourQuery();
    console.log(data);

    return (
        <div className="lg:w-[80%] w-[90%] mx-auto pt-10">
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