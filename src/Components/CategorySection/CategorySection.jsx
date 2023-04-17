import React from 'react';
import { Link } from 'react-router-dom';


// Categories 
const Categories = [
    {
        id: 1,
        img: 'https://www.holidify.com/images/bgImages/BALI.jpg',
        categoryName: "Beach",
        availablePackageQuantity: 6,
        availablePackagePlaceName: [
            "Shimla",
            "Maldives",
            "Cappadocia",
            "Avenue of the Baobabs",
            "Arashiyama Bamboo Grove",
            "Torres Del Paine National Park",
        ]
    },
    {
        id: 2,
        img: 'https://guardian.ng/wp-content/uploads/2018/04/Photo_-Art-of-Safari.jpg',
        categoryName: "Desert",
        availablePackageQuantity: 2,
        availablePackagePlaceName: [
            "Sossusvlei, Namibia",
            "Pyramids of Giza, Egypt",
        ]
    },
    {
        id: 3,
        img: 'https://www.deutschland.de/sites/default/files/media/image/AdobeStock_99698574.jpg',
        categoryName: "Historical Places",
        availablePackageQuantity: 3,
        availablePackagePlaceName: [
            "Bali",
            "Angkor Wat",
            "Machu Pichu",
        ]
    },
    {
        id: 4,
        img: 'https://www.holidify.com/images/bgImages/KOH-YAO-NOI.jpg',
        categoryName: "Islands",
        availablePackageQuantity: 5,
        availablePackagePlaceName: [
            "Maldives",
            "Bora Bora",
            "Koh Yao Nai",
            "Phi Phi Islands",
            "Raja Ampat Islands",
        ]
    },
    {
        id: 5,
        img: 'https://adventures.is/media/226921/anaconda-ice-cave-tunnel-vatnajokull.jpg',
        categoryName: "Caves & Valleys",
        availablePackageQuantity: 4,
        availablePackagePlaceName: [
            "Antelope Canyon",
            "Geiranger Fjord",
            "Vatnajokull Ice Caves",
            "Torres Del Paine National Park",
        ]
    },
    {
        id: 6,
        img: 'https://res.cloudinary.com/simpleview/image/upload/v1674650667/clients/norway/New_Project_11__28f603e7-fce9-4bb3-96ec-8500d66f86f1.jpg',
        categoryName: "Water Falls",
        availablePackageQuantity: 3,
        availablePackagePlaceName: [
            "Victoria Falls",
            "Niagara Falls",
            "Vatnajokull Ice Caves",
        ]
    }
]

const CategorySection = () => {
    return (
        <div className='p-8'>
            <div className='mx-auto w-[80%] text-center'>
                <div>
                    <h2 className='text-gray-700 mt-8 text-4xl font-bold capitalize'>OUR <span className='underline text-cyan-400'><span className='text-gray-700'>DESTINATIONS</span></span></h2>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container pb-12 px-0 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col justify-center items-center space-y-6">
                        <div className="flex flex-col justify-center items-center ">
                            {/* <h1 className="text-3xl xl:text-3xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white my-4">Shop By Category</h1> */}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 gap-6 w-full">
                            {/*Category Beach */}
                            {
                                Categories.map((category, i) => (
                                    <div key={category.id}
                                        className="shadow-md duration-500 hover:scale-105 hover:shadow-xl relative group opacity-90 flex justify-center items-center h-full w-full">
                                        <img className="object-center object-cover h-[330px] w-full" src={category.img} alt="Bali Image" />
                                        <div className="dark:text-white left-8 bottom-4 z-10 absolute leading-none text-gray-800 py-3 w-36">
                                            <h3 className='font-bold pb-1 text-2xl text-white'>{category.categoryName}</h3>
                                            <p className='text-lg text-white'>{category.availablePackageQuantity} Packages</p>
                                        </div>
                                        {/* Hover Details */}
                                        <div className="absolute opacity-0 group-hover:opacity-100  group-hover:divider-cyan-300 transition duration-700 bottom-3 py-6 z-0 px-20 w-36"></div>
                                        <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 z-20 group-hover:bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                            <h3 className="text-white text-2xl font-semibold py-4 px-5">Packages</h3>
                                            {
                                                category.availablePackagePlaceName.map((name, i) => (
                                                    <p key={i} className='text-sm mb-1 text-white'>{name}</p>
                                                ))
                                            }
                                            <Link to='/productDetails' className="bg-white mt-4 hover:text-cyan-500 text-cyan-500 text-[12px] rounded-3xl py-2 px-5">VIEW DESTINATIONS</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;