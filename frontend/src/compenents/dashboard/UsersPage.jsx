import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers, updateUserById } from "../../redux/userAction";

const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.auth.users);
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);

    const [editUserId, setEditUserId] = useState(null); // Hold the ID of the user being edited
    const [newRole, setNewRole] = useState(""); // Hold the new role for the user

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleUpdate = () => {
        if (editUserId && newRole) {
            // Ensure both editUserId and newRole are set
            dispatch(updateUserById(editUserId, { role: newRole })); // Pass the new role
            setEditUserId(null); // Close the edit form after updating
            setNewRole(""); // Reset newRole
        }
    };

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ marginTop: "70px" }}>Error: {error}</div>;

    const containerStyle = {
        marginTop:"70px",
        maxWidth: "1200px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
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

    const buttonStyle = {
        marginRight: "10px",
        padding: "8px 12px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "0.9rem",
    };

    const cancelButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#f44336",
    };

    const selectStyle = {
        padding: "8px",
        fontSize: "1rem",
    };

    const responsiveStyle = {
        overflowX: "auto",
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                Users Management
            </h1>
            <div style={responsiveStyle}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Email</th>
                            <th style={thStyle}>Role</th>
                            <th style={thStyle}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td style={tdStyle}>{user.name}</td>
                                <td style={tdStyle}>{user.email}</td>
                                <td style={tdStyle}>{user.role}</td>
                                <td style={tdStyle}>
                                    {editUserId === user.id ? (
                                        <div>
                                            <select
                                                value={newRole}
                                                onChange={(e) =>
                                                    setNewRole(e.target.value)
                                                }
                                                style={selectStyle}
                                            >
                                                <option value="">
                                                    Select Role
                                                </option>
                                                <option value="admin">
                                                    Admin
                                                </option>
                                                <option value="customer">
                                                    Customer
                                                </option>
                                            </select>
                                            <button
                                                onClick={handleUpdate}
                                                style={buttonStyle}
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setEditUserId(null);
                                                    setNewRole("");
                                                }}
                                                style={cancelButtonStyle}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => {
                                                    setEditUserId(user.id);
                                                    setNewRole(user.role);
                                                }}
                                                style={buttonStyle}
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(user.id)
                                                }
                                                style={cancelButtonStyle}
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersPage;
