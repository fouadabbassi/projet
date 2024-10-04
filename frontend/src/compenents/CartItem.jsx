/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeFromCart, setQuantity } from "../redux/cartAction";
import { useEffect, useState } from "react";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    // Handle change in quantity input
    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity >= 1) {
            dispatch(setQuantity(item.id, newQuantity));
        }
    };

    // State to track window width
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Inline styles based on width
    const imageStyle = {
        width: width <= 992 ? "80px" : "100px",
        height: "auto",
        objectFit: "cover",
    };

    const inputStyle = {
        width: width <= 992 ? "60px" : "60px",
    };

    return (
        <tr className="cart-item">
            <td className="cart-item-image">
                <img
                    src={item.image}
                    alt={item.name}
                    style={imageStyle} // Apply dynamic style
                />
            </td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>
                <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={handleQuantityChange}
                    style={inputStyle} // Apply dynamic style
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                >
                    Remove
                </button>
            </td>
        </tr>
    );
};

export default CartItem;
