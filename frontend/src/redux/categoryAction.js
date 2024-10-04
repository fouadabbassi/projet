import {
    createCategories,
    deleteCategories,
    fetchCategories,
    updateCategories,
} from "../api/services/categoryService";

// Actions Types
export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

export const CREATE_CATEGORY_REQUEST = "CREATE_CATEGORY_REQUEST";
export const CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS";
export const CREATE_CATEGORY_FAILURE = "CREATE_CATEGORY_FAILURE";

export const UPDATE_CATEGORY_REQUEST = "UPDATE_CATEGORY_REQUEST";
export const UPDATE_CATEGORY_SUCCESS = "UPDATE_CATEGORY_SUCCESS";
export const UPDATE_CATEGORY_FAILURE = "UPDATE_CATEGORY_FAILURE";

export const DELETE_CATEGORY_REQUEST = "DELETE_CATEGORY_REQUEST";
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
export const DELETE_CATEGORY_FAILURE = "DELETE_CATEGORY_FAILURE";

// Fetch Categories
export const fetchCategory = () => async (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });
    try {
        const data = await fetchCategories();
        dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error.message });
    }
};

// Create Category
export const createCategory = (categoryData) => async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    try {
        const data = await createCategories(categoryData);
        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error.message });
    }
};

// Update Category
export const updateCategory =
    (categoryId, categoryData) => async (dispatch) => {
        dispatch({ type: UPDATE_CATEGORY_REQUEST });
        try {
            const data = await updateCategories(categoryId, categoryData);
            dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: UPDATE_CATEGORY_FAILURE, payload: error.message });
        }
    };

// Delete Category
export const deleteCategory = (categoryId) => async (dispatch) => {
    dispatch({ type: DELETE_CATEGORY_REQUEST });
    try {
        await deleteCategories(categoryId);
        dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: categoryId });
    } catch (error) {
        dispatch({ type: DELETE_CATEGORY_FAILURE, payload: error.message });
    }
};
