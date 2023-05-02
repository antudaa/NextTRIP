import React from 'react';
import BestBeaches from '../../Components/BestBeaches/BestBeaches';
import Discover from '../../Components/Discover/Discover';
import BestPackagesHomePage from '../../Components/BestPackagesHomePage/BestPackagesHomePage';
import NewSletter from '../../Components/NewSletter/NewSletter';
import CategorySection from '../../Components/CategorySection/CategorySection';
import NextHoliday from '../../Components/NextHoliday/NextHoliday';
import WorldTour from '../../Components/WorldTour/WorldTour';
import BannerSection from '../../Components/BannerSection/BannerSection';

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <BannerSection />
            {/* Category Section Home Page */}
            <CategorySection />
            {/* Next Holiday */}
            <NextHoliday />
            {/* Best Beaches */}
            <BestBeaches />
            {/* World Tour */} 
            <WorldTour />
            {/* Discover World */}
            {/* Discover World */}
            {/* Discover World */}
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