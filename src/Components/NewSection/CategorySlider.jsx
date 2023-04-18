import React from 'react';
import nextArrow from "../../assets/Icons/next.png";
import backArrow from "../../assets/Icons/previous.png";
import CategoryCard from '../Cards/CategoryCard/CategoryCard';
import './CategorySlider.css';


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

const CategorySlider = () => {

    // Handler For Back
    const scrollBack = () => {
        document.getElementById("content").scrollLeft -= 400;
    };

    // Handler For Slide Next
    const scrollNext = () => {
        document.getElementById("content").scrollLeft += 400;
    };

    return (
        <div className='relative'>
            {/* Next Previous Button To Control Slider */}
            <div className='absolute right-10 z-10 top-[-80px]'>
                {/* Button For Slide Back */}
                <button onClick={scrollBack} className='p-3 m-2 rounded-full bg-white'>
                    <img className='w-[30px] h-[30px]' src={backArrow} alt="" />
                </button>
                {/* Button For Slide Next */}
                <button onClick={scrollNext} className='p-3 m-2 rounded-full bg-white'>
                    <img className='w-[30px] h-[30px]' src={nextArrow} alt="" />
                </button>
            </div>
            {/* Card Slider */}
            <div id="content" className='carousel scroll-smooth relative p-4 flex items-center justify-start gap-8 overflow-x-auto'>
                {
                    Categories.map((category) => (
                        <div key={category.id}>
                            <CategoryCard key={category.id} category={category} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategorySlider;