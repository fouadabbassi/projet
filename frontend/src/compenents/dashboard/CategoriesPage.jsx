import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    createCategory,
    deleteCategory,
    fetchCategory,
    updateCategory,
} from "../../redux/categoryAction";

const CategoriesPage = () => {
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector(
        (state) => state.category
    );

    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");
    const [editCategoryId, setEditCategoryId] = useState(null);
    const [formError, setFormError] = useState("");

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    const resetForm = () => {
        setCategoryName("");
        setCategoryDescription("");
        setEditCategoryId(null);
        setFormError("");
    };

    const handleCreate = async () => {
        if (!categoryName || !categoryDescription) {
            setFormError("Both fields are required.");
            return;
        }
        await dispatch(
            createCategory({
                name: categoryName,
                description: categoryDescription,
            })
        );
        resetForm();
    };

    const handleUpdate = async () => {
        if (!categoryName || !categoryDescription) {
            setFormError("Both fields are required.");
            return;
        }
        await dispatch(
            updateCategory(editCategoryId, {
                name: categoryName,
                description: categoryDescription,
            })
        );
        resetForm();
    };

    const handleDelete = (categoryId) => {
        dispatch(deleteCategory(categoryId));
    };

    if (loading) return <div style={{ marginTop: "70px" }}>Loading...</div>;
    if (error) return <div style={{ marginTop: "70px" }}>Error: {error}</div>;

    // تنسيق CSS على شكل inline style
    const containerStyle = {
        maxWidth: "1200px",
        marginTop: "70px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
    };

    const formStyle = {
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
    };

    const inputStyle = {
        padding: "10px",
        fontSize: "1rem",
        width: "100%",
        maxWidth: "400px",
        borderRadius: "5px",
        border: "1px solid #ddd",
    };

    const buttonStyle = {
        padding: "10px 15px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    };

    const cancelButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#f44336",
    };

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
        fontSize: "1rem",
    };

    const thStyle = {
        padding: "10px",
        backgroundColor: "#f2f2f2",
        textAlign: "left",
        borderBottom: "2px solid #ddd",
    };

    const tdStyle = {
        padding: "10px",
        borderBottom: "1px solid #ddd",
    };

    const errorStyle = {
        color: "red",
        marginBottom: "10px",
    };

    const responsiveStyle = {
        overflowX: "auto",
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                Categories Management
            </h1>
            {formError && <div style={errorStyle}>{formError}</div>}
            <div style={formStyle}>
                <input
                    type="text"
                    value={categoryName}
                    placeholder="Category Name"
                    onChange={(e) => setCategoryName(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="text"
                    value={categoryDescription}
                    placeholder="Description"
                    onChange={(e) => setCategoryDescription(e.target.value)}
                    style={inputStyle}
                />
                {editCategoryId ? (
                    <div>
                        <button
                            onClick={handleUpdate}
                            disabled={loading}
                            style={buttonStyle}
                        >
                            Update Category
                        </button>
                        <button onClick={resetForm} style={cancelButtonStyle}>
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleCreate}
                        disabled={loading}
                        style={buttonStyle}
                    >
                        Create Category
                    </button>
                )}
            </div>

            <div style={responsiveStyle}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Description</th>
                            <th style={thStyle}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id}>
                                <td style={tdStyle}>{category.name}</td>
                                <td style={tdStyle}>{category.description}</td>
                                <td style={tdStyle}>
                                    <button
                                        onClick={() => {
                                            setEditCategoryId(category.id);
                                            setCategoryName(category.name);
                                            setCategoryDescription(
                                                category.description
                                            );
                                        }}
                                        style={buttonStyle}
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDelete(category.id)
                                        }
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
        </div>
    );
};

export default CategoriesPage;
