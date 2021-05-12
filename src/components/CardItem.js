import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../components/Cards/Cards.css";
import { productContext } from "../contexts/ProductContext";
import heart from "./image/heart.png";
const CardItem = (props) => {
    const {
        addProductToCart,
        checkProductInCart,
        addFavouriteToStorage,
        checkFavouriteInFavourites,
    } = useContext(productContext);
    // const [like, setLike] = useState();
    // let count = 0,
    //     incrementMe = () => {
    //         let newCount = like.count + 1;
    //         setLike({
    //             count: newCount,
    //         });
    //     };

    return (
        <>
            <li className="cards__item">
                <div className="cards__item__link">
                    <div className="fav-icon_wrap">
                        {/* <img
                            className="fav-icon"
                            src={favourite}
                            alt="favourite_icon"
                            style={{ width: "35px" }}
                        /> */}
                    </div>

                    <figure
                        className="cards__item__pic-wrap"
                        data-category={props.item.category}
                    >
                        <img
                            className="cards__item__img"
                            src={props.item.img}
                            alt="imageOfProducts"
                        />
                    </figure>

                    <div className="cards__item__info">
                        <Link
                            to={`/details/${props.id}`}
                            style={{
                                textDecoration: "none",
                                listStyle: "none",
                                color: "black",
                            }}
                        >
                            <h5 className="cards__item__text">
                                {props.item.title}
                            </h5>
                            <h5 className="cards__item__price">
                                {props.item.price} &#36;
                            </h5>
                        </Link>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <i
                                class="fa fa-shopping-cart fa-lg mb-3"
                                onClick={() => addProductToCart(props.item)}
                                style={{
                                    cursor: "pointer",
                                    color: checkProductInCart(props.item.id)
                                        ? "red"
                                        : "rgb(230, 148, 42)",
                                }}
                                aria-hidden="true"
                            ></i>
                            <i
                                class="fa fa-star-o fa-lg mb-3"
                                aria-hidden="true"
                                onClick={() =>
                                    addFavouriteToStorage(props.item)
                                }
                                style={{
                                    // width: "27px",
                                    // height: "27px",
                                    // float: "rigth",
                                    marginTop: "15px",
                                    cursor: "pointer",
                                    color: checkFavouriteInFavourites(
                                        props.item.id
                                    )
                                        ? "black"
                                        : "green",
                                }}
                            ></i>
                        </div>
                    </div>

                    {/* <Link to="/cart"> */}
                    {/* </Link> */}
                </div>
            </li>
        </>
    );
};

export default CardItem;
