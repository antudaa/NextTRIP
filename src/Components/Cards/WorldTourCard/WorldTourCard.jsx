import React from 'react';

const WorldTourCard = ({ tour }) => {

    const { tourName, img, description } = tour;

    return (
        <div className="bg-white rounded-md">
            <div className="card-body">
                <div className="flex">
                    <div className="mt-4 mr-3">
                        <img className="w-[140px]" src={img} alt="" />
                    </div>
                    <div>
                        <h2 className="card-title text-3xl py-3">{tourName}</h2>
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