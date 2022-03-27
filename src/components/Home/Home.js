import React, { useEffect } from "react";
import Cards from "../Cards/Cards";
import "../../App.css";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
