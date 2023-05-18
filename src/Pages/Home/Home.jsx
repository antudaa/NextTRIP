import React from 'react';
import BestBeaches from '../../Components/BestBeaches/BestBeaches';
import Discover from '../../Components/Discover/Discover';
import BestPackagesHomePage from '../../Components/BestPackagesHomePage/BestPackagesHomePage';
import NewSletter from '../../Components/NewSletter/NewSletter';
import CategorySection from '../../Components/CategorySection/CategorySection';
import NextHoliday from '../../Components/NextHoliday/NextHoliday';
import WorldTour from '../../Components/WorldTour/WorldTour';
import BannerSection from '../../Components/BannerSection/BannerSection';
import Contact from '../../Components/Contact/Contact';
import FAQ from '../../Components/FAQSection/FAQ';
import GoToTop from '../../Components/GoToTop/GoToTop';
import Testimonial from '../../Components/Testimonial/Testimonial';
import State from '../../Components/State/State';

//https://www.myglobalviewpoint.com/best-travel-sites/

const Home = () => {

    return (
        <div>
            {/* Banner Section */}
            <BannerSection />
            {/* Category Section Home Page */}
            <CategorySection />
            {/* Next Holiday */}
            <NextHoliday />
            {/* State */}
            <State />
            {/* Best Beaches */}
            {/* Best Beaches */}
            {/* Best Beaches */}
            {/* Best Beaches */}
            
            <BestBeaches />
            {/* World Tour */}
            <WorldTour />
            {/* Discover World */}
            <Discover />
            {/* Best Packages Home */}
            <BestPackagesHomePage />
            {/* Testimonial Section */}
            <Testimonial />
            {/* FAQ Section */}
            <FAQ />
            {/* Contact Us Section */}
            <Contact />
            {/* NewSletter */}
            <NewSletter />
            {/* Go To Top */}
            <GoToTop />
        </div>
    );
};

export default Home;