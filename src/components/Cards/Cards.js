import React, { useContext, useEffect } from "react";
import "./Cards.css";
import CardItem from "../CardItem";
import "aos/dist/aos.css";
import Aos from "aos";
import { productContext } from "../../contexts/ProductContext";

const Cards = ({ history }) => {
    const { getProducts, productsData, allPages, setPage } = useContext(
        productContext
    );
    const arr = [];
    for (let i = 1; i <= allPages; i++) {
        arr.push(i);
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
        getProducts(history);
    }, []);
    return (
        <div
            className="cards"
            data-aos="fade-right"
            data-aos-duration="4000"
            data-aos-delay="800"
        >
            <h2>Sustainable Products</h2>
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
                    <li className="pageBtn" onClick={() => setPage(page)}>
                        {page}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cards;
