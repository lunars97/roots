import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Navbar/Navbar.css";
import "../../App.css";
// import app from "../../firebase";
// import cart from "../image/cart.png";
// import user from "../image/user.png";
// import admin from "../image/admin.png";
// import logout from "../image/logout.png";

// import favourite from "../image/favorite.png";
import { productContext } from "../../contexts/ProductContext";

function Navbar() {
    let history = useHistory();
    const { getProducts, cartLength } = useContext(productContext);
    const [searchValue, setSearchValue] = useState(getSearchValue());
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []); // makes buttons disappear

    window.addEventListener("resize", showButton);

    const handleValue = (e) => {
        const search = new URLSearchParams(history.location.search);

        search.set("q", e.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        // console.log(history);
        setSearchValue(e.target.value);
        getProducts(history);
    };

    function getSearchValue() {
        const search = new URLSearchParams(history.location.search);
        return search.get("q");
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        Ro
                        <i className="fa fa-leaf" aria-hidden="true" />
                        ts
                    </Link>
                    <div class="search-container">
                        <input
                            type="text"
                            className="input-search"
                            placeholder="Search..."
                            onChange={handleValue}
                            value={searchValue}
                        />
                        <div className="search"></div>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/community"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Community
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/products"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                {/* <img
                                    src={cart}
                                    className="cart_icon"
                                    onClick={closeMobileMenu}
                                    alt="cart-icon"
                                    value={cartLength}
                                /> */}
                                <i
                                    class="fa fa-shopping-cart fa-2x"
                                    value={cartLength}
                                    aria-hidden="true"
                                ></i>
                            </Link>
                        </li>

                        {/* <li>
                            <Link to="/login">
                                <img
                                    src={user}
                                    className="cart_icon"
                                    onClick={closeMobileMenu}
                                    alt="user-icon"
                                />
                            </Link>
                        </li> */}
                        {/* <li>
                            <img
                                src={logout}
                                className="cart_icon"
                                alt="logout-icon"
                                onClick={() => app.auth().signOut()}
                            />
                        </li> */}
                        <li>
                            <Link to="/favourite">
                                <i
                                    class="fa fa-star-o fa-lg"
                                    aria-hidden="true"
                                    style={{
                                        marginTop: "25px",
                                        color: "orange",
                                        cursor: "pointer",
                                    }}
                                />
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="admin">
                                <img
                                    src={admin}
                                    className="cart_icon"
                                    onClick={closeMobileMenu}
                                    alt="admin-icon"
                                />
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
