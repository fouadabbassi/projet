// src/redux/userActions.js

import {
    login,
    logout,
    register,
    fetchUserById,
    getProfile,
    destroyUser,
    fetchAllUsers,
    updateAdmin,
} from "../api/services/userService";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

// تسجيل الدخول
export const loginUser = (emailAndPassword) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const data = await login(emailAndPassword);
        dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
};

// تسجيل المستخدم
export const registerUser = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const data = await register(userData);
        dispatch({ type: REGISTER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.message });
    }
};

// تسجيل الخروج
export const logoutUser = () => async (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
    try {
        await logout();
        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAILURE, payload: error.message });
    }
};

// الحصول على الملف الشخصي
export const profileUser = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });
    try {
        const response = await getProfile();
        dispatch({ type: GET_PROFILE_SUCCESS, payload: response });
    } catch (error) {
        dispatch({ type: GET_PROFILE_FAILURE, payload: error.message });
    }
};

// جلب مستخدم حسب المعرف
export const getUserById = (id) => async (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST });
    try {
        const response = await fetchUserById(id);
        dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
    }
};

// تحديث بيانات المستخدم
export const updateUserById = (userData) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    try {
        const response = await updateAdmin(userData);
        dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
    }
};

export const deleteUser = (userId) => async (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });
    try {
        await destroyUser(userId);
        dispatch({ type: DELETE_USER_SUCCESS, payload: userId });
    } catch (error) {
        dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
    }
};

export const fetchUsers =() =>
    async (dispatch) => {
        dispatch({ type: FETCH_USERS_REQUEST });
        try {
            const data = await fetchAllUsers();
            dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
        }
    };
