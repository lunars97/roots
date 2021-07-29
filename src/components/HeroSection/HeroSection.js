import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import "../HeroSection/HeroSection.css";
import root from "../image/root.jpg";
import nature from "../image/nature.jfif";

function HeroSection() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="hero-container">
                <h1>Mindfullness isn’t difficult.</h1>
                <span>We just have to remember to do it</span>
                <div className="hero-btns">
                    <button className="btns">GET STARTED</button>
                </div>
            </div>
            <section className="info-section">
                <div className="img-block" data-aos="zoom-in-up">
                    <img className="image_ad" src={root} alt="eco-product" />
                </div>
                <div className="info-block">
                    <h2 className="block-header">Plastic-Free</h2>
                    <span className="span-header">Cleaning</span>
                    <br></br>
                    <span className="span-header">Supplies</span>
                    <br></br>
                    <p className="ad-text">
                        <Link
                            style={{ textDecoration: "none", color: "#72a233" }}
                            to="/products"
                        >
                            <strong>Zero-Waste & Reusable Products </strong>
                        </Link>
                        for your Home & Kitchen
                    </p>
                </div>
            </section>
            <section className="info-section">
                <div className="info-block">
                    <h2
                        data-aos="zoom-in-down"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in"
                        className="block-header2"
                    >
                        1% for the Planet
                    </h2>
                    <p
                        data-aos="zoom-in-down"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in"
                        className="ad-text2"
                    >
                        A healthy home not only keeps your family sound, it also
                        helps to protect the environment. These eco friendly
                        products — from the best biodegradable trash bags and
                        kitchen composting supplies to sprouting kits and
                        natural insect repellents — will make your life easier
                        and more enjoyable while protecting the world you live
                        in.
                    </p>
                </div>
                <div className="img-block">
                    <img className="image_ad" src={nature} alt="nature" />
                </div>
            </section>
        </>
    );
}

export default HeroSection;
