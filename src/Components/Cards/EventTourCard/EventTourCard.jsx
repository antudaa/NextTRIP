import React from 'react';
import DurationIcon from "../../../assets/Icons/return-to-the-past.png";
import starRating from "../../../assets/Icons/star.png";
import bookIcon from "../../../assets/Icons/click.png";
import { Link, useNavigate } from 'react-router-dom';


const EventTourCard = ({ tourData }) => {
   
    // console.log(tourData);

    const navigate = useNavigate()
    // Destructure Data
    const {_id, CoverImage, EventDuration, images, location, placeName, pricePerPerson, rating, title } = tourData || {};

    return (
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
            {/* Image With Rating & Place Name */}
            <div style={{ backgroundImage: `url(${CoverImage})` }}
                className={`relative block h-[200px] w-[270px] overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat`}
            >
                <div className="absolute inset-0 bg-black/25"></div>

                <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                    <div className="pt-16 text-white">
                        {/* Destination Name */}
                        <h3 className="text-xl font-semibold">{placeName}</h3>
                        {/* Location Name */}
                        <p className="text-sm">{location}</p>
                    </div>
                </div>
            </div>


            <div className="mt-2">
                <dl>
                    <div className='flex justify-between'>
                        <div>
                            <dt className="sr-only">Price</dt>
                            {/* Price Per Person */}
                            <dd className="text-lg text-black font-semibold">${pricePerPerson} <span className='text-lg'>/</span> <span className='text-sm text-gray-500'>Person</span> </dd>
                        </div>
                        {/* Ratings */}
                        <span
                            className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                        >   {rating}
                            {/* StarRating Icon */}
                            <img className='h-4 w-4 ml-2' src={starRating} alt="" />
                        </span>
                    </div>

                    {/* Title */}
                    <div>
                        <dt className="sr-only">Title</dt>
                        <dd className="text-sm h-[30px]">{title}</dd>
                    </div>
                </dl>

                {/* Event Duration Time */}
                <div className="mt-6 flex items-center gap-4 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        {/* Time Duration Icon */}
                        <img className="h-6 w-6 text-indigo-700" src={DurationIcon} alt="" />

                        <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Duration</p>

                            <p className="font-medium">{EventDuration}</p>
                        </div>
                    </div>
                    {/* onClick={() => navigate(`/tour-details/${_id}`)} */}
                    {/* to={(`/tour-details/${_id}`)} */}
                    {/* Button For Details & Book Now */}
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <div className="mt-1.5 sm:mt-0">
                            <Link to={(`/tour-details/${_id}`)}  className='px-4 py-1 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full border text-sm'>DETAILS</Link>
                        </div>
                    </div>
                    <div className="sm:shrink-0 sm:items-center">
                        {/* Book Item Icon */}
                        <img className="h-8 w-8 cursor-pointer text-indigo-700" src={bookIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EventTourCard;