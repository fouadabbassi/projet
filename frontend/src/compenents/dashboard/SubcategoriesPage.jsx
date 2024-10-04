import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    createSubcategory,
    deleteSubcategory,
    fetchSubcategory,
    updateSubcategory,
} from "../../redux/subcategoryAction";
import { fetchCategory } from "../../redux/categoryAction";

const SubcategoriesPage = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);
    const { subcategories, loading, error } = useSelector(
        (state) => state.subcategory
    );

    const [subcategoryName, setSubcategoryName] = useState("");
    const [subcategoryDescription, setSubcategoryDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [editSubcategoryId, setEditSubcategoryId] = useState(null);
    const [formError, setFormError] = useState("");

    useEffect(() => {
        dispatch(fetchCategory());
        dispatch(fetchSubcategory());
    }, [dispatch]);

    const resetForm = () => {
        setSubcategoryName("");
        setSubcategoryDescription("");
        setCategoryId("");
        setEditSubcategoryId(null);
        setFormError("");
    };

    const handleCreate = () => {
        if (!subcategoryName || !subcategoryDescription || !categoryId) {
            setFormError("All fields are required.");
            return;
        }
        dispatch(
            createSubcategory({
                name: subcategoryName,
                description: subcategoryDescription,
                category_id: categoryId,
            })
        );
        resetForm();
    };

    const handleUpdate = () => {
        if (!subcategoryName || !subcategoryDescription || !categoryId) {
            setFormError("All fields are required.");
            return;
        }
        dispatch(
            updateSubcategory(editSubcategoryId, {
                name: subcategoryName,
                description: subcategoryDescription,
                category_id: categoryId,
            })
        );
        resetForm();
    };

    const handleDelete = (subcategoryId) => {
        if (
            window.confirm("Are you sure you want to delete this subcategory?")
        ) {
            dispatch(deleteSubcategory(subcategoryId));
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div
            style={{
                marginTop: "70px",
                padding: "20px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h1 style={{ textAlign: "center", color: "#333" }}>
                Subcategories Management
            </h1>
            {formError && (
                <div style={{ color: "red", textAlign: "center" }}>
                    {formError}
                </div>
            )}

            {/* Form for creating/updating subcategories */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <input
                    type="text"
                    value={subcategoryName}
                    placeholder="Subcategory Name"
                    onChange={(e) => setSubcategoryName(e.target.value)}
                    style={{
                        padding: "10px",
                        margin: "5px",
                        width: "300px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
                <input
                    type="text"
                    value={subcategoryDescription}
                    placeholder="Description"
                    onChange={(e) => setSubcategoryDescription(e.target.value)}
                    style={{
                        padding: "10px",
                        margin: "5px",
                        width: "300px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
                <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    style={{
                        padding: "10px",
                        margin: "5px",
                        width: "300px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {editSubcategoryId ? (
                    <div>
                        <button
                            onClick={handleUpdate}
                            style={{
                                padding: "10px 20px",
                                margin: "5px",
                                backgroundColor: "#4CAF50",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Update Subcategory
                        </button>
                        <button
                            onClick={resetForm}
                            style={{
                                padding: "10px 20px",
                                margin: "5px",
                                backgroundColor: "#dc3545",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleCreate}
                        style={{
                            padding: "10px 20px",
                            margin: "5px",
                            backgroundColor: "#4CAF50",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Create Subcategory
                    </button>
                )}
            </div>

            {/* Subcategories table */}
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "20px",
                }}
            >
                <thead>
                    <tr>
                        <th
                            style={{
                                borderBottom: "2px solid #333",
                                padding: "10px",
                            }}
                        >
                            Name
                        </th>
                        <th
                            style={{
                                borderBottom: "2px solid #333",
                                padding: "10px",
                            }}
                        >
                            Description
                        </th>
                        <th
                            style={{
                                borderBottom: "2px solid #333",
                                padding: "10px",
                            }}
                        >
                            Category ID
                        </th>
                        <th
                            style={{
                                borderBottom: "2px solid #333",
                                padding: "10px",
                            }}
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {subcategories.length === 0 ? (
                        <tr>
                            <td
                                colSpan="4"
                                style={{ textAlign: "center", padding: "10px" }}
                            >
                                No subcategories available.
                            </td>
                        </tr>
                    ) : (
                        subcategories.map((subcategory) => (
                            <tr key={subcategory.id}>
                                <td
                                    style={{
                                        padding: "10px",
                                        borderBottom: "1px solid #ddd",
                                    }}
                                >
                                    {subcategory.name}
                                </td>
                                <td
                                    style={{
                                        padding: "10px",
                                        borderBottom: "1px solid #ddd",
                                    }}
                                >
                                    {subcategory.description}
                                </td>
                                <td
                                    style={{
                                        padding: "10px",
                                        borderBottom: "1px solid #ddd",
                                    }}
                                >
                                    {subcategory.category_id}
                                </td>
                                <td
                                    style={{
                                        padding: "10px",
                                        borderBottom: "1px solid #ddd",
                                    }}
                                >
                                    <button
                                        onClick={() => {
                                            setEditSubcategoryId(
                                                subcategory.id
                                            );
                                            setSubcategoryName(
                                                subcategory.name
                                            );
                                            setSubcategoryDescription(
                                                subcategory.description
                                            );
                                            setCategoryId(
                                                subcategory.category_id
                                            );
                                        }}
                                        style={{
                                            marginRight: "5px",
                                            padding: "5px 10px",
                                            backgroundColor: "#4CAF50",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDelete(subcategory.id)
                                        }
                                        style={{
                                            padding: "5px 10px",
                                            backgroundColor: "#dc3545",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SubcategoriesPage;
