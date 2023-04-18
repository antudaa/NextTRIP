import React from 'react';
import WorldTourCard from '../Cards/WorldTourCard/WorldTourCard';

// World Tour Data
const WorldTourData = [
    {
        id: 1,
        tourName: "World Tour",
        img: "https://cdn-icons-png.flaticon.com/512/3943/3943319.png",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Similique, perferendis."
    },
    {
        id: 2,
        tourName: "Cruises",
        img: "https://cdn-icons-png.flaticon.com/512/5452/5452393.png",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Similique, perferendis."
    },
    {
        id: 3,
        tourName: "Best Tours",
        img: "https://cdn-icons-png.flaticon.com/512/2697/2697612.png",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Similique, perferendis."
    }
]

const WorldTour = () => {

    return (
        <div className="lg:w-[80%] w-[90%] mx-auto pt-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    WorldTourData.map((tour) => (
                        // Card For World Tour
                        <WorldTourCard
                            key={tour.id}
                            tour={tour}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default WorldTour;