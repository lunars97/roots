import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import {
    getCountProductsCart,
    getCountFavourites,
    calcsubPrice,
    calcTotalPrice,
} from "../helpers/calcPrice";

export const productContext = React.createContext();
const INIT_STATE = {
    productsData: [],
    commentsData: [],
    productDetails: null,
    searchData: [],
    next: "",
    prev: "",
    allPages: 0,
    productEdit: null,
    favourite: {},
    cart: {},
    cartLength: getCountProductsCart(),
    favouriteLength: getCountFavourites(),
};
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                productsData: action.payload,
                allPages: action.num,
            };
        case "GET_PRODUCT_DETAILS":
            return { ...state, productDetails: action.payload };
        case "SEARCH":
            return { ...state, searchData: action.payload };
        case "GET_EDITED_PRODUCT":
            return { ...state, productEdit: action.payload };
        case "GET_CART":
            return { ...state, cart: action.payload };
        case "CHANGE_CART_COUNT":
            return { ...state, cartLength: action.payload };
        case "LEAVE_COMMENT":
            return { ...state, commentsData: action.payload };
        case "GET_FAVOURITE":
            return { ...state, favourite: action.payload };
        case "CHANGE_FAVOURITE_COUNT":
            return { ...state, favouriteLength: action.payload };
        default:
            return state;
    }
};
const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [page, setPage] = useState(1);
    const history = useHistory();
    function postNewProduct(product, history) {
        axios.post("http://localhost:8000/products", product);
        getProducts(history);
    }

    useEffect(() => {
        getProducts(history);
        leaveComment();
    }, [page]);

    async function getProducts(history) {
        const search = new URLSearchParams(history.location.search);
        search.set("_limit", 6);
        history.push(`${history.location.pathname}?${search.toString()}`);
        let res = await axios.get(
            `http://localhost:8000/products?_page=${page}&_limit=6&${window.location.search}`
        );
        let num = Math.ceil(res.headers["x-total-count"] / 6);

        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data,
            num: num,
        });
    }
    async function getProductDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/products/${id}`);
        dispatch({
            type: "GET_PRODUCT_DETAILS",
            payload: data,
            //для хранения данных вызываем dispatch
        });
    }
    async function saveProduct(id, newProduct) {
        await axios.patch(`http://localhost:8000/products/${id}`, newProduct);
        getProductDetails(id);
    }
    async function search(value) {
        let { data } = await axios.get(
            `http://localhost:8000/products/?q=${value}`
        );
        dispatch({
            type: "SEARCH",
            payload: data,
        });
    }
    async function deleteProduct(id, history) {
        await axios.delete(`http://localhost:8000/products/${id}`);
        getProducts(history);
    }
    async function getProductEdit(id) {
        let { data } = await axios.get(`http://localhost:8000/products/${id}`);
        dispatch({
            type: "GET_EDITED_PRODUCT",
            payload: data,
        });
    }
    async function saveEditedProduct(id, newProduct) {
        await axios.patch(`http://localhost:8000/products/${id}`, newProduct);
        getProducts(history);
        getProductDetails(id);
    }
    function addProductToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0,
        };

        let filteredCart = cart.products.filter(
            (elem) => elem.item.id === product.id
        );
        if (filteredCart.length > 0) {
            cart.products = cart.products.filter(
                (elem) => elem.item.id !== product.id
            );
        } else {
            cart.products.push(newProduct);
        }

        newProduct.subPrice = calcsubPrice(newProduct);
        cart.totalPrice = calcTotalPrice(cart.products);
        // console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));

        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length,
        });
    }
    function getCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: "GET_CART",
            payload: cart,
        });
    }
    function changeProductCount(count, id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.products = cart.products.map((elem) => {
            if (elem.item.id === id) {
                elem.count = count;
                elem.subPrice = calcsubPrice(elem);
            }
            return elem;
        });
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
    }

    function checkProductInCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        // console.log(cart);
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        // console.log(cart.products);
        let newCart = cart.products.filter((elem) => elem.item.id === id);
        return newCart.length > 0 ? true : false;
    }
    async function postNewComment(comment) {
        await axios.post("http://localhost:8000/comments", comment);
        leaveComment();
        console.log(comment + "this is comment");
    }
    async function leaveComment() {
        let { data } = await axios.get(`http://localhost:8000/comments`);
        dispatch({
            type: "LEAVE_COMMENT",
            payload: data,
        });
    }

    async function deleteComment(id) {
        await axios.delete(`http://localhost:8000/comments/${id}`);
        leaveComment();
    }

    function addFavouriteToStorage(product) {
        let favourite = JSON.parse(localStorage.getItem("favourite"));
        if (!favourite) {
            favourite = {
                products: [],
            };
        }
        let newFavourite = {
            item: product,
            count: 1,
        };

        let filteredFavourite = favourite.products.filter(
            (elem) => elem.item.id === product.id
        );
        if (filteredFavourite.length > 0) {
            favourite.products = favourite.products.filter(
                (elem) => elem.item.id !== product.id
            );
        } else {
            favourite.products.push(newFavourite);
        }

        localStorage.setItem("favourite", JSON.stringify(favourite));

        dispatch({
            type: "CHANGE_FAVOURITE_COUNT",
            payload: favourite.products.length,
        });
    }
    function checkFavouriteInFavourites(id) {
        let favourite = JSON.parse(localStorage.getItem("favourite"));
        if (!favourite) {
            favourite = {
                products: [],
            };
        }

        let newFavourite = favourite.products.filter(
            (elem) => elem.item.id === id
        );
        return newFavourite.length > 0 ? true : false;
    }
    function setFavourite() {
        let favourite = JSON.parse(localStorage.getItem("favourite"));
        if (!favourite) {
            favourite = {
                products: [],
            };
        }
        dispatch({
            type: "GET_FAVOURITE",
            payload: favourite,
        });
        console.log(favourite + "it is favoutite");
    }
    function changeFavouriteCount(count, id) {
        let favourite = JSON.parse(localStorage.getItem("favourite"));
        favourite.products = favourite.products.map((elem) => {
            if (elem.item.id === id) {
                elem.count = count;
            }
            return elem;
        });
        localStorage.setItem("favourite", JSON.stringify(favourite));
        setFavourite();
    }
    return (
        <productContext.Provider
            value={{
                productsData: state.productsData,
                productDetails: state.productDetails,
                searchData: state.searchData,
                allPages: state.allPages,
                productEdit: state.productEdit,
                cart: state.cart,
                cartLength: state.cartLength,
                favourite: state.favourite,
                favouriteLength: state.favouriteLength,
                commentsData: state.commentsData,
                getProductDetails,
                postNewProduct,
                getProducts,
                saveProduct,
                search,
                setPage,
                deleteProduct,
                getProductEdit,
                saveEditedProduct,
                addProductToCart,
                getCart,
                changeProductCount,
                checkProductInCart,
                leaveComment,
                postNewComment,
                deleteComment,
                addFavouriteToStorage,
                setFavourite,
                changeFavouriteCount,
                checkFavouriteInFavourites,
            }}
        >
            {children}
        </productContext.Provider>
    );
};
export default ProductContextProvider;
