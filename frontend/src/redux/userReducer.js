// src/redux/authReducer.js

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
} from "./userAction";

// الحالة الأولية
const initialState = {
    loading: false,
    users:[],
    user: {},
    userProfile: null,
    error: null,
    isLoggedIn: false,
    isAdmin: false,
};

// تعريف المقتطع (Reducer)
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case LOGOUT_REQUEST:
        case FETCH_USER_REQUEST:
        case UPDATE_USER_REQUEST:
        case GET_PROFILE_REQUEST:
        case FETCH_USERS_REQUEST:
        case DELETE_USER_REQUEST:
            return { ...state, loading: true, error: null };

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                userProfile: action.payload,
                isLoggedIn: true,
                isAdmin: action.payload.role === "admin",
                loading: false,
                error: null,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null,
            };
        case FETCH_USERS_FAILURE:
        case DELETE_USER_FAILURE:
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case LOGOUT_FAILURE:
        case UPDATE_USER_FAILURE:
        case GET_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                isAdmin: false,
                error: action.payload,
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                userProfile: null,
                isLoggedIn: false,
                isAdmin: false,
                loading: false,
                error: null,
            };

        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                userProfile: action.payload,
                loading: false,
                isLoggedIn: true,
                isAdmin: action.payload.role === "admin",
            };

        case FETCH_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false };

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                ),
                loading: false,
            };

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(
                    (user) => user.id !== action.payload
                ),
                loading: false,
            };

        default:
            return state;
    }
};
