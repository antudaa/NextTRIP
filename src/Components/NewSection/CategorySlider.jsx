import React from 'react';
import nextArrow from "../../assets/Icons/next.png";
import backArrow from "../../assets/Icons/previous.png";
import CategoryCard from '../Cards/CategoryCard/CategoryCard';
import './CategorySlider.css';


// Categories Data
const Categories = [
    {
        id: 1,
        img: 'https://c1.wallpaperflare.com/preview/262/812/847/travel-outdoors-girl-landscape.jpg',
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
        ]
    },
    {
        id: 2,
        img: 'https://c4.wallpaperflare.com/wallpaper/282/810/421/ocean-summer-summertime-hotel-wallpaper-preview.jpg',
        categoryName: "Beach",
        availablePackageQuantity: 4,
        availablePackagePlaceName: [
            "Bali",
            "Maldives",
            "Koh Yao Nai",
            "Phi Phi Islands",
        ]
    },
    {
        id: 3,
        img: 'https://guardian.ng/wp-content/uploads/2018/04/Photo_-Art-of-Safari.jpg',
        categoryName: "Desert",
        availablePackageQuantity: 2,
        availablePackagePlaceName: [
            "Sossusvlei, Namibia",
            "Pyramids of Giza, Egypt",
        ]
    },
    {
        id: 4,
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
        id: 5,
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
        id: 6,
        img: 'https://res.cloudinary.com/simpleview/image/upload/v1674650667/clients/norway/New_Project_11__28f603e7-fce9-4bb3-96ec-8500d66f86f1.jpg',
        categoryName: "Valleys",
        availablePackageQuantity: 3,
        availablePackagePlaceName: [
            "Antelope Canyon",
            "Geiranger Fjord",
            "Torres Del Paine National Park",
        ]
    },
    {
        id: 7,
        img: 'https://lp-cms-production.imgix.net/image_browser/victoria-falls-aerial-shot.jpg',
        categoryName: "Water Falls",
        availablePackageQuantity: 3,
        availablePackagePlaceName: [
            "Victoria Falls",
            "Niagara Falls",
            "Vatnajokull Ice Caves",
        ]
    },
    {
        id: 8,
        img: 'https://adventures.is/media/226921/anaconda-ice-cave-tunnel-vatnajokull.jpg',
        categoryName: "Caves",
        availablePackageQuantity: 2,
        availablePackagePlaceName: [
            "Geiranger Fjord",
            "Vatnajokull Ice Caves",
        ]
    },
    {
        id: 9,
        img: 'https://tourscanner.com/blog/wp-content/uploads/2022/07/things-to-do-in-Cappadocia-Turkey.jpg',
        categoryName: "Cities",
        availablePackageQuantity: 4,
        availablePackagePlaceName: [
            "Cappadocia, ",
        ]
    },
]

const CategorySlider = () => {

    // Handler For Back
    const scrollBack = () => {
        document.getElementById("category-content").scrollLeft -= 400;
    };

    // Handler For Slide Next
    const scrollNext = () => {
        document.getElementById("category-content").scrollLeft += 400;
    };

    return (
        <div className='relative'>
            {/* Next Previous Button To Control Slider */}
            <div className='absolute right-0 z-10 top-[-60px]'>
                {/* Button For Slide Back */}
                <button onClick={scrollBack} className='p-3 m-2 rounded-full bg-white hover:bg-slate-600'>
                    <img className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]' src={backArrow} alt="" />
                </button>
                {/* Button For Slide Next */}
                <button onClick={scrollNext} className='p-3 m-2 rounded-full bg-white hover:bg-slate-600'>
                    <img className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]' src={nextArrow} alt="" />
                </button>
            </div>
            {/* Card Slider */}
            <div id="category-content" className='carousel scroll-smooth relative p-4 flex items-center justify-start gap-8 overflow-x-auto'>
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