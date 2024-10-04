// cardActions.js

// Action to set a specific quantity for an item
export const setQuantity = (id, quantity) => {
    return {
        type: "SET_QUANTITY",
        payload: { id, quantity }, // Pass the item ID and the desired quantity
    };
};

// Other actions remain the same
export const addToCart = (item) => ({
    type: "ADD_TO_CART",
    payload: item,
});

export const removeFromCart = (id) => ({
    type: "REMOVE_FROM_CART",
    payload: { id },
});

export const clearCart = () => ({
    type: "CLEAR_CART",
});
