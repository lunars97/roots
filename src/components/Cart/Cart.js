import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext";
import { calcTotalPrice } from "../../helpers/calcPrice";
import "../Cart/Cart.css";
import Footer from "../Footer/Footer";
const Cart = () => {
    const { getCart, cart, changeProductCount } = useContext(productContext);
    useEffect(() => {
        getCart(); //componentdidmount
    }, []);
    console.log(cart.products);
    return (
        <>
            <div className="cart">
                {cart.products ? (
                    <div className="cart_inner">
                        <div className="cart_inner_box">
                            {cart.products.map((elem) => (
                                <div key={elem.item.id} className="cart_wrap">
                                    <div>
                                        <img
                                            className="cart-img"
                                            src={elem.item.image}
                                            alt="eco-products"
                                        />
                                    </div>

                                    <div className="product-cart_wrap">
                                        <span style={{ lineHeight: "40px" }}>
                                            {elem.item.title}
                                        </span>
                                        <hr></hr>
                                        <span style={{ lineHeight: "40px" }}>
                                            {elem.item.price}
                                        </span>
                                        <hr></hr>
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
                                        <hr></hr>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h4 className="total">
                            Total: {calcTotalPrice(cart.products)}&#36;
                        </h4>
                        <Link to="/payment">
                            <button className="cart-btn">Purchase</button>
                        </Link>
                    </div>
                ) : (
                    <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
