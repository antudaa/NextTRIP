import React from "react";
import { useGetToursQuery } from "../../../Features/eventTour/eventTourApi";
import ViewAllPackageCard from "./ViewAllPackageCard";

const ViewAllPackage = () => {
	const { data } = useGetToursQuery();
	console.log(data);
	return (
		<div>
			{data?.map((allPack) => (
				<ViewAllPackageCard key={allPack._id} allPack={allPack} />
			))}
		</div>
	);
};

export default ViewAllPackage;
