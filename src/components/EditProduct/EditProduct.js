import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContext";

const EditProduct = (props) => {
    const { getProductEdit, productEdit, saveEditedProduct } = useContext(
        productContext
    );

    useEffect(() => {
        getProductEdit(props.match.params.id);
    }, []);

    const [editedProduct, setEditedProduct] = useState();

    function handleEdit(e) {
        let newObj = {
            ...productEdit,
            ...editedProduct,
            [e.target.name]: e.target.value,
        };
        setEditedProduct(newObj);
    }
    function handleEditSave() {
        saveEditedProduct(productEdit.id, editedProduct);
    }

    return (
        <div className="admin-panel">
            {productEdit ? (
                <div className="main_admin-div">
                    <input
                        type="text"
                        name="img"
                        // value={img}
                        className="admin_input"
                        placeholder={productEdit.img}
                        onChange={(e) => handleEdit(e)}
                    />
                    <input
                        type="text"
                        name="title"
                        // value={title}
                        className="admin_input"
                        placeholder={productEdit.title}
                        onChange={(e) => handleEdit(e)}
                    />
                    <input
                        type="text"
                        // value={price}
                        name="price"
                        className="admin_input"
                        placeholder={productEdit.price}
                        onChange={(e) => handleEdit(e)}
                    />
                    <input
                        type="text"
                        name="description"
                        // value={description}
                        className="admin_input"
                        placeholder={productEdit.description}
                        onChange={(e) => handleEdit(e)}
                    />
                    <input
                        type="text"
                        // value={category}
                        name="category"
                        className="admin_input"
                        placeholder={productEdit.category}
                        onChange={(e) => handleEdit(e)}
                    />
                    <button
                        className="detail-btn"
                        onClick={() => handleEditSave()}
                    >
                        Save
                    </button>
                </div>
            ) : (
                "edit"
            )}
        </div>
    );
};

export default EditProduct;
