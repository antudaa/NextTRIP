import React from "react";
import CategoryCard from "../Cards/CategoryCard/CategoryCard";
import { useGetCategoriesQuery } from "../../Features/eventTour/eventTourApi";


// Categories Data
const Categories = [
	{
		img: "https://c1.wallpaperflare.com/preview/262/812/847/travel-outdoors-girl-landscape.jpg",
		categoryName: "Nature",
		availablePackageQuantity: 7,
		availablePackagePlaceName: [
			"Bali",
			"Shimla",
			"Maldives",
			"Cappadocia",
			"Avenue of the Baobabs",
			"Arashiyama Bamboo Grove",
			"Torres Del Paine National Park",
		],
	},
	{
		img: "https://c4.wallpaperflare.com/wallpaper/282/810/421/ocean-summer-summertime-hotel-wallpaper-preview.jpg",
		categoryName: "Beach",
		availablePackageQuantity: 4,
		availablePackagePlaceName: [
			"Bali",
			"Maldives",
			"Koh Yao Nai",
			"Phi Phi Islands",
		],
	},
	{
		img: "https://guardian.ng/wp-content/uploads/2018/04/Photo_-Art-of-Safari.jpg",
		categoryName: "Desert",
		availablePackageQuantity: 2,
		availablePackagePlaceName: [
			"Sossusvlei, Namibia",
			"Pyramids of Giza, Egypt",
		],
	},
	{
		img: "https://www.deutschland.de/sites/default/files/media/image/AdobeStock_99698574.jpg",
		categoryName: "Historical Places",
		availablePackageQuantity: 3,
		availablePackagePlaceName: ["Bali", "Angkor Wat", "Machu Pichu"],
	},
	{
		img: "https://www.holidify.com/images/bgImages/KOH-YAO-NOI.jpg",
		categoryName: "Islands",
		availablePackageQuantity: 5,
		availablePackagePlaceName: [
			"Maldives",
			"Bora Bora",
			"Koh Yao Nai",
			"Phi Phi Islands",
			"Raja Ampat Islands",
		],
	},
	{
		img: "https://res.cloudinary.com/simpleview/image/upload/v1674650667/clients/norway/New_Project_11__28f603e7-fce9-4bb3-96ec-8500d66f86f1.jpg",
		categoryName: "Valleys",
		availablePackageQuantity: 3,
		availablePackagePlaceName: [
			"Antelope Canyon",
			"Geiranger Fjord",
			"Torres Del Paine National Park",
		],
	},
	{
		img: "https://lp-cms-production.imgix.net/image_browser/victoria-falls-aerial-shot.jpg",
		categoryName: "Water Falls",
		availablePackageQuantity: 3,
		availablePackagePlaceName: [
			"Victoria Falls",
			"Niagara Falls",
			"Vatnajokull Ice Caves",
		],
	},
	{
		img: "https://adventures.is/media/226921/anaconda-ice-cave-tunnel-vatnajokull.jpg",
		categoryName: "Caves",
		availablePackageQuantity: 2,
		availablePackagePlaceName: ["Geiranger Fjord", "Vatnajokull Ice Caves"],
	},
	{
		img: "https://tourscanner.com/blog/wp-content/uploads/2022/07/things-to-do-in-Cappadocia-Turkey.jpg",
		categoryName: "Cities",
		availablePackageQuantity: 4,
		availablePackagePlaceName: ["Cappadocia, "],
	},
];


const CategorySlider = () => {

	const { data, isLoading, isError } = useGetCategoriesQuery()
	console.log(data);

	return (
		<div className='relative my-10 mx-auto w-[90%]'>
			{/* Card Slider */}
			<div id="category-content" className='grid grid-cols-1 min-[1420px]:grid-cols-4 min-[1080px]:grid-cols-3 md:grid-cols-2 gap-6'>
				{
					Categories.slice(0, 8).map((category) => (
						<div key={category.id}>
							<CategoryCard
								key={category.id} category={category} />
						</div>
					))
				}
			</div>
		</div>
	);
};

export default CategorySlider;
