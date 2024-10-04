/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartAction";
import { useDispatch } from "react-redux";

const CardPhone = ({ produit }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const [isHovered, setIsHovered] = useState(false);
    const [hoverPanier, setHoverPanier] = useState(false);
    const [hoverVoirPlus, setHoverVoirPlus] = useState(false);

    if (!produit) {
        return <p>No product details available</p>;
    }

    const { id, name, description, image } = produit;

    const cardStyle = {
        width: "160px",
        position: "relative",
        boxShadow: "2px 2px 3.5px rgba(0, 0, 0, 0.5)",
        borderRadius: "1.78px",
        border: "1.1px solid #c9cfe5",
        boxSizing: "border-box",
        height: "260px",
        overflow: "hidden",
        flexShrink: "0",
        backgroundColor: "#fff",
    };

    const hoverOverlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(0,0,0,0.7)",
        display: isHovered ? "block" : "none",
    };

    const cardContentStyle = {
        position: "absolute",
        top: "60.5%",
        height:"100%",
        left: 0,
        width: "100%",
        backgroundColor: "#c9cfe5",
        padding: "5px",
    };

    const descriptionStyle = {
        fontSize: "14px",
        lineHeight: "1.3",
        color: "#898989",
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                style={{
                    width: "100%",
                    height: "67.49%",
                    objectFit: "cover",
                }}
                alt={name}
                src={image || "/images@2x.png"}
            />
            <div style={cardContentStyle}>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>{name}</div>
                <div style={descriptionStyle}>{description}</div>
            </div>
            <div style={hoverOverlayStyle}>
                <div
                    style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        top: "0",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#E89F71",
                    }}
                >
                    <div
                        style={{
                            textDecoration: "none",
                            width: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            onMouseEnter={() => setHoverPanier(true)}
                            onMouseLeave={() => setHoverPanier(false)}
                            onClick={() => {
                                handleAddToCart(produit);
                            }}
                            style={{
                                textDecoration: "none",
                                width: "auto",
                                backgroundColor: hoverPanier
                                    ? "rgb(255,255,255,0.5)"
                                    : "#fff",
                                fontWeight: "600",
                                height: "24px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                margin: "2px",
                                fontSize: "16px",
                                borderRadius: "5px",
                            }}
                        >
                            Ajouter au panier
                        </div>
                        <Link
                            onMouseEnter={() => setHoverVoirPlus(true)}
                            onMouseLeave={() => setHoverVoirPlus(false)}
                            to={`/produits/${id}`}
                            style={{
                                textDecoration: "none",
                                width: "100px",
                                backgroundColor: hoverVoirPlus
                                    ? "rgb(255,255,255,0.5)"
                                    : "#fff",
                                fontWeight: "600",
                                height: "24px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                fontSize: "16px",
                                color: "#E89F71",
                                margin: "2px",
                                borderRadius: "5px",
                            }}
                        >
                            Voir plus
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPhone;
