import React from 'react';
import CategoryCard from '../Cards/CategoryCard/CategoryCard';


// Categories Data
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
                    {/* Header Text For Category Section */}
                    <h2 className='text-gray-700 mt-8 text-4xl font-bold capitalize mb-10'>OUR <span className='underline text-cyan-400'><span className='text-gray-700'>DESTINATIONS</span></span></h2>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container pb-12 px-0 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col justify-center items-center space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 gap-6 w-full">
                            {/*Category Cards*/}
                            {
                                Categories.map((category) => (
                                    <CategoryCard
                                        key={category.id}
                                        category={category}
                                    />
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