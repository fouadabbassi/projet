import { useEffect, useState } from "react";
import NavbarDesktop from "../compenents/Layout/NavbarDesktop.jsx";
import NavbarTablete from "../compenents/Layout/NavbarTablete.jsx";
import { Link, Outlet} from "react-router-dom";
import NavbarPhone from "../compenents/Layout/NavbarPhone.jsx";
import ScrollToTop from "../compenents/ScroolToTheTop.jsx";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname,hash} = useLocation();
    useEffect(() => {
        if (pathname) {
            setMenuOpen(false);
            if (hash) {
                setMenuOpen(false);
            }
        }

    }, [hash, pathname]);
    useEffect(() => {
        if (!menuOpen) {
            const element = document.getElementById(hash.substring(1)); // Remove the '#' character
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }},[hash,menuOpen])
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // تنظيف المستمع على التفكيك
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const navbarStyle = {
        width: "100%",
        backgroundColor: "rgba(64, 49, 112, 0.15)",
        height: "55px", // تم تقليل الارتفاع
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 24px", // تم تقليل الحشوة
        boxSizing: "border-box",
        zIndex: "11",
    };

    if (width <= 640) {
        // الهاتف
        return (
            <>
                {/* This component will handle scrolling when the hash changes */}
                <div
                    style={{
                        position: "fixed",
                        backgroundColor: "#E7E9F1",
                        width: "100%",
                        height: menuOpen ? "100vh" : "55px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        boxSizing: "border-box",
                        zIndex: "10",
                    }}
                >
                    <div style={navbarStyle}>
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                                color: "#424242",
                            }}
                        >
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

                        <img
                            style={{
                                width: "24px",
                                position: "relative",
                                height: "24px",
                                overflow: "hidden",
                                flexShrink: "0",
                                cursor: "pointer",
                            }}
                            alt=""
                            src={!menuOpen ? "/menu.svg" : "/menu_open.svg"}
                            onClick={() => {
                                menuOpen
                                    ? setMenuOpen(false)
                                    : setMenuOpen(true);
                            }}
                        />
                    </div>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            textAlign: "left",
                            fontSize: "16px",
                            color: "#dadef1",
                            fontFamily: "'Public Sans'",
                            zIndex: "10",
                        }}
                    >
                        {menuOpen && <NavbarPhone />}
                    </div>
                </div>
                <ScrollToTop />
                {!menuOpen && <Outlet />}
            </>
        );
    } else if (width <= 992) {
        // التابلت
        return (
            <>
                <NavbarTablete />
                <Outlet />
            </>
        );
    } else {
        // الحاسوب
        return (
            <>
                <NavbarDesktop />
                <Outlet />
            </>
        );
    }
};
export default Navbar;
