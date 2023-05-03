import React, { useState } from "react";
import { useTourByIdQuery } from "../../../Features/eventTour/eventTourApi";
import { useParams } from "react-router-dom";

const demoImage = [
	`https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
	`https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
	`https://images.unsplash.com/photo-1628859017536-c2f1d69f3c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=637&q=80`,
	`https://c4.wallpaperflare.com/wallpaper/880/574/451/landscape-railay-beach-nature-thailand-wallpaper-preview.jpg`,
	`https://c4.wallpaperflare.com/wallpaper/827/390/338/landscape-nature-beach-resort-wallpaper-preview.jpg`
]

const TourDetails = () => {

	// Corner Icon URL
	<style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style>

	const { id } = useParams()
	const { data, isLoading, isError } = useTourByIdQuery(id)
	console.log(data);

	// Destructuring Details 
	const { _id, CoverImage, EventDuration, images, location, placeName, StartDate
		, EndDate, pricePerPerson, joinedMembers, rating, title, description } = data || {};

	// Changing Images Via useState 
	const [image, setImage] = useState(CoverImage ? CoverImage : CoverImage);

	return (
		<div>
			<div className="min-w-screen min-h-screen bg-[aliceblue] flex items-center p-5 lg:p-10 overflow-hidden relative">
				<div className="w-full max-w-6xl rounded bg-white shadow-xl mx-auto text-gray-800 relative md:text-left">
					<div className="md:flex gap-6 min-h-screen items-center py-4 px-8 lg:container mx-auto xl:px-24">
						<div className="md:w-3/5 flex flex-col md:flex-row gap-6">
							<img id="expandedImg" src={image} alt="Sunrise shot of Downtown Dubai and Burj Khalifa." className="w-9/12 object-cover h-auto sm:h-[24rem] lg:h-[27rem] aspect-[3/2]  mx-auto" />
							<div className="flex flex-row md:flex-col flex-wrap align-center justify-around gap-2">
								{
									images?.slice(0, 5).map((image, i) => (
										<img key={i} src={image} alt="Image"
											className="cursor-pointer w-[60px] md:w-full h-[50px] md:h-[80px] object-cover aspect-[3/2]"
											onClick={() => setImage(image)}
										/>
									))
								}
							</div>
						</div>
						<div className="md:w-2/5 xl:w-[45%]">
							<h2 className="text-3xl font-bold text-gray-800 mt-8 md:mt-0" id="imgtext">{title}</h2>
							<p className="mt-3.5 mb-6 flex gap-1 items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-5 h-5">
									<path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
								</svg>

								{placeName} <span className="flex ml-4">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
										<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
										<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
										<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
										<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
									</svg>
								</span>
							</p>
							<p className="text-gray-700 leading-relaxed">{description?.slice(0, 400)} <span className="text-sm text-[blue]">.....more</span> </p>
							<div className="relative px-4 mt-16  ">
								<div className="">
									<div className="flex items-baseline">
										<span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full text-center uppercase font-semibold tracking-wide">
											{joinedMembers} Travellers Already Joined Us
										</span>
										<div className="ml-2 text-gray-600 text-center uppercase text-xs font-semibold tracking-wider">
											{StartDate}  &bull; {EndDate}
										</div>
									</div>

									<h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{EventDuration}</h4>

									<div className="mt-1">
										${pricePerPerson}
										<span className="text-gray-600 text-sm">   / Per Person</span>
									</div>
									<div className="mt-4">
										<span className="text-teal-600 text-md font-semibold">{rating} ratings </span>
										<span className="text-sm text-gray-600">(based on 234 ratings)</span>
									</div>
								</div>
							</div>
							<div className="flex justify-between mt-10">
								<a href="#" className="inline-block capitalize font-semibold text-lg border-2 border-black rounded-full py-2 px-4 hover:bg-blue-500 hover:text-white hover:border-blue-500">book now</a>
								<span className="cursor-pointer hover:text-gray-700 flex items-center text-gray-700">Cart</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
			<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
				<div>
					<a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
						<img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default TourDetails;
