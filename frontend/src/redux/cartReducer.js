/* eslint-disable no-case-declarations */
// cardReducer.js

const initialState = {
    items: [], // Array to store the products in the cart
    totalAmount: 0, // Total amount of the cart
};

// Reducer function to handle cart actions
const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const addedItem = action.payload;
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === addedItem.id
            );

            if (existingItemIndex >= 0) {
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += 1;
                updatedItems[existingItemIndex].amount =
                    updatedItems[existingItemIndex].quantity *
                    updatedItems[existingItemIndex].price;

                const updatedTotalAmount = state.totalAmount + addedItem.price;

                return {
                    ...state,
                    items: updatedItems,
                    totalAmount: updatedTotalAmount,
                };
            } else {
                const updatedTotalAmount = state.totalAmount + addedItem.price;
                return {
                    ...state,
                    items: [
                        ...state.items,
                        { ...addedItem, quantity: 1, amount: addedItem.price }, // Add amount for new item
                    ],
                    totalAmount: updatedTotalAmount,
                };
            }

        case "SET_QUANTITY":
            const { id, quantity } = action.payload;
            const itemToUpdate = state.items.find((item) => item.id === id);

            const quantityDifference = quantity - itemToUpdate.quantity;
            const updatedTotalAmount =
                state.totalAmount + quantityDifference * itemToUpdate.price;

            const updatedSetItems = state.items.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: quantity,
                          amount: quantity * item.price,
                      } // Update amount
                    : item
            );

            return {
                ...state,
                items: updatedSetItems,
                totalAmount: updatedTotalAmount,
            };

        case "REMOVE_FROM_CART":
            const removedItemId = action.payload.id;
            const itemToRemove = state.items.find(
                (item) => item.id === removedItemId
            );
            const updatedItems = state.items.filter(
                (item) => item.id !== removedItemId
            );
            const updatedAmountAfterRemove =
                state.totalAmount - itemToRemove.price * itemToRemove.quantity;

            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedAmountAfterRemove,
            };

        case "CLEAR_CART":
            return {
                ...state,
                items: [],
                totalAmount: 0,
            };

        default:
            return state;
    }
};

export default cardReducer;
