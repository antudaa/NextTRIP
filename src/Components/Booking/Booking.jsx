import React, { useEffect, useState } from "react";
import signUpBackground from "../../assets/Videos/bookingBg.mp4";
import { useFieldArray, useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { usePostBookMutation } from "../../Features/categoryApi/categoryApi";
import { toast } from "react-hot-toast";
import { useTourByIdQuery } from "../../Features/eventTour/eventTourApi";


const Booking = () => {


	const { id } = useParams();
	const { data, isLoading, isError } = useTourByIdQuery(id);

	// Destructuring Details
	const {
		_id,
		CoverImage,
		EventDuration,
		images,
		location,
		placeName,
		StartDate,
		EndDate,
		pricePerPerson,
		joinedMembers,
		rating,
		title,
		description,
	} = data || {};


	// UseState to set The cover Image 
	const [image, setImage] = useState(``);

	// Set the value of setImage Inside use Effect to set the image data after rendering all the necessary data.
	useEffect(() => {
		data && setImage(data.CoverImage)
		// Giving data as a dependency so that after render data it will reset the image data 
	}, data);

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm();

	const [postBook] = usePostBookMutation();


	const handleBooking = (data) => {
		console.log(data);
		postBook({ ...data, queries: [] })
		toast.success('Booking confirmed')

	};


	return (
		<div className="relative">
			<div className="relative">
				<div class="relative mx-auto w-full bg-[aliceblue]">
					<div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
						<div class="px-4 pt-8">
							<p class="text-xl font-medium">Order Summary</p>
							<div className="min-w-screen min-h-screen bg-[aliceblue] flex items-center p-5 lg:p-10 overflow-hidden relative">
								<div className="w-full max-w-7xl rounded bg-white shadow-xl mx-auto text-gray-800 relative md:text-left">
									<div className="grid grid-cols-1  gap-3 min-h-screen items-center py-4 px-8 lg:container mx-auto">
										<div className=" lg:w-full flex flex-col md:flex-row gap-4">
											<img
												id="expandedImg"
												src={image}
												alt="Sunrise shot of Downtown Dubai and Burj Khalifa."
												className="w-4/5 object-cover h-auto sm:h-[24rem] lg:h-[27rem] aspect-[3/2] mx-auto"
											/>
											<div className="flex flex-row md:flex-col flex-wrap align-center mx-auto justify-around gap-2 w-40">
												{images?.slice(0, 5).map((img, i) => (
													<img
														key={i}
														src={img}
														alt="Image"
														className="cursor-pointer w-[60px] md:w-full h-[50px] md:h-[80px] object-cover aspect-[3/2]"
														onClick={() => setImage(img)}
													/>
												))}
											</div>
										</div>
										<div className="md:w-4/5 xl:w-[90%] mt-7">
											<h2
												className="text-3xl font-bold text-gray-800 mt-8 md:mt-0"
												id="imgtext"
											>
												{title}
											</h2>
											<p className="mt-3.5 mb-6 flex gap-1 items-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="text-gray-400 w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
														clipRule="evenodd"
													/>
												</svg>
												{placeName}{" "}
												<span className="flex ml-4">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="w-5 h-5 text-yellow-500"
													>
														<path
															fillRule="evenodd"
															d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
															clipRule="evenodd"
														/>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="w-5 h-5 text-yellow-500"
													>
														<path
															fillRule="evenodd"
															d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
															clipRule="evenodd"
														/>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="w-5 h-5 text-yellow-500"
													>
														<path
															fillRule="evenodd"
															d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
															clipRule="evenodd"
														/>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="w-5 h-5 text-yellow-500"
													>
														<path
															fillRule="evenodd"
															d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
															clipRule="evenodd"
														/>
													</svg>
												</span>
											</p>
											<p className="text-gray-700 leading-relaxed">
												{/* {description?.slice(0, 400)}{" "} */}
												{description}{" "}
												<span className="text-sm text-[blue]">.....more</span>{" "}
											</p>
											<div className="relative px-4 mt-16  ">
												<div className="">
													<div className="flex items-baseline">
														<span className="bg-teal-200 py-1 text-teal-800 text-xs px-2 inline-block rounded-full text-center uppercase font-semibold tracking-wide">
															{joinedMembers} Travellers Already Joined Us
														</span>
														<div className="ml-2 text-gray-600 text-center uppercase text-xs font-semibold tracking-wider">
															{StartDate} &bull; {EndDate}
														</div>
													</div>

													<h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
														{EventDuration}
													</h4>

													<div className="mt-1">
														${pricePerPerson}
														<span className="text-gray-600 text-sm"> / Per Person</span>
													</div>
													<div className="mt-4">
														<span className="text-teal-600 text-md font-semibold">
															{rating} ratings{" "}
														</span>
														<span className="text-sm text-gray-600">
															(based on 234 ratings)
														</span>
													</div>
												</div>
											</div>
											<div className="flex justify-between mt-10">
												<Link
													to="/booking"
													className="inline-block capitalize font-semibold text-lg border-[none] rounded-full bg-cyan-400 text-white py-2 px-4 hover:bg-blue-500 hover:text-white hover:border-blue-500"
												>
													book now
												</Link>
												<button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
													<img src="" className="w-5 h-5" alt="Icon not found" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Left Side Payment Form  */}
						<div class="mt-10 h-[800px] bg-gray-50 px-4 pt-8 lg:mt-[100px]">
							<p class="text-xl font-medium">Payment Details</p>
							<p class="text-gray-400">Complete your order by providing your payment details.</p>
							<div class="">
								<label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
								<div class="relative">
									<input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
									<div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
										</svg>
									</div>
								</div>
								<label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
								<div class="relative">
									<input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
									<div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
										</svg>
									</div>
								</div>
								<label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
								<div class="flex">
									<div class="relative w-7/12 flex-shrink-0">
										<input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
										<div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
											<svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
												<path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
												<path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
											</svg>
										</div>
									</div>
									<input type="text" name="credit-expiry" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
									<input type="text" name="credit-cvc" class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
								</div>
								<label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
								<div class="flex flex-col sm:flex-row">
									<div class="relative flex-shrink-0 sm:w-7/12">
										<input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
										<div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
											<img class="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
										</div>
									</div>
									<select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
										<option value="State">State</option>
									</select>
									<input type="text" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
								</div>

								{/* <!-- Total --> */}
								<div class="mt-6 border-t border-b py-2">
									<div class="flex items-center justify-between">
										<p class="text-sm font-medium text-gray-900">Subtotal</p>
										<p class="font-semibold text-gray-900">$399.00</p>
									</div>
									<div class="flex items-center justify-between">
										<p class="text-sm font-medium text-gray-900">Shipping</p>
										<p class="font-semibold text-gray-900">$8.00</p>
									</div>
								</div>
								<div class="mt-6 flex items-center justify-between">
									<p class="text-sm font-medium text-gray-900">Total</p>
									<p class="text-2xl font-semibold text-gray-900">$408.00</p>
								</div>
							</div>
							<button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Booking;
