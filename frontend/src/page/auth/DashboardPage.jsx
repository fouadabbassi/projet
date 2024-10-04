import { Outlet } from "react-router-dom";
import Sidebar from "../../compenents/dashboard/Sidebar";
const DashboardLayout = () => {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "70px",
                    position: "fixed",
                    backgroundColor: "#E7E9F1",
                }}
            ></div>
            <div style={styles.container}>
                <Sidebar />
                <div style={styles.content}>
                    <Outlet />{" "}
                    {/* This will render the child components based on the route */}
                </div>
            </div>
        </>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
    },
    content: {
        marginLeft: "200px", // Adjust according to the width of your sidebar
        padding: "20px",
        flex: 1,
    },
};

export default DashboardLayout;
