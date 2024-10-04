import {
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    FETCH_ORDERS_FAILURE,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS,
    UPDATE_ORDER_FAILURE,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    DELETE_ORDER_FAILURE,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
} from "./orderAction";

const initialState = {
    orders: [],
    loading: false,
    error: null,
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS_REQUEST:
        case CREATE_ORDER_REQUEST:
        case UPDATE_ORDER_REQUEST:
        case DELETE_ORDER_REQUEST:
            return { ...state, loading: true };

        case FETCH_ORDERS_SUCCESS:
            return { ...state, orders: action.payload, loading: false };

        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                orders: [...state.orders, action.payload],
                loading: false,
            };
        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                orders: state.orders.filter(
                    (order) => order.id !== action.payload
                ),
                loading: false,
            };
        case UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                orders: state.orders.map((order) =>
                    order.id === action.payload.id ? action.payload : order
                ),
                loading: false,
            };
        case FETCH_ORDERS_FAILURE:
        case CREATE_ORDER_FAILURE:
        case UPDATE_ORDER_FAILURE:
        case DELETE_ORDER_FAILURE:
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
    }
};
