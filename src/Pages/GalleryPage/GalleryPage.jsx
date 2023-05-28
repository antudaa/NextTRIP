import React from "react";

// swiper slider
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import img1 from "../../assets/images/beach.jpg";
import img2 from "../../assets/images/bot.jpg";
import img3 from "../../assets/images/city6.jpg";
const GalleryPage = () => {
	return (
		<div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
			{/* <div className="-m-1 flex flex-wrap md:-m-2">
				<div className="flex w-1/2 flex-wrap">
					<div className="w-1/2 p-1 md:p-2">
						<img
							alt="gallery"
							className="block h-full w-full rounded-lg object-cover object-center"
							src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
						/>
					</div>
					<div className="w-1/2 p-1 md:p-2">
						<img
							alt="gallery"
							className="block h-full w-full rounded-lg object-cover object-center"
							src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
						/>
					</div>
					<div className="w-full p-1 md:p-2">
						<img
							alt="gallery"
							className="block h-full w-full rounded-lg object-cover object-center"
							src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
						/>
					</div>
				</div>
				<div className="flex w-1/2 flex-wrap">
					<div className="w-full p-1 md:p-2">
						<img
							alt="gallery"
							className="block h-full w-full rounded-lg object-cover object-center"
							src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
						/>
					</div>
					<div className="w-1/2 p-1 md:p-2">
						<img
							alt="gallery"
							className="block h-full w-full rounded-lg object-cover object-center"
							src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
						/>
					</div>
					<div className="w-1/2 p-1 md:p-2">
						<img
							alt="gallery"
							className="block h-full w-full rounded-lg object-cover object-center"
							src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
						/>
					</div>
				</div>
			</div> */}

			<>
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					className="mySwiper"
				>
					<div className="">
						<SwiperSlide className="w-[40%]">
							<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
						</SwiperSlide>
						<SwiperSlide className="w-[40%]">
							<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
						</SwiperSlide>
						<SwiperSlide className="w-[40%]">
							<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
						</SwiperSlide>
						<SwiperSlide className="w-[40%]">
							<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
						</SwiperSlide>
						<SwiperSlide className="w-[40%]">
							<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
						</SwiperSlide>
						<SwiperSlide className="w-[40%]">
							<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
						</SwiperSlide>
						<SwiperSlide className="w-[40%]">
							<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
						</SwiperSlide>
						<SwiperSlide className="w-[40%]">
							<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
						</SwiperSlide>
						<SwiperSlide className="w-[40%]">
							<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
						</SwiperSlide>
					</div>
				</Swiper>
			</>

			{/* section 2 */}

			<section className="py-6 dark:bg-gray-800 dark:text-gray-50 mt-10">
				<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
					<img
						src={img1}
						alt=""
						className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
					/>
					<img
						alt=""
						className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
						src={img2}
					/>
					<img
						alt=""
						className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
						src={img3}
					/>
					<img
						alt=""
						className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qd4mcfuucIssdejnVqbsLB8yFOAwpRet8d3gXid8m8B8TiKxlkCvO-lJaxktLZzrRl4&usqp=CAU"
					/>
					<img
						alt=""
						className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
						src="https://vastphotos.com/files/uploads/photos/10691/peaceful-water-landscape-photo-l.jpg?v=20220712073521"
					/>
					<img
						alt=""
						className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
						src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-tobi-620337.jpg&fm=jpg"
					/>
					<img
						alt=""
						className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
						src="https://c4.wallpaperflare.com/wallpaper/451/88/850/tropical-waterfall-wallpaper-preview.jpg"
					/>
					<img
						alt=""
						className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
						src="https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?cs=srgb&dl=pexels-francesco-ungaro-998653.jpg&fm=jpg"
					/>
					<img
						alt=""
						className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
						src="https://wander-lush.org/wp-content/uploads/2022/12/Most-beautiful-places-in-Morocco-DP-Chefchaouen.jpg"
					/>
					<img
						src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/08/shutterstock-525106075-kw-200817-A-sunset-shot-of-the-Blue-Mosque-at-Istanbul.jpg"
						alt=""
						className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
					/>
				</div>
			</section>
		</div>
	);
};

export default GalleryPage;
