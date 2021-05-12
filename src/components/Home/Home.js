import React from "react";
import Cards from "../Cards/Cards";
import "../../App.css";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    return (
        <>
            <HeroSection />
            <Cards history={history} />
            <Footer />
        </>
    );
};

export default Home;
