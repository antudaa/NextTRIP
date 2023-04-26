import React from 'react';
import backArrow from "../../assets/Icons/previous.png";
import nextArrow from "../../assets/Icons/next.png";
import TopCountriesCard from '../Cards/TopCountriesCard/TopCountriesCard';

const ChooseCountry = () => {

    return (
        <div>
            <div className='carousel scroll-smooth relative p-4 flex items-center justify-start gap-4 overflow-x-auto'>
                <TopCountriesCard />
                <TopCountriesCard />
                <TopCountriesCard />
                <TopCountriesCard />
                <TopCountriesCard />
                <TopCountriesCard />
            </div>
        </div>
    );
};

export default ChooseCountry;