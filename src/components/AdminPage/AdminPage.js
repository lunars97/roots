import React, { useContext, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext";
import Footer from "../Footer/Footer";
import "../AdminPage/AdminPage.css";
import "../EditProduct/EditProduct";
const AdminPage = (props) => {
    const history = useHistory();
    const {
        allPages,
        setPage,
        getProducts,
        productsData,
        deleteProduct,
        productDetails,
        getProductEdit,
        getProductDetails,
    } = useContext(productContext);
    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const { postNewProduct } = useContext(productContext);

    function handleClick(e) {
        e.preventDefault();

        let newObj = {
            img: img,
            title: title,
            price: price,
            description: description,
            category: category,
        };
        postNewProduct(newObj, history);
        setImg("");
        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
    }
    const arr = [];
    for (let i = 1; i <= allPages; i++) {
        arr.push(i);
    }
    useEffect(() => {
        getProducts(history);
        getProductDetails(props.match.params.id);
    }, [props.match.params.id]);

    return (
        <>
            <div className="admin-panel">
                <div className="main_admin-div">
                    <input
                        type="text"
                        name="img"
                        value={img}
                        className="admin_input"
                        placeholder="image"
                        onChange={(e) => setImg(e.target.value)}
                    />
                    <input
                        type="text"
                        name="title"
                        value={title}
                        className="admin_input"
                        placeholder="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        value={price}
                        name="price"
                        className="admin_input"
                        placeholder="price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        name="description"
                        value={description}
                        className="admin_input"
                        placeholder="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        value={category}
                        name="category"
                        className="admin_input"
                        placeholder="category"
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <button className="admin-btn" onClick={handleClick}>
                        Add
                    </button>
                </div>
            </div>
            <div className="admin_list_wrap">
                <ul className="admin_cards__items">
                    {productsData.map((item) => (
                        <>
                            <li
                                className="admin_list"
                                key={item.id}
                                item={item}
                                id={item.id}
                            >
                                <img
                                    className="admin_img"
                                    src={item.img}
                                    alt="imageOfProducts"
                                />
                                <span className="admin_title">
                                    {item.title}
                                </span>
                                <span className="admin_title">
                                    {item.price}
                                </span>
                                <span className="admin_title">
                                    {item.category}
                                </span>
                                <p className="admin_title">
                                    {item.description}
                                </p>
                                <button
                                    className="admin_btn"
                                    onClick={() => {
                                        deleteProduct(item.id, history);
                                    }}
                                >
                                    Delete
                                </button>
                                <Link to={`/edit/${item.id}`}>
                                    <button className="admin_btn">Edit</button>
                                </Link>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
            <ul className="pagination">
                {arr.map((page) => (
                    <li className="pageBtn" onClick={() => setPage(page)}>
                        {page}
                    </li>
                ))}
            </ul>
            <Footer />
        </>
    );
};

export default AdminPage;
