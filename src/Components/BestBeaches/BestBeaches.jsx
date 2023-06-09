import React from "react";
import BeachVideo from "../../assets/Videos/video-section.mp4";
import { Link } from "react-router-dom";

const BestBeaches = () => {
	// Set the date we're counting down to
	// const countDownDate = new Date("Jul 7, 2024 00:00:00").getTime();

	// // Update the countdown every 1 second
	// const x = setInterval(function () {
	// 	// Get today's date and time
	// 	const now = new Date().getTime();

	// 	// Find the distance between now and the count down date
	// 	const distance = countDownDate - now;

	// 	// Time calculations for days, hours, minutes and seconds
	// 	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	// 	const hours = Math.floor(
	// 		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	// 	);
	// 	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	// 	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// 	// Display the result in the corresponding elements
	// 	document.getElementById("days").textContent = days + "d";
	// 	document.getElementById("hours").textContent = hours + "h";
	// 	document.getElementById("minutes").textContent = minutes + "m";
	// 	document.getElementById("seconds").textContent = seconds + "s";

	// 	// If the count down is over, write some text
	// 	if (distance < 0) {
	// 		clearInterval(x);
	// 		document.getElementById("countdown").innerHTML = "EXPIRED";
	// 	}
	// }, 1000);

	return (
		<div className="px-4 pt-16 mx-auto max-w-screen-xxl w-[90%] md:px-24 lg:px-8 lg:pt-20">
			<div className="grid gap-10 lg:grid-cols-2">
				<div className="lg:pr-10 ">
					<h5 className="mb-4 text-4xl font-bold leading-none text-gray-700">
						Our Best <span className="underline text-cyan-400"><span className="text-gray-700">Deal</span></span>
					</h5>
					{/* Description About Deal*/}
					<p className="mb-6 text-gray-900">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem totam rem aperiam, eaque ipsa quae explicabo.
					</p>
					{/* Price */}
					<p className="py-4">
						{" "}
						<span className="line-through text-4xl text-slate-300">
							800{" "}
						</span>{" "}
						<span className="text-4xl ml-2"> 500 $</span>{" "}
						<span>/For person</span>
					</p>
					<hr className="mb-5 border-gray-300" />
					{/* Book Now Button */}
					<div className="flex items-center space-x-4">
						<Link to='/booking' className="btn bg-cyan-400 px-8 hover:bg-cyan-500 text-white border-none rounded-full">
							Book Now
						</Link>
					</div>
				</div>
				<div className="relative">
					{/* Right Side Video */}
					<video
						className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
						src={BeachVideo}
						autoPlay
						loop
						muted
					/>
					<div className="mt-[-50px]">
						<ul className="flex gap-y-2 z-40 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
							{/* DAYS */}
							<li className="bg-cyan-400 w-36 text-white p-4 flex-col">
								<p id="days" className="text-center text-3xl"></p>
								<p className="capitalize text-center text-sm">DAYS</p>
							</li>

							{/* HOURS */}
							<li className="bg-cyan-400 w-36 text-white p-4 flex-col">
								<p id="hours" className="mx-auto text-center text-3xl"></p>
								<p className="capitalize text-center text-sm">HOURS</p>
							</li>

							{/* MINUTES */}
							<li className="bg-cyan-400 w-36 text-white p-4 flex-col">
								<p id="minutes" className="mx-auto text-center text-3xl"></p>
								<p className="capitalize text-center text-sm">MINUTES</p>
							</li>
							{/* SECONDS */}
							<li className="bg-cyan-400 w-36 text-white p-4 flex-col">
								<p id="seconds" className="mx-auto text-center text-3xl"></p>
								<p className="capitalize text-center text-sm">SECONDS</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestBeaches;
