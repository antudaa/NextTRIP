import React from 'react';
import BestBeaches from '../../Components/BestBeaches/BestBeaches';
import Discover from '../../Components/Discover/Discover';
import BestPackagesHomePage from '../../Components/BestPackagesHomePage/BestPackagesHomePage';
import NewSletter from '../../Components/NewSletter/NewSletter';
import CategorySection from '../../Components/CategorySection/CategorySection';
import NextHoliday from '../../Components/NextHoliday/NextHoliday';
import WorldTour from '../../Components/WorldTour/WorldTour';
import NewSection from '../../Components/NewSection/CategorySlider';

const Home = () => {
    return (
        <div>
            {/* Category Section Home Page */}
            <CategorySection />
            {/* Next Holiday */}
            
            <NextHoliday />
            {/* Best Beaches */}
            <BestBeaches />
            {/* World Tour */}
            <WorldTour />
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