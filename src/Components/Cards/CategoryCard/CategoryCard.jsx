import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    // console.log(category);
	// Destructuring category
	const {
		img,
		categoryName,
		availablePackagePlaceName,
		availablePackageQuantity,
	} = category;

	return (
		<div className="shadow-md duration-500 hover:shadow-xl relative group opacity-90 flex justify-center items-center h-[320px] w-[200px] rounded-full">
			{/* Background Image For Category Card */}
			<img
				className="object-center object-cover rounded-full h-[320px] w-[200px]"
				src={img}
				alt="Image Not Found"
			/>
			<div className="dark:text-white left-8 bottom-4 z-10 absolute leading-none text-gray-800 py-3 w-36">
				<h3 className="font-bold pb-1 text-center text-2xl text-white">
					{categoryName}
				</h3>
				<p className="text-lg text-center text-white">
					{availablePackageQuantity} Packages
				</p>
			</div>

			{/* Mouse Hover Effect Details */}
			<div className="absolute opacity-0 group-hover:opacity-100 rounded-full  group-hover:divider-cyan-300 transition duration-700 bottom-3 py-6 z-0 px-20 w-36"></div>
			<div className="absolute h-full w-full flex flex-col items-center rounded-full justify-center -bottom-10 group-hover:bottom-0 z-20 group-hover:bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-700">
				<h3 className="text-white text-2xl font-semibold py-4 px-5">
					Packages
				</h3>
				{
					// Mapping Available Packages Place Name
					availablePackagePlaceName.slice(0, 3).map((name, i) => (
						<p key={i} className="text-sm mb-1 text-white">
							{name}
						</p>
					))
				}
				{/* Button For View The Destinations */}
				<Link
					to="/productDetails"
					className="bg-white mt-4 hover:text-cyan-500 text-cyan-500 text-[12px] rounded-3xl py-2 px-5"
				>
					VIEW DESTINATIONS
				</Link>
			</div>
		</div>
	);
};

export default CategoryCard;
