import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/userAction";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "../ScroolToTheTop";

const NavbarTablete = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
    const isAdmin = useSelector((state) => state.auth.isAdmin);

    const navbarStyle = {
        width: "100%",
        backgroundColor: "rgba(64, 49, 112, 0.15)",
        height: "60px", // تم تقليل الارتفاع
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 24px", // تم تقليل الحشوة
        boxSizing: "border-box",
    };

    const commonLinks = ["Home", "About", "Product", "Contact"];
    const commonLinksUrl = ["/", "/#about-us", "/produits", "/#contact"];
    const adminLinks = ["Home", "About", "Product", "Dashboard"];
    const adminLinksUrl = ["/", "/#about-us", "/produits", "/dashboard"];

    const links = isAdmin ? adminLinks : commonLinks;
    const linksUrl = isAdmin ? adminLinksUrl : commonLinksUrl;

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div style={navbarStyle}>
            <Link to="/" style={{ textDecoration: "none", color: "#424242" }}>
                <img
                    style={{
                        width: "auto", // تم تقليل حجم الشعار
                        height: "55px",
                        objectFit: "cover",
                    }}
                    alt="Logo"
                    src="/logo.svg"
                />
            </Link>
            <div style={{ display: "flex", gap: "16px" }}>
                {links.map((link, index) => (
                    <Link
                        to={linksUrl[index]}
                        key={link}
                        style={{
                            textDecoration: "none",
                            color: "#424242",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#000")}
                        onMouseLeave={(e) => (e.target.style.color = "#696969")}
                    >
                        <ScrollToTop />
                        <div
                            style={{
                                lineHeight: "120%",
                                textTransform: "capitalize",
                            }}
                        >
                            {link}
                        </div>
                    </Link>
                ))}
            </div>
            {isAuthenticated && (
                <div
                    onClick={() => {
                        handleLogout();
                    }}
                    style={{
                        width: "100px", // تم تقليل حجم زر تسجيل الخروج
                        borderRadius: "8px",
                        backgroundColor: "rgba(240, 44, 44, 0.54)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px 0",
                        color: "#262b3c",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                        (e.target.style.backgroundColor =
                            "rgba(220, 44, 44, 0.9)")
                    }
                    onMouseLeave={(e) =>
                        (e.target.style.backgroundColor =
                            "rgba(240, 44, 44, 0.54)")
                    }
                >
                    logout
                </div>
            )}
            <div style={{ display: "flex", gap: "10px" }}>
                <a
                    href="tel:+123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        style={{ width: "20px", height: "20px" }}
                        alt="Call"
                        src="/call.svg"
                    />
                </a>
                <a
                    href="mailto:example@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        style={{ width: "20px", height: "20px" }}
                        alt="Email"
                        src="/email.svg"
                    />
                </a>
                <Link
                    to="/produits"
                    style={{ textDecoration: "none", color: "#424242" }}
                >
                    <img
                        style={{ width: "20px", height: "20px" }}
                        alt="Search"
                        src="/search.svg"
                    />
                </Link>
                <Link
                    to="/panier"
                    style={{ textDecoration: "none", color: "#424242" }}
                >
                    <img
                        style={{
                            width: "20px",
                            height: "20px",
                            objectFit: "cover",
                        }}
                        alt="panier"
                        src="/purchase.png"
                    />
                </Link>
            </div>
        </div>
    );
};

export default NavbarTablete;
