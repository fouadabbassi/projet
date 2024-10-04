import {
    CREATE_PRODUCT_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTINDEX_FAILURE,
    FETCH_PRODUCTINDEX_REQUEST,
    FETCH_PRODUCTINDEX_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
} from "./productAction";

const initialState = {
    products: [],
    loading: false,
    product: null,
    error: null,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
        case CREATE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
        case DELETE_PRODUCT_REQUEST:
        case FETCH_PRODUCT_REQUEST:
        case FETCH_PRODUCTINDEX_REQUEST:
            return { ...state, loading: true };

        case FETCH_PRODUCTS_SUCCESS:
        case FETCH_PRODUCTINDEX_SUCCESS:
            return { ...state, products: action.payload, loading: false };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: null,
            };

        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, action.payload],
                loading: false,
            };

        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id ? action.payload : product
                ),
                loading: false,
            };

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload
                ),
                loading: false,
            };

        case FETCH_PRODUCTS_FAILURE:
        case CREATE_PRODUCT_FAILURE:
        case UPDATE_PRODUCT_FAILURE:
        case DELETE_PRODUCT_FAILURE:
        case FETCH_PRODUCT_FAILURE:
        case FETCH_PRODUCTINDEX_FAILURE:
            return {
                ...state,
                product: null,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};
