import React from 'react';
import CategorySlider from '../CategorySlider/CategorySlider';


const CategorySection = () => {

    return (
        <div className='px-8 pt-6 lg:mt-16'>
            <div className='mx-auto w-[90%] text-center md:text-start'>
                <div className='pt-2 lg:pt-44'>
                    {/* Header Text For Category Section */}
                    <h2 className='text-gray-700 mt-2 text-2xl md:text-3xl lg:text-4xl font-bold capitalize'>SELECT <span className='underline text-cyan-400'><span className='text-gray-700'>CATEGORY</span></span></h2>
                </div>
            </div>
            <CategorySlider className="py-4" />
        </div>
    );
};

export default CategorySection;

