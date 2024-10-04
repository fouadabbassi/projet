import { useDispatch, useSelector } from "react-redux";
import { logoutUser, profileUser } from "../../redux/userAction"; // تأكد من تحديث المسار الصحيح
import ScrollToTop from "../ScroolToTheTop";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavbarDesktop = () => {
    const dispatch = useDispatch();
    const navbarStyle = {
        width: "100%",
        backgroundColor: "rgba(64, 49, 112, 0.15)",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 48px",
        boxSizing: "border-box",
    };

    const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
    const isAdmin = useSelector((state) => state.auth.isAdmin );
    useEffect(() => {
        dispatch(profileUser());
    }, [dispatch]);
    const commonLinks = ["Home", "About", "Product", "Contact"];
    const commonLinksLink = ["/", "/#about-us", "/produits", "/#contact"];
    const adminLinks = ["Home", "About", "Produits", "Dashboard"];
    const adminLinksLink = ["/", "/#about-us", "/produits", "/dashboard"];

    const links = isAdmin? adminLinks : commonLinks;
    const linksUrl = isAdmin? adminLinksLink : commonLinksLink;

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <>
            <ScrollToTop />
            {/* This component will handle scrolling when the hash changes */}

            <div style={navbarStyle}>
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "#424242",
                        transition: "color 0.3s",
                    }}
                >
                    <img
                        style={{
                            width: "auto",
                            height: "65px",
                            objectFit: "cover",
                        }}
                        alt="Logo"
                        src="/logo.svg"
                    />
                </Link>
                <div style={{ display: "flex", gap: "32px" }}>
                    {links.map((link, index) => (
                        <Link
                            to={linksUrl[index]}
                            key={link}
                            style={{
                                textDecoration: "none",
                                color: "#424242",
                                transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color = "#696969")
                            }
                        >
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
                            width: "129px",
                            borderRadius: "10px",
                            backgroundColor: "rgba(240, 44, 44, 0.54)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "10px 0",
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
                <div style={{ display: "flex", gap: "12px" }}>
                    <a
                        href="tel:+123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            style={{ width: "24px", height: "24px" }}
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
                            style={{ width: "24px", height: "24px" }}
                            alt="Email"
                            src="/email.svg"
                        />
                    </a>
                    <Link
                        to="/produits"
                        style={{
                            textDecoration: "none",
                            color: "#424242",
                            transition: "color 0.3s",
                        }}
                    >
                        <img
                            style={{ width: "24px", height: "24px" }}
                            alt="Search"
                            src="/search.svg"
                        />
                    </Link>
                    <Link
                        to="/panier"
                        style={{
                            textDecoration: "none",
                            color: "#424242",
                            transition: "color 0.3s",
                        }}
                    >
                        <img
                            style={{
                                width: "24px",
                                height: "24px",
                                objectFit: "cover",
                            }}
                            alt="panier"
                            src="/purchase.png"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavbarDesktop;
