import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/categoryAction";
import { fetchSubcategory } from "../../redux/subcategoryAction";
import {
    createProduct,
    deleteProduct,
    fetchProductsByIndex,
    updateProduct,
} from "../../redux/productAction";

const ProductsPage = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product);
    const { subcategories } = useSelector((state) => state.subcategory);

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [productStock, setProductStock] = useState("");
    const [subcategoryId, setSubcategoryId] = useState("");
    const [editProductId, setEditProductId] = useState(null);

    useEffect(() => {
        dispatch(fetchProductsByIndex());
        dispatch(fetchCategory());
        dispatch(fetchSubcategory());
    }, [dispatch]);

    const handleCreate = () => {
        const formData = new FormData();
        formData.append("name", productName);
        formData.append("description", productDescription);
        formData.append("price", productPrice);
        formData.append("stock", productStock);
        formData.append("subcategory_id", subcategoryId);
        if (productImage) {
            formData.append("image", productImage);
        }

        dispatch(createProduct(formData));
        resetForm();
    };

    const handleUpdate = () => {
        const formData = new FormData();
        formData.append("name", productName);
        formData.append("description", productDescription);
        formData.append("price", productPrice);
        formData.append("stock", productStock);
        formData.append("subcategory_id", subcategoryId);
        if (productImage) {
            formData.append("image", productImage); // Ensure productImage is a file
        }
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]); // Check the values being sent
        }

        dispatch(updateProduct({ productId: editProductId, data: formData }));
        setEditProductId(null);
        resetForm();
    };

    const handleDelete = (productId) => {
        dispatch(deleteProduct(productId));
    };

    const resetForm = () => {
        setProductName("");
        setProductImage(null);
        setProductDescription("");
        setProductPrice("");
        setProductStock("");
        setSubcategoryId("");
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // CSS inline styles
    const containerStyle = {
        marginTop: "70px",
        maxWidth: "1200px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
    };

    const formStyle = {
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
    };

    const inputStyle = {
        margin: "5px 0",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    };

    const selectStyle = {
        margin: "5px 0",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    };

    const buttonStyle = {
        padding: "10px 15px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "5px",
    };

    const cancelButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#f44336", // Red for cancel
    };

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
    };

    const thStyle = {
        backgroundColor: "#f2f2f2",
        padding: "10px",
        textAlign: "left",
        borderBottom: "2px solid #ddd",
    };


    return (
        <div style={containerStyle}>
            <h1>Products Management</h1>

            {/* Form لإنشاء/تحديث المنتجات */}
            <div style={formStyle}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProductImage(e.target.files[0])}
                    style={inputStyle}
                />
                <input
                    type="text"
                    value={productName}
                    placeholder="Product Name"
                    onChange={(e) => setProductName(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="text"
                    value={productDescription}
                    placeholder="Description"
                    onChange={(e) => setProductDescription(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="number"
                    value={productPrice}
                    placeholder="Price"
                    onChange={(e) => setProductPrice(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="number"
                    value={productStock}
                    placeholder="Stock"
                    onChange={(e) => setProductStock(e.target.value)}
                    style={inputStyle}
                />
                <select
                    value={subcategoryId}
                    onChange={(e) => setSubcategoryId(e.target.value)}
                    style={selectStyle}
                >
                    <option value="">Select Subcategory</option>
                    {subcategories.map((subcategory) => (
                        <option key={subcategory.id} value={subcategory.id}>
                            {subcategory.name}
                        </option>
                    ))}
                </select>
                {editProductId ? (
                    <div>
                        <button onClick={handleUpdate} style={buttonStyle}>
                            Update Product
                        </button>
                        <button
                            onClick={() => setEditProductId(null)}
                            style={cancelButtonStyle}
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button onClick={handleCreate} style={buttonStyle}>
                        Create Product
                    </button>
                )}
            </div>

            {/* جدول المنتجات */}
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Image</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Description</th>
                        <th style={thStyle}>Price</th>
                        <th style={thStyle}>Stock</th>
                        <th style={thStyle}>Subcategory ID</th>
                        <th style={thStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img
                                    alt={product.name}
                                    src={product.image}
                                    style={{ width: "50px", height: "50px" }}
                                />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.subcategory_id}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setEditProductId(product.id);
                                        setProductImage(null); // Reset the image for editing
                                        setProductName(product.name);
                                        setProductDescription(
                                            product.description
                                        );
                                        setProductPrice(product.price);
                                        setProductStock(product.stock);
                                        setSubcategoryId(
                                            product.subcategory_id
                                        );
                                    }}
                                    style={buttonStyle}
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(product.id)}
                                    style={cancelButtonStyle}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsPage;
