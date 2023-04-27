import React from 'react';

const WorldTourCard = ({ tour }) => {
    // console.log(tour);
    // Destructuring 
    const { tourName, img, description } = tour;

    return (

        <div className="bg-white  rounded-md">
            <div className="card-body">
                <div className="flex">
                    <div className="mt-4 mr-3">
                        {/* Tour Icon Image */}
                        <img className="w-[140px]" src={img} alt="" />
                    </div>
                    <div>
                        {/* Tour Name */}
                        <h2 className="card-title text-3xl py-3">{tourName}</h2>
                        {/* Description About Tour */}
                        <p>
                            {description}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorldTourCard;