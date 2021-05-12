import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import spray from "../image/spray.jfif";
import bike from "../image/bike.jfif";
import soil from "../image/soil.jfif";
import brush from "../image/brush.jfif";
import cup from "../image/cup.jfif";
import grains from "../image/grains.jfif";
import bike2 from "../image/bike.jfif";
import food from "../image/food.jfif";
import pollution from "../image/pollution.jfif";
import strawberry from "../image/strawberry.jfif";
import "../Products/Products.css";
import Footer from "../Footer/Footer";

import { productContext } from "../../contexts/ProductContext";

import CardItem from "../CardItem";

export default function Products({ history }) {
    var settings = {
        adaptiveHeight: true,
        className: "slider variable-width",
        variableWidth: true,
        // dots: true,
        // autoPlay: true,
        centerMode: true,
        centerPadding: "50px",
        useCSS: true,
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 5,
        // slidesPerRow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const { getProducts, productsData, allPages, setPage } =
        useContext(productContext);
    const [memory, setMemory] = useState(getMemory());

    function getMemory() {
        const search = new URLSearchParams(history.location.search);
        return search.get("category");
    }
    const handleChangeMemory = (e) => {
        if (e.target.value === "all") {
            history.push(`${history.location.pathname.replace("category")}`);
            getProducts(history);
            return;
        }
        const search = new URLSearchParams(history.location.search);
        search.set("category", e.target.value); // set method has two parameters (first is q and second is its value)
        history.push(`${history.location.pathname}?${search.toString()}`);
        getProducts(history);
        setMemory(e.target.value);
    };
    const arr = [];
    for (let i = 1; i <= allPages; i++) {
        arr.push(i);
    }
    useEffect(() => {
        getProducts(history);
    }, []);
    return (
        <>
            <div className="products_page">
                <div className="main_slider">
                    <Slider {...settings}>
                        <div style={{ width: "300" }}>
                            <img
                                src={spray}
                                alt="spray"
                                className="imgSlider"
                                style={{ width: "300px", height: "300px" }}
                            />
                        </div>
                        <div>
                            <img
                                src={bike}
                                alt="bike"
                                style={{ width: "300px", height: "300px" }}
                            />
                        </div>
                        <div>
                            <img
                                src={cup}
                                alt="cup"
                                style={{ width: "300px", height: "300px" }}
                            />
                        </div>
                        <div>
                            <img
                                src={grains}
                                alt="grains"
                                style={{ width: "300px", height: "300px" }}
                            />
                        </div>
                        <div>
                            <img
                                src={brush}
                                alt="brush"
                                style={{ width: "300px", height: "300px" }}
                            />
                        </div>
                        <div>
                            <img
                                src={soil}
                                alt="soil"
                                style={{ width: "300px", height: "300px" }}
                            />
                        </div>
                        <div>
                            <img
                                src={bike2}
                                alt="bicycle"
                                style={{ width: "300px", height: "300px" }}
                            />
                        </div>
                        <div>
                            <img
                                src={food}
                                alt="food"
                                style={{ width: "300px", height: "300px" }}
                            />
                        </div>
                        <div>
                            <img
                                src={pollution}
                                alt="pollution"
                                style={{ width: "300px", height: "300px" }}
                            />
                        </div>
                        <div>
                            <img
                                src={strawberry}
                                alt="strawberry"
                                style={{ width: "300px", height: "300px" }}
                            />
                        </div>
                    </Slider>
                </div>
                <div className="product_container">
                    <h2 style={{ textAlign: "center", marginTop: "40px" }}>
                        Our products
                    </h2>
                    <div className="category_wrapper">
                        <label className="category_label" htmlFor="product">
                            Choose a category:
                        </label>
                        <select
                            className="select_product"
                            name="products"
                            id="product"
                            value={memory}
                            onChange={handleChangeMemory}
                        >
                            <option
                                className="option_value"
                                value="kitchen"
                                defaultValue
                            >
                                Kitchen
                            </option>
                            <option
                                className="option_value"
                                value="accessories"
                            >
                                Accessories
                            </option>
                            <option className="option_value" value="self-care">
                                Self-care
                            </option>
                            <option className="option_value" value="clothes">
                                Clothes
                            </option>
                        </select>
                    </div>
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards__items">
                                {productsData.map((item) => (
                                    <CardItem
                                        src={item.img}
                                        text={item.title}
                                        price={item.price}
                                        label={item.category}
                                        key={item.id}
                                        item={item}
                                        id={item.id}
                                        // path="/services"
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <ul className="pagination">
                        {arr.map((page) => (
                            <li
                                className="pageBtn"
                                onClick={() => setPage(page)}
                            >
                                {page}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    );
}
