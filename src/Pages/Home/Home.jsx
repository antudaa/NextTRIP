import React from 'react';
import BestBeaches from '../../Components/BestBeaches/BestBeaches';
import Discover from '../../Components/Discover/Discover';
import BestPackagesHomePage from '../../Components/BestPackagesHomePage/BestPackagesHomePage';
import NewSletter from '../../Components/NewSletter/NewSletter';
import CategorySection from '../../Components/CategorySection/CategorySection';
import NextHoliday from '../../Components/NextHoliday/NextHoliday';

const Home = () => {
    return (
        <div>
            {/* Category Section Home Page */}
            <CategorySection />
            {/* Next Holiday */}
            {/* Next Holiday */}
            {/* Next Holiday */}
            <NextHoliday />
            {/* Best Beaches */}
            <BestBeaches />
            {/* Discover World */}
            <Discover />
            {/* Best Packages Home */}
            <BestPackagesHomePage />
            {/* NewSletter */}
            <NewSletter />
        </div>
    );
};

export default Home;