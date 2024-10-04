/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartAction";

const CardDesktop = ({ produit }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
    if (!produit) {
        return <p>No product details available</p>; // حالة عندما لا يوجد بيانات وظيفة
    }

    const { id,name, description, image } = produit;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isHovered, setIsHovered] = useState(false);
    const [hoverPanier, setHoverPanier] = useState(false);
        const [hoverVoirPlus, setHoverVoirPlus] = useState(false);


    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                width: "291px",
                position: "relative",
                boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.5)",
                borderRadius: "5px",
                border: "3px solid #c9cfe5",
                boxSizing: "border-box",
                height: "452px",
                overflow: "hidden",
                backgroundColor: "#fff",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    height: "32.51%",
                    width: "100%",
                    top: "67.49%",
                    backgroundColor: "#c9cfe5",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    height: "29.82%",
                    width: "89.82%",
                    top: "69.28%",
                    right: "5.96%",
                    bottom: "0.9%",
                    left: "4.21%",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        height: "21.8%",
                        width: "100%",
                        top: "0%",
                        fontWeight: "600",
                        lineHeight: "120%",
                    }}
                >
                    {name}
                </div>
                <div
                    style={{
                        position: "absolute",
                        height: "72.18%",
                        width: "100%",
                        top: "27.82%",
                        fontSize: "16px",
                        lineHeight: "150%",
                        fontWeight: "500",
                        color: "#898989",
                    }}
                >
                    {description}
                </div>
            </div>
            <img
                style={{
                    height: "67.49%",
                    width: "100%",
                    objectFit: "cover",
                }}
                alt={image ? name : "placeholder-image.png"}
                src={image ? image : "/PHONE4.jpg"}
            />
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
                        onClick={()=>{handleAddToCart(produit)}}
                        style={{
                            width: "202px",
                            height: "48px",
                            backgroundColor: hoverPanier
                                ? "rgb(255,255,255,0.5)"
                                : "rgb(255,255,255,1)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "600",
                            cursor: "pointer",
                            color: "#E89F71",
                            margin: "10px",
                            borderRadius: "10px",
                        }}
                    >
                        Ajouter au panier
                    </div>
                    <Link
                        onMouseEnter={() => setHoverVoirPlus(true)}
                        onMouseLeave={() => setHoverVoirPlus(false)}
                        to={"/produits/" + id}
                        style={{ textDecoration: "none", color: "#424242" }}
                    >
                        <div
                            style={{
                                width: "202px",
                                height: "48px",
                                backgroundColor: hoverVoirPlus
                                    ? "rgb(255,255,255,0.5)"
                                    : "rgb(255,255,255,1)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "600",
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

export default CardDesktop;
