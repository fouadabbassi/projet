/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartAction";
import { useDispatch } from "react-redux";

const CardTablete = ({ produit }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    if (!produit) {
        return <p>No product details available</p>; // حالة عندما لا يوجد بيانات وظيفة
    }

    const { id, name, description, image } = produit;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isHovered, setIsHovered] = useState(false);
    const [hoverPanier, setHoverPanier] = useState(false);
    const [hoverVoirPlus, setHoverVoirPlus] = useState(false);

    return (
        <div
            style={{
                width: "172.3px",
                position: "relative",
                boxShadow: "3.55px 3.55px 5.92px rgba(0, 0, 0, 0.5)",
                borderRadius: "2.96px",
                border: "1.8px solid #c9cfe5",
                boxSizing: "border-box",
                height: "267.7px",
                overflow: "hidden",
                flexShrink: "0",
                fontSize: "14.16px",
                backgroundColor: "#fff",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                style={{
                    overflow: "hidden",
                    objectFit: "cover",
                }}
                alt={image ? name : "placeholder-image.png"}
                src={image ? image : "/PHONE4.jpg"}
            />
            <div
                style={{
                    position: "absolute",
                    top: "67.5%",
                    width: "100%",
                    height: "32.5%",
                    backgroundColor: "#c9cfe5",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "69.29%",
                    width: "90%",
                    left: "5%",
                    height: "29.82%",
                    bottom: "0.9%",
                }}
            >
                <div
                    style={{
                        fontWeight: "600",
                        lineHeight: "120%",
                        position: "absolute",
                        height: "20.8%",
                        width: "100%",
                        top: "0%",
                    }}
                >
                    {name}
                </div>
                <div
                    style={{
                        fontSize: "10px",
                        lineHeight: "150%",
                        fontWeight: "500",
                        position: "absolute",
                        height: "72.18%",
                        width: "100%",
                        top: "27.82%",
                        color: "#898989",
                    }}
                >
                    {description}
                </div>
            </div>
            {isHovered && (
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
                        backgroundColor: "rgba(58, 58, 58, 0.72)",
                        color: "#e89f71",
                    }}
                >
                    <div
                        onMouseEnter={() => setHoverPanier(true)}
                        onMouseLeave={() => setHoverPanier(false)}
                        onClick={() => {
                            handleAddToCart(produit);
                        }}
                        style={{
                            width: "120px",
                            backgroundColor: hoverPanier
                                ? "rgb(255,255,255,0.5)"
                                : "rgb(255,255,255,1)",
                            fontWeight: "600",
                            height: "32px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            color: "#E89F71",
                            margin: "10px",
                            borderRadius: "10px",
                        }}
                    >
                        Ajouter au Panier
                    </div>
                    <Link
                        onMouseEnter={() => setHoverVoirPlus(true)}
                        onMouseLeave={() => setHoverVoirPlus(false)}
                        to={"/produits/" + id}
                        style={{ textDecoration: "none", color: "#E89F71" }}
                    >
                        <div
                            style={{
                                width: "120px",
                                backgroundColor: hoverVoirPlus
                                    ? "rgb(255,255,255,0.5)"
                                    : "rgb(255,255,255,1)",
                                fontWeight: "600",
                                height: "32px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                color: "#E89F71",
                                margin: "10px",
                                borderRadius: "10px",
                            }}
                        >
                            Voir plus
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CardTablete;
