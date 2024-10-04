/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/userAction";
import { Link} from "react-router-dom";

const NavbarPhone = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state)=>state.auth.isLoggedIn);
    const isAdmin = useSelector((state) => state.auth.isAdmin);


    const handleLogout = () => {
        dispatch(logoutUser());
    };

    if (isAdmin === "admin") {
        return (
            <>
                <div
                    style={{
                        backgroundColor: "#e7e9f1",
                        width: "auto",
                        height: "auto",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            backgroundColor: "#fff",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "100vh",
                                objectFit: "cover",
                            }}
                            alt=""
                            src="/Rectangle 3.png"
                        />
                        <div
                            style={{
                                width: "95%",
                                borderRadius: "20px",
                                backgroundColor: "rgba(255, 255, 0, 0.14)",
                                height: "36px",
                                position: "absolute",
                                bottom: "15%",
                            }}
                        />
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "24px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        width: "45px",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Home
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/home.svg"
                                />
                            </div>
                        </Link>
                        <Link
                            to="/#about-us"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "79px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "16px",
                                        width: "45px",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        About
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/domain_verification.svg"
                                />
                            </div>
                        </Link>
                        <Link
                            to="/produits"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "134px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Product
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/category.svg"
                                />
                            </div>
                        </Link>
                        <Link
                            to="/dashboard"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "189px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Dashboard
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/perm_contact_calendar.svg"
                                />
                            </div>
                        </Link>

                        <div
                            style={{
                                position: "absolute",
                                bottom: "15.5%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                            }}
                        >
                            <a
                                href="tel:+123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    style={{
                                        position: "relative",
                                        width: "24px",
                                        height: "24px",
                                    }}
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
                                    style={{
                                        position: "relative",
                                        width: "24px",
                                        height: "24px",
                                    }}
                                    alt="Email"
                                    src="/email.svg"
                                />
                            </a>
                            <Link
                                to="/produits"
                                style={{
                                    textDecoration: "none",
                                    color: "#424242",
                                }}
                            >
                                <img
                                    style={{
                                        position: "relative",
                                        width: "24px",
                                        height: "24px",
                                    }}
                                    alt="Search"
                                    src="/search.svg"
                                />
                            </Link>
                            <Link
                                to="/panier"
                                style={{
                                    textDecoration: "none",
                                    color: "#424242",
                                }}
                            >
                                <img
                                    style={{
                                        position: "relative",
                                        width: "24px",
                                        height: "24px",
                                        objectFit: "cover",
                                    }}
                                    alt="panier"
                                    src="/purchase.png"
                                />
                            </Link>
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                bottom: "25%",
                                borderRadius: "20px",
                                backgroundColor: "rgba(240, 44, 44, 0.54)",
                                width: "95%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "10px 0px",
                                boxSizing: "border-box",
                                color: "#fff",
                                height: "36px",
                            }}
                        >
                            <div
                                onClick={() => {
                                    handleLogout();
                                }}
                                style={{
                                    position: "relative",
                                    lineHeight: "120%",
                                    textTransform: "capitalize",
                                    cursor: "pointer",
                                }}
                            >
                                logout
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (isAuthenticated) {
        return (
            <>
                <div
                    style={{
                        backgroundColor: "#e7e9f1",
                        width: "auto",
                        height: "auto",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            backgroundColor: "#fff",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "100vh",
                                objectFit: "cover",
                            }}
                            alt=""
                            src="/Rectangle 3.png"
                        />
                        <div
                            style={{
                                width: "95%",
                                borderRadius: "20px",
                                backgroundColor: "rgba(255, 255, 0, 0.14)",
                                height: "36px",
                                position: "absolute",
                                bottom: "15%",
                            }}
                        />
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "24px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        width: "45px",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Home
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/home.svg"
                                />
                            </div>
                        </Link>
                        <Link
                            to="/#about-us"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "79px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "16px",
                                        width: "45px",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        About
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/domain_verification.svg"
                                />
                            </div>
                        </Link>
                        <Link
                            to="/produits"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "134px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Product
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/category.svg"
                                />
                            </div>
                        </Link>
                        <Link
                            to="/#contact"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "189px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Contact
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/perm_contact_calendar.svg"
                                />
                            </div>
                        </Link>

                        <div
                            style={{
                                position: "absolute",
                                bottom: "15.5%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                            }}
                        >
                            <a
                                href="tel:+123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    style={{
                                        position: "relative",
                                        width: "24px",
                                        height: "24px",
                                    }}
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
                                    style={{
                                        position: "relative",
                                        width: "24px",
                                        height: "24px",
                                    }}
                                    alt="Email"
                                    src="/email.svg"
                                />
                            </a>
                            <Link
                                to="/produits"
                                style={{
                                    textDecoration: "none",
                                    color: "#424242",
                                }}
                            >
                                <img
                                    style={{
                                        position: "relative",
                                        width: "24px",
                                        height: "24px",
                                    }}
                                    alt="Search"
                                    src="/search.svg"
                                />
                            </Link>
                            <Link
                                to="/panier"
                                style={{
                                    textDecoration: "none",
                                    color: "#424242",
                                }}
                            >
                                <img
                                    style={{
                                        position: "relative",
                                        width: "24px",
                                        height: "24px",
                                        objectFit: "cover",
                                    }}
                                    alt="panier"
                                    src="/purchase.png"
                                />
                            </Link>
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                bottom: "25%",
                                borderRadius: "20px",
                                backgroundColor: "rgba(240, 44, 44, 0.54)",
                                width: "95%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "10px 0px",
                                boxSizing: "border-box",
                                color: "#fff",
                                height: "36px",
                            }}
                        >
                            <div
                                onClick={() => {
                                    handleLogout();
                                }}
                                style={{
                                    position: "relative",
                                    lineHeight: "120%",
                                    textTransform: "capitalize",
                                    cursor: "pointer",
                                }}
                            >
                                logout
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div
                    style={{
                        backgroundColor: "#e7e9f1",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            backgroundColor: "#fff",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "100vh",
                                objectFit: "cover",
                            }}
                            alt=""
                            src="/Rectangle 3.png"
                        />

                        <div
                            style={{
                                width: "95%",
                                borderRadius: "20px",
                                backgroundColor: "rgba(255, 255, 0, 0.14)",
                                height: "36px",
                                position: "absolute",
                                bottom: "9%",
                            }}
                        />
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "24px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        width: "45px",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Home
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/home.svg"
                                />
                            </div>
                        </Link>
                        <Link
                            to="/#about-us"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "79px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "16px",
                                        width: "45px",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        About
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/domain_verification.svg"
                                />
                            </div>
                        </Link>
                        <Link
                            to="/produits"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "134px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Product
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/category.svg"
                                />
                            </div>
                        </Link>
                        <Link
                            to="/#contact"
                            style={{
                                textDecoration: "none",
                                color: "rgba(255, 255, 255, 0.5)",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.color = "#000")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    "rgba(255, 255, 255, 0.5)")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 16px)",
                                    top: "189px",
                                    right: "8px",
                                    left: "8px",
                                    backgroundColor: "rgba(217, 217, 217, 0)",
                                    borderBottom: "2px solid #fff",
                                    boxSizing: "border-box",
                                    height: "33px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "4px 8px",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.borderBottom =
                                        "0.5px solid #000")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.borderBottom =
                                        "2px solid #fff")
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "relative",
                                            lineHeight: "120%",
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Contact
                                    </div>
                                </div>
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/perm_contact_calendar.svg"
                                />
                            </div>
                        </Link>

                        <div
                            style={{
                                position: "absolute",
                                bottom: "9.5%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                            }}
                        >
                            <a
                                href="tel:+123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    style={{
                                        position: "relative",
                                        width: "24px",
                                        height: "24px",
                                    }}
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
                                    style={{
                                        position: "relative",
                                        width: "24px",
                                        height: "24px",
                                    }}
                                    alt="Email"
                                    src="/email.svg"
                                />
                            </a>
                            <Link
                                to="/produits"
                                style={{
                                    textDecoration: "none",
                                    color: "#424242",
                                }}
                            >
                                <img
                                    style={{
                                        position: "relative",
                                        width: "24px",
                                        height: "24px",
                                    }}
                                    alt="Search"
                                    src="/search.svg"
                                />
                            </Link>
                            <Link
                                to="/panier"
                                style={{
                                    textDecoration: "none",
                                    color: "#424242",
                                }}
                            >
                                <img
                                    style={{
                                        position: "relative",
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
                </div>
            </>
        );
    }
};

export default NavbarPhone;
