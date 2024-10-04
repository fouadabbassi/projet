import { useEffect, useState } from "react";
import FooterTablete from "../compenents/Layout/FootterTablete";
import FooterPhone from "../compenents/Layout/FootterPhone";
import FooterDesktop from "../compenents/Layout/FootterDesktop";
import CartItem from "../compenents/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setQuantity } from "../redux/cartAction";

const CardPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    // Handle change in quantity input
    const handleQuantityChange = (e,itemId) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity >= 1) {
            dispatch(setQuantity(itemId , newQuantity));
        }
    };


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

    if (width <= 640) {
        // الهاتف
        return (
            <>
                <div
                    style={{
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "15.48px",
                        color: "#000",
                        fontFamily: "Poppins",
                        top: "55px",
                    }}
                >
                    <div
                        style={{
                            flex: "1",
                            backgroundColor: "#fff",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/**section one */}
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                height: "221px",
                            }}
                        >
                            <img
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    top: "0px",
                                    right: "0px",
                                    left: "0px",
                                    maxWidth: "100%",
                                    overflow: "hidden",
                                    height: "230px",
                                    objectFit: "cover",
                                }}
                                alt=""
                                src="/cardpg1.jpg"
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "178px",
                                    left: "calc(50% - 38.82px)",
                                    fontWeight: "500",
                                    display: "inline-block",
                                    width: "78.5px",
                                    height: "22px",
                                    fontSize: "18px",
                                }}
                            >
                                Panier
                            </div>
                        </div>
                        {/**bootstrap responsive table for fetch produits */}
                        <div
                            style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "left",
                                fontSize: "24px",
                            }}
                        >
                            <div className="container mt-5">
                                <div className="table-responsive">
                                    <div className="mobile-cart">
                                        {items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="d-flex flex-column border p-2 mb-2"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        marginBottom: "10px",
                                                    }}
                                                />
                                                <strong>{item.name}</strong>
                                                <p>{item.description}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        min="1"
                                                        onChange={(e) =>
                                                            handleQuantityChange(
                                                                e,
                                                                item.id
                                                            )
                                                        }
                                                        style={{
                                                            width: "60px",
                                                            marginRight: "10px",
                                                        }}
                                                    />
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() =>
                                                            dispatch(
                                                                removeFromCart(
                                                                    item.id
                                                                )
                                                            )
                                                        }
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <FooterPhone />
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (width <= 992) {
        // التابلت
        return (
            <>
                <div
                    style={{
                        width: "100%",
                        position: "relative",
                        backgroundColor: "#fff",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        textAlign: "center",
                        fontSize: "32px",
                        color: "#000",
                        fontFamily: "Poppins",
                    }}
                >
                    {/**sectionOne */}
                    <div
                        id="nav"
                        style={{
                            alignSelf: "stretch",
                            position: "relative",
                            height: "346px",
                            textAlign: "center",
                        }}
                    >
                        <img
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "0px",
                                right: "0px",
                                left: "0px",
                                maxWidth: "100%",
                                overflow: "hidden",
                                height: "355px",
                                objectFit: "cover",
                            }}
                            alt=""
                            src="/cardpg2.jpg"
                        />
                        <div
                            style={{
                                position: "absolute",
                                width: "calc(100% - 555px)",
                                top: "253px",
                                left: "278px",
                                fontWeight: "500",
                                display: "inline-block",
                                height: "60px",
                            }}
                        >
                            Panier
                        </div>
                    </div>
                    {/**autre sections */}
                    <div
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "left",
                            fontSize: "24px",
                        }}
                    >
                        <div className="container mt-5">
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Description</th>
                                            <th>Quantity</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item) => (
                                            <CartItem
                                                key={item.id}
                                                item={item}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <FooterTablete />
                    </div>
                </div>
            </>
        );
    } else {
        // الحاسوب
        return (
            <>
                <div
                    style={{
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "48px",
                        color: "#000",
                        fontFamily: "Poppins",
                    }}
                >
                    <div
                        style={{
                            flex: "1",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#fff",
                        }}
                    >
                        {/**sectionOne */}
                        <div
                            id="nav"
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "0px",
                                right: "0px",
                                left: "0px",
                                height: "346px",
                                textAlign: "center",
                            }}
                        >
                            <img
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    top: "0px",
                                    right: "0px",
                                    left: "0px",
                                    maxWidth: "100%",
                                    overflow: "hidden",
                                    height: "350px",
                                    objectFit: "cover",
                                }}
                                alt=""
                                src="/cardpg3.jpg"
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 803.5px)",
                                    top: "262.49px",
                                    left: "402px",
                                    fontWeight: "500",
                                    display: "inline-block",
                                    height: "72px",
                                }}
                            >
                                Panier
                            </div>
                        </div>
                        {/**autre sections */}
                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "346px",
                                right: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "24px",
                            }}
                        >
                            <div className="container mt-5">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th>Description</th>
                                                <th>Quantity</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.map((item) => (
                                                <CartItem
                                                    key={item.id}
                                                    item={item}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <FooterDesktop />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};
export default CardPage;
