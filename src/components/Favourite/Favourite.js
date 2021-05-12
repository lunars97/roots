import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext";
import "../Favourite/Favourite.css";
const Favourite = (props) => {
    const { setFavourite, favourite, changeFavouriteCount } =
        useContext(productContext);
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
                                <th>Item</th>
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
