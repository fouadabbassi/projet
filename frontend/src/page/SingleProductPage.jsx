import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactDesktop from "../compenents/Layout/ContactDesktop";
import FooterDesktop from "../compenents/Layout/FootterDesktop";
import ValeurDesktop from "../compenents/Layout/ValeurDesktop";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, fetchProductsBySubcategory} from "../redux/productAction";
import { addToCart } from "../redux/cartAction";
import CardDesktop from "../compenents/CartProduitDesktop";
import ContactTablete from "../compenents/Layout/ContactTablete";
import FooterTablete from "../compenents/Layout/FootterTablete";
import CardTablete from "../compenents/CartProduitTablete";
import ValeurTablete from "../compenents/Layout/ValeurTablete";
import ContactPhone from "../compenents/Layout/ContactPhone";
import FooterPhone from "../compenents/Layout/FootterPhone";
import ValeurPhone from "../compenents/Layout/ValeurPhone";
import CardPhone from "../compenents/CartProduitPhone";

const SingleProductPage = () => {
    const [hoverPanier, setHoverPanier] = useState(false);
    const {id} = useParams();
    const [width, setWidth] = useState(window.innerWidth);
    const produit = useSelector((state) => state.product.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [id, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

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
    useEffect(() => {
        if (produit) {
            dispatch(fetchProductsBySubcategory(produit.subcategory_id, 1));
            console.log(produit.subcategory_id);
            console.log(produit);
        }
    }, [produit, dispatch]);


    const produitsRelated = useSelector((state) => state.product.products);
    console.log(produitsRelated);

if (width <= 640) {
    // الهاتف
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    top: "55px",
                    right: "0px",
                    left: "0px",
                    backgroundColor: "#fff",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                <div
                    style={{
                        alignSelf: "stretch",
                        backgroundColor: "#f5bc82",
                        height: "31.1px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "12.1px 32.3px",
                        boxSizing: "border-box",
                        gap: "8.1px",
                        color: "#9f9f9f",
                    }}
                >
                    <Link
                        to={"/"}
                        style={{ textDecoration: "none", color: "#9f9f9f" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}
                        >
                            <div style={{ position: "relative" }}>Home</div>
                            <img
                                style={{
                                    width: "18px",
                                    position: "relative",
                                    height: "18px",
                                    overflow: "hidden",
                                    flexShrink: "0",
                                }}
                                alt=""
                                src="/chevron_right.svg"
                            />
                        </div>
                    </Link>
                    <Link
                        to={"/produits"}
                        style={{ textDecoration: "none", color: "#9f9f9f" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}
                        >
                            <div style={{ position: "relative" }}>Product</div>
                            <img
                                style={{
                                    width: "18px",
                                    position: "relative",
                                    height: "18px",
                                    overflow: "hidden",
                                    flexShrink: "0",
                                }}
                                alt=""
                                src="/chevron_right.svg"
                            />
                        </div>
                    </Link>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "8.1px",
                            fontSize: "12.1px",
                            color: "#3a3a3a",
                        }}
                    >
                        <div
                            style={{
                                width: "1px",
                                position: "relative",
                                borderRight: "1px solid #9f9f9f",
                                boxSizing: "border-box",
                                height: "12.5px",
                            }}
                        />
                        <div
                            style={{
                                position: "relative",
                                lineHeight: "120%",
                                fontSize: "16px",
                            }}
                        >
                            {produit ? produit.name : null}
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        alignSelf: "stretch",
                        height: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "64px 16px",
                        boxSizing: "border-box",
                        gap: "16px",
                        fontSize: "16px",
                        fontFamily: "Rubik",
                    }}
                >
                    <img
                        style={{
                            width: "276px",
                            position: "relative",
                            borderRadius: "5px",
                            height: "264px",
                            objectFit: "cover",
                        }}
                        alt=""
                        src={produit ? produit.image : "/PPE.jpg"}
                    />
                    <div
                        style={{
                            alignSelf: "stretch",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "16px",
                        }}
                    >
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                fontSize: "36px",
                                fontWeight: "500",
                                textAlign: "center",
                            }}
                        >
                            {produit ? produit.name : null}
                        </div>
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                fontWeight: "300",
                                fontFamily: "Roboto",
                                display: "-webkit-inline-box",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                WebkitLineClamp: "24",
                                WebkitBoxOrient: "vertical",
                                height: "auto",
                                maxHeight: "494px",
                            }}
                        >
                            <p style={{ margin: "0" }}>
                                {produit ? produit.description : null}
                            </p>
                        </div>
                        <div
                            onMouseEnter={() => setHoverPanier(true)}
                            onMouseLeave={() => setHoverPanier(false)}
                            onClick={() => {
                                handleAddToCart(produit);
                            }}
                            style={{
                                borderRadius: "10px",
                                backgroundColor: hoverPanier
                                    ? "rgba(64, 49, 112, 0.65)"
                                    : "rgba(64, 49, 112, 0.25)",
                                border: "1px solid #000",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "9px 12px",
                                fontSize: "24px",
                                cursor: "pointer",
                            }}
                        >
                            <div style={{ position: "relative" }}>
                                Ajouter au panier
                            </div>
                        </div>
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                borderTop: "1px solid #d9d9d9",
                                boxSizing: "border-box",
                                height: "1px",
                            }}
                        />
                        <div
                            style={{
                                width: "265px",
                                position: "relative",
                                fontFamily: "Poppins",
                                color: "#9f9f9f",
                                display: "inline-block",
                                height: "61px",
                                flexShrink: "0",
                            }}
                        >
                            Category : {produit ? produit.subcategory_id : null}
                        </div>
                    </div>
                </div>
                <ValeurPhone />
                <div
                    style={{
                        alignSelf: "stretch",
                        height: "450px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        gap: "16px",
                        fontSize: "17.54px",
                    }}
                >
                    <div
                        style={{
                            alignSelf: "stretch",
                            position: "relative",
                            fontWeight: "500",
                            fontFamily: "Rubik",
                            display: "inline-block",
                            height: "24px",
                            paddingTop: "10px",
                            fontSize: "28px",
                            flexShrink: "0",
                        }}
                    >
                        Related Products
                    </div>
                    <div
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "0px 16px",
                            gap: "16px",
                            textAlign: "left",
                            fontSize: "13.15px",
                            color: "#3a3a3a",
                            height: "300px",
                            overflow: "auto", // Enables scrolling
                            width: "100%",
                            msOverflowStyle: "none", // Hides scrollbar in IE and Edge
                            scrollbarWidth: "none", // Hides scrollbar in Firefox
                        }}
                    >
                        <div
                            style={{
                                alignSelf: "baseline",
                                height: "300px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                padding: "0px 32px",
                                boxSizing: "border-box",
                                gap: "32px",
                                textAlign: "left",
                                fontSize: "24px",
                                color: "#3a3a3a",
                                width: "auto",
                            }}
                        >
                            {produit ? (
                                produitsRelated.map((pro) => (
                                    <CardPhone key={pro.id} produit={pro} />
                                ))
                            ) : (
                                <p>no produits</p>
                            )}
                        </div>
                    </div>
                    <Link to={"/produits"} style={{ textDecoration: "none" }}>
                        <div
                            onMouseEnter={() => setHoverPanier(true)}
                            onMouseLeave={() => setHoverPanier(false)}
                            style={{
                                width: "120px",
                                borderRadius: "20px",
                                backgroundColor: hoverPanier ? "#666" : "#999",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "24px",
                                boxSizing: "border-box",
                                height: "18px",
                                fontSize: "16px",
                                color: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            <div
                                style={{
                                    width: "120px",
                                    position: "relative",
                                    lineHeight: "150%",
                                    fontWeight: "500",
                                    display: "inline-block",
                                    height: "auto",
                                    flexShrink: "0",
                                }}
                            >
                                Voir Plus
                            </div>
                        </div>
                    </Link>
                </div>
                <ContactPhone />
                <FooterPhone />
            </div>
        </>
    );
} else if (width <= 992) {
    // التابلت
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    top: "60px",
                    right: "0px",
                    left: "0px",
                    backgroundColor: "#fff",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                <div
                    style={{
                        alignSelf: "stretch",
                        backgroundColor: "#f5bc82",
                        height: "61.7px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "24px 64px",
                        boxSizing: "border-box",
                        gap: "16px",
                        color: "#9f9f9f",
                    }}
                >
                    <Link
                        to={"/"}
                        style={{ textDecoration: "none", color: "#9f9f9f" }}
                    >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <div style={{ position: "relative" }}>Home</div>
                        <img
                            style={{
                                width: "24px",
                                position: "relative",
                                height: "24px",
                                overflow: "hidden",
                                flexShrink: "0",
                            }}
                            alt=""
                            src="/chevron_right.svg"
                        />
                        </div>
                    </Link>
                    <Link
                        to={"/produits"}
                        style={{ textDecoration: "none", color: "#9f9f9f" }}
                    >
                        <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <div style={{ position: "relative" }}>Product</div>
                        <img
                            style={{
                                width: "24px",
                                position: "relative",
                                height: "24px",
                                overflow: "hidden",
                                flexShrink: "0",
                            }}
                            alt=""
                            src="/chevron_right.svg"
                        />
                        </div>
                    </Link>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "16px",
                            fontSize: "24px",
                            color: "#3a3a3a",
                        }}
                    >
                        <div
                            style={{
                                width: "2px",
                                position: "relative",
                                borderRight: "2px solid #9f9f9f",
                                boxSizing: "border-box",
                                height: "24.8px",
                            }}
                        />
                        <div
                            style={{
                                position: "relative",
                                lineHeight: "120%",
                            }}
                        >
                            {produit ? produit.name : null}
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "64px 16px",
                        gap: "32px",
                        fontSize: "12.39px",
                        fontFamily: "Rubik",
                    }}
                >
                    <img
                        style={{
                            width: "240px",
                            position: "relative",
                            borderRadius: "5.04px",
                            height: "348.9px",
                            objectFit: "cover",
                        }}
                        alt=""
                        src={produit ? produit.image : "/PPE.jpg"}
                    />
                    <div
                        style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "12.4px",
                        }}
                    >
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                fontSize: "27.88px",
                                fontWeight: "500",
                                display: "inline-block",
                                height: "56.5px",
                                flexShrink: "0",
                            }}
                        >
                            {produit ? produit.name : null}
                        </div>
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                fontWeight: "300",
                                fontFamily: "Roboto",
                                display: "-webkit-inline-box",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                WebkitLineClamp: "15",
                                WebkitBoxOrient: "vertical",
                                maxHeight: "240px",
                            }}
                        >
                            <p style={{ margin: "0" }}>
                                {produit ? produit.description : null}
                            </p>
                        </div>
                        <div
                            onMouseEnter={() => setHoverPanier(true)}
                            onMouseLeave={() => setHoverPanier(false)}
                            onClick={() => {
                                handleAddToCart(produit);
                            }}
                            style={{
                                borderRadius: "10px",
                                backgroundColor: hoverPanier
                                    ? "rgba(64, 49, 112, 0.65)"
                                    : "rgba(64, 49, 112, 0.25)",
                                border: "1px solid #000",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "9px 12px",
                                fontSize: "24px",
                                cursor: "pointer",
                            }}
                        >
                            <div style={{ position: "relative" }}>
                                Ajouter au panier
                            </div>
                        </div>
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                borderTop: "0.8px solid #d9d9d9",
                                boxSizing: "border-box",
                                height: "0.8px",
                            }}
                        />
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                fontFamily: "Poppins",
                                color: "#9f9f9f",
                                display: "inline-block",
                                height: "21.5px",
                                flexShrink: "0",
                            }}
                        >
                            Category : {produit ? produit.subcategory_id : null}
                        </div>
                    </div>
                </div>
                <ValeurTablete />
                <div
                    style={{
                        alignSelf: "stretch",
                        height: "550px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "32px",
                    }}
                >
                    <div
                        style={{
                            alignSelf: "stretch",
                            position: "relative",
                            fontWeight: "500",
                            fontFamily: "Rubik",
                            display: "inline-block",
                            height: "38px",
                            flexShrink: "0",
                        }}
                    >
                        Related Produits
                    </div>
                    <div
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "0px 32px",
                            gap: "32px",
                            textAlign: "left",
                            fontSize: "24px",
                            color: "#3a3a3a",
                            height: "400px",
                            overflow: "auto", // Enables scrolling
                            width: "100%",
                            msOverflowStyle: "none", // Hides scrollbar in IE and Edge
                            scrollbarWidth: "none", // Hides scrollbar in Firefox
                        }}
                    >
                        <div
                            style={{
                                alignSelf: "baseline",
                                height: "400px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                padding: "0px 32px",
                                boxSizing: "border-box",
                                gap: "32px",
                                textAlign: "left",
                                fontSize: "24px",
                                color: "#3a3a3a",
                                width: "auto",
                            }}
                        >
                            {produit ? (
                                produitsRelated.map((pro) => (
                                    <CardTablete key={pro.id} produit={pro} />
                                ))
                            ) : (
                                <p>no produits</p>
                            )}
                        </div>
                    </div>

                    <Link to={"/produits"} style={{ textDecoration: "none" }}>
                        <div
                            onMouseEnter={() => setHoverPanier(true)}
                            onMouseLeave={() => setHoverPanier(false)}
                            style={{
                                width: "169px",
                                borderRadius: "20px",
                                backgroundColor: hoverPanier ? "#666" : "#999",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "24px",
                                boxSizing: "border-box",
                                fontSize: "16px",
                                color: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            <div
                                style={{
                                    width: "117px",
                                    position: "relative",
                                    lineHeight: "150%",
                                    fontWeight: "600",
                                    display: "inline-block",
                                    height: "24px",
                                    flexShrink: "0",
                                }}
                            >
                                Voir Plus
                            </div>
                        </div>
                    </Link>
                </div>
                <ContactTablete />
                <FooterTablete />
            </div>
        </>
    );
} else {
    // الحاسوب
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    top: "70px",
                    right: "0px",
                    left: "0px",
                    backgroundColor: "#fff",
                    height: "auto",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                <div
                    style={{
                        alignSelf: "stretch",
                        backgroundColor: "#f5bc82",
                        height: "61.7px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "24px 64px",
                        boxSizing: "border-box",
                        gap: "16px",
                        color: "#9f9f9f",
                    }}
                >
                    <Link
                        to={"/"}
                        style={{ textDecoration: "none", color: "#9f9f9f" }}
                    ><div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <div style={{ position: "relative" }}>Accuile</div>
                        <img
                            style={{
                                width: "24px",
                                position: "relative",
                                height: "24px",
                                overflow: "hidden",
                                flexShrink: "0",
                            }}
                            alt=""
                            src="/chevron_right.svg"
                        />
                        </div>
                    </Link>
                    <Link
                        to={"/produits"}
                        style={{ textDecoration: "none", color: "#9f9f9f" }}
                    >
                        <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <div style={{ position: "relative" }}>Produit</div>
                        <img
                            style={{
                                width: "24px",
                                position: "relative",
                                height: "24px",
                                overflow: "hidden",
                                flexShrink: "0",
                            }}
                            alt=""
                            src="/chevron_right.svg"
                        />
                        </div>
                    </Link>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "16px",
                            fontSize: "24px",
                            color: "#3a3a3a",
                        }}
                    >
                        <div
                            style={{
                                width: "2px",
                                position: "relative",
                                borderRight: "2px solid #9f9f9f",
                                boxSizing: "border-box",
                                height: "24.8px",
                            }}
                        />
                        <div
                            style={{
                                position: "relative",
                                lineHeight: "120%",
                            }}
                        >
                            {produit ? produit.name : null}
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "64px",
                        gap: "48px",
                        fontFamily: "Rubik",
                    }}
                >
                    <img
                        style={{
                            width: "396px",
                            position: "relative",
                            borderRadius: "5px",
                            height: "411px",
                            objectFit: "cover",
                        }}
                        alt=""
                        src={produit ? produit.image : "/PPE.jpg"}
                    />
                    <div
                        style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "16px",
                        }}
                    >
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                fontSize: "36px",
                                fontWeight: "500",
                                display: "inline-block",
                                height: "73px",
                                flexShrink: "0",
                            }}
                        >
                            {produit ? produit.name : null}
                        </div>
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                fontWeight: "300",
                                fontFamily: "Roboto",
                                display: "-webkit-inline-box",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                WebkitLineClamp: "15",
                                WebkitBoxOrient: "vertical",
                                maxHeight: "304px",
                            }}
                        >
                            <p style={{ margin: "0" }}>
                                {produit ? produit.description : null}
                            </p>
                        </div>
                        <div
                            onMouseEnter={() => setHoverPanier(true)}
                            onMouseLeave={() => setHoverPanier(false)}
                            onClick={() => {
                                handleAddToCart(produit);
                            }}
                            style={{
                                borderRadius: "10px",
                                backgroundColor: hoverPanier
                                    ? "rgba(64, 49, 112, 0.65)"
                                    : "rgba(64, 49, 112, 0.25)",
                                border: "1px solid #000",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "9px 12px",
                                fontSize: "24px",
                                cursor:"pointer",
                            }}
                        >
                            <div style={{ position: "relative" }}>
                                Ajouter au panier
                            </div>
                        </div>
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                borderTop: "1px solid #d9d9d9",
                                boxSizing: "border-box",
                                height: "1px",
                            }}
                        />
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                fontFamily: "Poppins",
                                color: "#9f9f9f",
                                display: "inline-block",
                                height: "27.8px",
                                flexShrink: "0",
                            }}
                        >
                            Category : {produit ? produit.subcategory_id : null}
                        </div>
                    </div>
                </div>
                <ValeurDesktop />
                <div
                    style={{
                        alignSelf: "normal",
                        height: "699px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "32px",
                        textAlign: "center",
                        fontSize: "32px",
                    }}
                >
                    <div
                        style={{
                            alignSelf: "stretch",
                            position: "relative",
                            fontWeight: "500",
                            fontFamily: "Rubik",
                            display: "inline-block",
                            height: "38px",
                            flexShrink: "0",
                        }}
                    >
                        Related Produits
                    </div>
                    <div
                        style={{
                            height: "478px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "0px 32px",
                            boxSizing: "border-box",
                            textAlign: "left",
                            overflow: "auto", // Enables scrolling
                            width: "100%",
                            msOverflowStyle: "none", // Hides scrollbar in IE and Edge
                            scrollbarWidth: "none", // Hides scrollbar in Firefox
                        }}
                    >
                        <div
                            style={{
                                alignSelf: "baseline",
                                height: "478px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                padding: "0px 32px",
                                boxSizing: "border-box",
                                gap: "32px",
                                textAlign: "left",
                                fontSize: "24px",
                                color: "#3a3a3a",
                                width: "auto",
                            }}
                        >
                            {produit ? (
                                produitsRelated.map((pro) => (
                                    <CardDesktop key={pro.id} produit={pro} />
                                ))
                            ) : (
                                <p>no produits</p>
                            )}
                        </div>
                    </div>
                    <Link
                        to={"/produits"}
                        style={{textDecoration : "none" ,}}
                    ><div
                        onMouseEnter={() => setHoverPanier(true)}
                        onMouseLeave={() => setHoverPanier(false)}
                        style={{
                            width: "169px",
                            borderRadius: "20px",
                            backgroundColor: hoverPanier ? "#666" : "#999",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "24px",
                            boxSizing: "border-box",
                            fontSize: "16px",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        <div
                            style={{
                                width: "117px",
                                position: "relative",
                                lineHeight: "150%",
                                fontWeight: "600",
                                display: "inline-block",
                                height: "24px",
                                flexShrink: "0",
                            }}
                        >
                            Voir Plus
                        </div>
                    </div></Link>

                </div>
                <ContactDesktop />
                <FooterDesktop />
            </div>
        </>
    );
}
};
export default SingleProductPage;
