import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContext";
import "../Favourite/Favourite.css";
const Favourite = (props) => {
    const {
        setFavourite,
        favourite,
        deleteFromFavourites,
        addProductToCart,
        checkProductInCart,
    } = useContext(productContext);
    useEffect(() => {
        setFavourite(); //componentdidmount
    }, []);
    return (
        <div className="favourite">
            {favourite.products ? (
                <div className="inner_fav_box">
                    <table className="table_fav">
                        <thead>
                            <tr className="thead-tr_fav">
                                <th>Your favourites</th>
                            </tr>
                        </thead>
                        <tbody className="tbody_fav">
                            {favourite.products.map((elem) => (
                                <tr className="tr_tbody_fav" key={elem.item.id}>
                                    <td>
                                        <img
                                            className="fav-img"
                                            src={elem.item.image}
                                            alt="eco-products"
                                        />
                                    </td>
                                    <td>{elem.item.title}</td>
                                    <td>{elem.item.category}</td>
                                    <td>{elem.item.price}</td>
                                    <td>
                                        <i
                                            onClick={() =>
                                                addProductToCart(elem.item)
                                            }
                                            style={{
                                                cursor: "pointer",
                                                color: checkProductInCart(
                                                    elem.item.id
                                                )
                                                    ? "red"
                                                    : "rgb(230, 148, 42)",
                                            }}
                                            className="fa fa-shopping-cart"
                                            aria-hidden="true"
                                        ></i>
                                    </td>
                                    <td>
                                        <i
                                            onClick={() =>
                                                deleteFromFavourites(
                                                    elem.item.id
                                                )
                                            }
                                            className="fa fa-times"
                                            aria-hidden="true"
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <i
                    class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"
                    style={{ color: "orange" }}
                ></i>
            )}
        </div>
    );
};

export default Favourite;
