import React from "react";
import { useTourByIdQuery } from "../../../Features/eventTour/eventTourApi";
import { useParams } from "react-router-dom";

const TourDetails = () => {
    const {id} = useParams()
    const {data, isLoading, isError} = useTourByIdQuery(id)
    console.log(data);

    const {_id, CoverImage, EventDuration, images, location, placeName, pricePerPerson, rating, title,description } = data || {};
	return (
		<div>
			<div className="card bg-base-100 shadow-xl">
				<figure>
					<img
						src={CoverImage}
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p>{description}</p>
					{/* <div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default TourDetails;
