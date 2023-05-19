import React from "react";
import signUpBackground from "../../assets/Videos/bookingBg.mp4";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
// import { CiLocationOn } from 'react-icons/ci';

const Booking = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	return (
		<div className="relative">
			<video
				autoPlay
				loop
				muted
				src={signUpBackground}
				className="absolute inset-0 object-cover w-full h-full"
				alt=""
			/>
			<div className="relative">
				<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="flex flex-col items-center justify-between xl:flex-row">
						<div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
								Find your next stay. Discover
								<br className="hidden md:block" />
								how to get anywhere
							</h2>
							<p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
								Search deals on hotels, homes, and much more...
							</p>
							<Link
								to="/"
								aria-label=""
								className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-[aliceblue] hover:text-teal-accent-700"
							>
								Learn more
								<svg
									className="inline-block w-3 ml-2"
									fill="currentColor"
									viewBox="0 0 12 12"
								>
									<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
								</svg>
							</Link>
						</div>

						{/* Sign Up Card */}
						<div className="w-full space-y-6 md:mt-0 lg:mt-8 bg-white rounded text-gray-600 sm:max-w-md">
							<div className="text-center">
								{/* Site Logo  */}
								<img src={logo} width={150} className="mx-auto" />
								<div className="mt-1 space-y-2">
									<h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
										Book Now !
									</h3>
								</div>
							</div>
							<div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
								{/* Submit Form  */}
								<form
									// onSubmit={handleSubmit(handleSignIn)}
									className="space-y-5"
								>
									<div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3">
										<div>
											<label className="font-medium">From</label>
                                            
											<input
                                            
												{...register("from", {
													required: "Where to go required",
												})}
												aria-invalid={errors.from ? "true" : "false"}
                                                
												type="text"
                                            
												placeholder="What's your location?"
												className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
											/>
											{/* Error Message  */}
											{errors.from && (
												<p className="text-red-500" role="alert">
													{errors.from?.message}
												</p>
											)}
										</div>
										<div>
											<label className="font-medium">To</label>
											
												<input
													type="text"
													placeholder="Whre are you going?"
													// Password Validation
													{...register("to", {
														required: "Where to go required",
													})}
													className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
												/>
											
											{/* Error Message  */}
											{errors.to && (
												<p className="text-red-500" role="alert">
													{errors.to?.message}
												</p>
											)}
										</div>
									</div>
									<div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3">
										<div>
											<label className="font-medium">Check-in</label>
											<input
												{...register("checkin", {
													required: "Put check-in date",
												})}
												aria-invalid={errors.checkin ? "true" : "false"}
												type="date"
												placeholder="Add depart date!"
												className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
											/>
											{/* Error Message  */}
											{errors.checkin && (
												<p className="text-red-500" role="alert">
													{errors.checkin?.message}
												</p>
											)}
										</div>
										<div>
											<label className="font-medium">Check-out</label>
											
												<input
													type="date"
                                                    name="backtime"
													placeholder="Add return date !"
													// Password Validation
													{...register("checkout", {
														required: "Put check out date",
													})}
													className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
												/>
											
											{/* Error Message  */}
											{errors.checkout && (
												<p className="text-red-500" role="alert">
													{errors.checkout?.message}
												</p>
											)}
										</div>
									</div>
									<div className="grid lg:grid-cols-1 md:grid-cols-1 gap-3">
										<div>
											<label className="font-medium">Travellers</label>
											<input
												{...register("travell", {
													required: "Where to go required",
												})}
												aria-invalid={errors.travell ? "true" : "false"}
												type="number"
												placeholder=" Total travellers !"
												className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
											/>
											{/* Error Message  */}
											{errors.travell && (
												<p className="text-red-500" role="alert">
													{errors.travell?.message}
												</p>
											)}
										</div>
										
									</div>
									{/* Submit Button  */}
									<button
										type="submit"
										className="bg-indigo-500 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300 w-full mx-auto"
									>
										Confirm <span className="ml-2"></span>
										<img
											className="w-[22px] h-[22px] inline my-auto"
											src="https://cdn-icons-png.flaticon.com/512/2983/2983787.png"
											alt=""
										/>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
