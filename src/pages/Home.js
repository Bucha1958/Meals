import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ItemMenu from "../components/ItemMenu";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="w-full">
            <Navbar/>
            <HeroSection/>
            <ItemMenu/>
            <Testimonials/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home;
