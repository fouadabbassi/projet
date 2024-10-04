import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage, fetchMessages } from "../../redux/messageAction";

const MessagesPage = () => {
    const dispatch = useDispatch();
    const { messages, loading, error } = useSelector((state) => state.message);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    const handleDelete = (messageId) => {
        dispatch(deleteMessage(messageId));
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
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
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
            <h1 style={headingStyle}>Messages Management</h1>
            <div style={responsiveStyle}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Email</th>
                            <th style={thStyle}>Subject</th>
                            <th style={thStyle}>Message</th>
                            <th style={thStyle}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((message) => (
                            <tr key={message.id}>
                                <td style={tdStyle}>{message.name}</td>
                                <td style={tdStyle}>{message.email}</td>
                                <td style={tdStyle}>{message.subject}</td>
                                <td style={tdStyle}>{message.message}</td>
                                <td style={tdStyle}>
                                    <button
                                        onClick={() => handleDelete(message.id)}
                                        style={buttonStyle}
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

export default MessagesPage;
