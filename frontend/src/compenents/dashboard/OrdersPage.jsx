import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, fetchOrders, updateOrder } from "../../redux/orderAction";

const OrdersPage = () => {
    const dispatch = useDispatch();
    const { orders, loading, error } = useSelector((state) => state.order);

    const [orderId, setOrderId] = useState(null);
    const [newStatus, setNewStatus] = useState("");
    const [newOrder, setNewOrder] = useState(null);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const handleUpdate = (orderId) => {
        dispatch(updateOrder(orderId, { newOrder }));
        setOrderId(null); // إغلاق نموذج التحديث بعد التحديث
        setNewOrder(null);
    };

    const handleDelete = (orderId) => {
        console.log(orderId);
        dispatch(deleteOrder(orderId));
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

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
        fontSize: "1rem",
        overflowX: "auto",
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
        padding: "8px 12px",
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

    const headingStyle = {
        textAlign: "center",
        marginBottom: "20px",
    };

    const responsiveStyle = {
        overflowX: "auto",
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Orders Management</h1>
            <div style={responsiveStyle}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>User name</th>
                            <th style={thStyle}>User email</th>
                            <th style={thStyle}>User phone</th>
                            <th style={thStyle}>Total Price</th>
                            <th style={thStyle}>Products</th>
                            <th style={thStyle}>Status</th>
                            <th style={thStyle}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td style={tdStyle}>{order.name}</td>
                                <td style={tdStyle}>{order.email}</td>
                                <td style={tdStyle}>{order.phone}</td>
                                <td style={tdStyle}>{order.total_price}</td>
                                <td style={tdStyle}>{order.products}</td>
                                <td style={tdStyle}>
                                    {orderId === order.id ? (
                                        <div>
                                            <select
                                                value={newStatus}
                                                onChange={(e) =>
                                                    setNewStatus(e.target.value)
                                                }
                                            >
                                                <option value="pending">
                                                    pending
                                                </option>
                                                <option value="delivered">
                                                    delivered
                                                </option>
                                                <option value="cancelled">
                                                    cancelled
                                                </option>
                                                <option value="autre">
                                                    autre
                                                </option>
                                            </select>
                                            <button
                                                onClick={() => {
                                                    setNewOrder(
                                                        ...order,
                                                        (order.status =
                                                            newStatus)
                                                    );
                                                    handleUpdate(order.id);
                                                }}
                                                style={buttonStyle}
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setOrderId(null)}
                                                style={cancelButtonStyle}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            {order.status}
                                            <button
                                                onClick={() => {
                                                    setOrderId(order.id);
                                                    setNewStatus(order.status);
                                                }}
                                                style={buttonStyle}
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(order.id)
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

export default OrdersPage;
