import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { productContext } from "../../contexts/ProductContext";
import "../CardDetails/CardDetails.css";
import Footer from "../Footer/Footer";

const CardDetails = (props) => {
    const history = useHistory();
    const { getProductDetails, productDetails } = useContext(productContext);

    useEffect(() => {
        getProductDetails(props.match.params.id);
    }, [props.match.params.id]);
    return (
        <>
            <div className="main_detail">
                {productDetails ? (
                    <>
                        <div className="main_detail-container">
                            <div className="inner_detail-container">
                                <div className="image_detail">
                                    <img
                                        className="image_container"
                                        src={productDetails.img}
                                    />
                                </div>
                                <section className="section_detail">
                                    <span className="title_detail">
                                        {productDetails.title}
                                    </span>
                                    <hr></hr>
                                    <span className="category_detail">
                                        {productDetails.category}
                                    </span>
                                    <hr></hr>
                                    <p className="info_detail">
                                        {productDetails.description}
                                    </p>
                                    <hr></hr>
                                    <span className="price_detail">
                                        Price: {productDetails.price} &#36;
                                    </span>
                                </section>
                            </div>
                        </div>
                    </>
                ) : (
                    "Details"
                )}
            </div>
            <Footer />
        </>
    );
};

export default CardDetails;
