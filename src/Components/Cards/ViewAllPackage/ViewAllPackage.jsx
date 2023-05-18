import React, { useEffect, useState } from "react";
import { useGetToursQuery } from "../../../Features/eventTour/eventTourApi";
import ViewAllPackageCard from "./ViewAllPackageCard";

const ViewAllPackage = () => {
	const { data } = useGetToursQuery();
	// console.log(data);

	const [displayTourPackages, setTourPackages] = useState(data);
	// console.log(displayTourPackages);

	// Set the value of data Inside use Effect after rendering
	useEffect(() => {
		data && setTourPackages(data)
		// Giving data as a dependency so that after render data it will reset the image data 
	}, data);

	// Filtering Data 
	const filterTourPackages = (value) => {
		const updatedDisplayPackage = data.filter((currentEle) => {
			return currentEle?.category[0] === value || currentEle?.category[1] === value || currentEle?.category[2] === value || currentEle?.category[3] === value || currentEle?.category[4] === value;
		})

		setTourPackages(updatedDisplayPackage);
	};

	// Displaying All Packages 
	const displayAllPackages = () => {
		setTourPackages(data);
	}

	return (
		<div className="my-16">
			<h2 className="text-4xl font-semibold text-center text-sky-500">View Our All Packages</h2>

			<section className="portfolio-section" id="portfolio">
				<div className="portfolio-menu mt-2 mb-4">
					<nav className="controls">
						<button type="button" className="control outline" onClick={() => displayAllPackages()}>All</button>
						<button type="button" className="control outline" onClick={() => filterTourPackages("nature")}>Nature</button>
						<button type="button" className="control outline" onClick={() => filterTourPackages("Islands")}>Islands</button>
						<button type="button" className="control outline" onClick={() => filterTourPackages("historicalPlaces")}>Historical Place</button>
						<button type="button" className="control outline" onClick={() => filterTourPackages("beach")}>Beach</button>
						<button type="button" className="control outline" onClick={() => filterTourPackages("waterfall")}>Waterfall</button>
						<button type="button" className="control outline" onClick={() => filterTourPackages("desert")}>Desert</button>
						
						<button type="button" className="control outline" onClick={() => filterTourPackages("cities")}>Cities</button>
						<button type="button" className="control outline" onClick={() => filterTourPackages("pyramid")}>Pyramids</button>
						<button type="button" className="control outline" onClick={() => filterTourPackages("bali")}>Bali</button>
					</nav>
				</div>
			</section>
			<div className="">
				{displayTourPackages?.map((allPack) => (
					<ViewAllPackageCard key={allPack._id} allPack={allPack} />
				))}
			</div>
		</div>
	);
};

export default ViewAllPackage;
