import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContext";
// import "../CardDetails/CardDetails.css";
import Footer from "../Footer/Footer";
import style from "../CardDetails/CardDetails.module.css";
const CardDetails = (props) => {
    const { getProductDetails, productDetails } = useContext(productContext);

    useEffect(() => {
        getProductDetails(props.match.params.id);
    }, [props.match.params.id]);
    return (
        <>
            <div>
                {productDetails ? (
                    <>
                        <div className={style.w_100}>
                            <div className={style.main}>
                                <img
                                    className={style.main_img}
                                    src={productDetails.img}
                                    alt={productDetails.title}
                                />

                                <div className={style.main__descriptions}>
                                    <h1 className={style.main__desTitle}>
                                        {productDetails.title}
                                    </h1>
                                    <p>
                                        Category:&nbsp;
                                        <span className={style.main__span}>
                                            {productDetails.category}
                                        </span>{" "}
                                    </p>

                                    <div className={style.main__priceDiv}>
                                        <h2 className={style.main__price}>
                                            {" "}
                                            {productDetails.price} &#36;
                                        </h2>
                                    </div>
                                    <h1 className={style.main__aboutProduct}>
                                        Description
                                    </h1>
                                    <p className={style.main__span}>
                                        {productDetails.description}
                                    </p>
                                </div>
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
