import React from 'react';
import CategorySlider from '../CategorySlider/CategorySlider';


const CategorySection = () => {


    return (
        <div className='px-8 py-2 mt-16 lg:mt-64 mb-8'>
            <div className='mx-auto w-[90%] text-center md:text-start'>
                <div className='pt-2 lg:pt-10 xl:pt-16'>
                    {/* Header Text For Category Section */}
                    <h2 className='text-gray-700 z-40 mt-2  text-2xl md:text-2xl lg:text-4xl font-bold capitalize'>
                        SELECT
                        <span className='underline text-cyan-400 ml-2'><span className='text-gray-700'>
                            CATEGORY
                        </span></span>
                    </h2>
                </div>
            </div>
            <CategorySlider className="py-4" />

        </div>
    );
};

export default CategorySection;

