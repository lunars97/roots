import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext";
import { calcTotalPrice } from "../../helpers/calcPrice";
import classes from "../Cart/Cart.module.css";
import Footer from "../Footer/Footer";
const Cart = () => {
    const { getCart, cart, changeProductCount, deleteFromCart } =
        useContext(productContext);
    useEffect(() => {
        getCart(); //componentdidmount
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className={classes.cart}>
                {cart?.products?.length ? (
                    <div className={classes.cart_main}>
                        <div className={classes.cart_inner}>
                            <div className={classes.order_title}>
                                <p>Your Cart</p>
                            </div>
                            {cart.products.map((elem) => (
                                <div
                                    className={classes.card_wrapper}
                                    key={elem.item.id}
                                >
                                    <div
                                        className={
                                            classes.card_wrapper__image_wrapper
                                        }
                                    >
                                        <img
                                            src={elem.item.image}
                                            alt={elem.item.title}
                                        />
                                    </div>
                                    <div
                                        className={
                                            classes.card_wrapper__right_col
                                        }
                                    >
                                        <span className={classes.title}>
                                            {" "}
                                            {elem.item.title}
                                        </span>

                                        <div className={classes.remove}>
                                            <div
                                                onClick={() =>
                                                    deleteFromCart(elem.item.id)
                                                }
                                            >
                                                &times;
                                            </div>
                                        </div>

                                        <span className={classes.composition}>
                                            <p className={classes.greyFont}>
                                                Category:{elem.item.category}
                                            </p>
                                        </span>
                                        <div
                                            className={classes.bottom_paragraph}
                                        >
                                            {" "}
                                            <input
                                                type="number"
                                                min="1"
                                                style={{
                                                    marginBottom: "15px",
                                                    marginTop: "15px",
                                                    width: "40px",
                                                    marginLeft: "5px",
                                                }}
                                                value={elem.count}
                                                onChange={(e) =>
                                                    changeProductCount(
                                                        e.target.value,
                                                        elem.item.id
                                                    )
                                                }
                                            />
                                            <div
                                                className={classes.bottom_price}
                                            >
                                                <span
                                                    className={
                                                        classes.currentPrice
                                                    }
                                                >
                                                    {elem.item.price} &#36;
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={classes.right_column_card}>
                            <div className={classes.right_column_card__inner}>
                                <div>
                                    <div
                                        className={
                                            classes.right_column_card__inner__sum
                                        }
                                    >
                                        Total
                                    </div>
                                    <div
                                        className={
                                            classes.right_column_card__inner__prices
                                        }
                                    >
                                        <div className={classes.all_prices}>
                                            <span className={classes.left_text}>
                                                {calcTotalPrice(cart.products)}
                                                &#36;
                                            </span>
                                        </div>
                                    </div>
                                    <div className={classes.button_order}>
                                        <Link to="/payment">
                                            <button
                                                className={classes.cart_btn}
                                            >
                                                Purchase
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={classes.empty_cart}>
                        <h3>Cart is empty</h3>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
