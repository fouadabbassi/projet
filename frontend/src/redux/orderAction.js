import {
    createOrderApi,
    destroyOrder,
    fetchOrdersApi,
    updateOrderApi,
} from "../api/services/orderService";

// Actions Types
export const FETCH_ORDERS_REQUEST = "FETCH_ORDERS_REQUEST";
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
export const FETCH_ORDERS_FAILURE = "FETCH_ORDERS_FAILURE";

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE";

export const UPDATE_ORDER_REQUEST = "UPDATE_ORDER_REQUEST";
export const UPDATE_ORDER_SUCCESS = "UPDATE_ORDER_SUCCESS";
export const UPDATE_ORDER_FAILURE = "UPDATE_ORDER_FAILURE";

export const DELETE_ORDER_REQUEST = "DELETE_ORDER_REQUEST";
export const DELETE_ORDER_SUCCESS = "DELETE_ORDER_SUCCESS";
export const DELETE_ORDER_FAILURE = "DELETE_ORDER_FAILURE";

// Fetch Orders
export const fetchOrders =
    (page = 1) =>
    async (dispatch) => {
        dispatch({ type: FETCH_ORDERS_REQUEST });
        try {
            const data = await fetchOrdersApi(page);
            dispatch({ type: FETCH_ORDERS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_ORDERS_FAILURE, payload: error.message });
        }
    };

// Create Order
export const createOrder = (orderData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const data = await createOrderApi(orderData);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    }
};

// Update Order
export const updateOrder = (orderId, orderData) => async (dispatch) => {
    dispatch({ type: UPDATE_ORDER_REQUEST });
    try {
        const data = await updateOrderApi(orderId, orderData);
        dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_ORDER_FAILURE, payload: error.message });
    }
};

export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELETE_ORDER_REQUEST });
    try {
        await destroyOrder(orderId);
        dispatch({ type: DELETE_ORDER_SUCCESS, payload: orderId });
    } catch (error) {
        dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
    }
};
