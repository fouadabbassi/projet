import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div style={styles.sidebarContainer}>
            <Link to="/dashboard/users" style={styles.link}>
                Users
            </Link>
            <Link to="/dashboard/categories" style={styles.link}>
                Categories
            </Link>
            <Link to="/dashboard/subcategories" style={styles.link}>
                Subcategories
            </Link>
            <Link to="/dashboard/products" style={styles.link}>
                Products
            </Link>
            <Link to="/dashboard/orders" style={styles.link}>
                Orders
            </Link>
            <Link to="/dashboard/messages" style={styles.link}>
                Messages
            </Link>
        </div>
    );
};

const styles = {
    sidebarContainer: {
        width: "180px",
        backgroundColor: "#E7E9F1",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        position: "fixed",
        paddingTop: "160px",
        zIndex: "1",
    },
    link: {
        margin: "15px 5px",
        color: "#000",
        textDecoration: "none",
        fontSize: "18px",
    },
};

export default Sidebar;
