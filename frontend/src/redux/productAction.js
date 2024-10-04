import {
    createProducts,
    deleteProducts,
    fetchProducts,
    fetchProductsByCategories,
    fetchProductsBySubcategories,
    fetchProductsIndex,
    updateProducts,
} from "../api/services/productService";

// Actions Types
export const FETCH_PRODUCTINDEX_REQUEST = "FETCH_PRODUCTINDEX_REQUEST";
export const FETCH_PRODUCTINDEX_SUCCESS = "FETCH_PRODUCTINDEX_SUCCESS";
export const FETCH_PRODUCTINDEX_FAILURE = "FETCH_PRODUCTINDEX_FAILURE";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const CREATE_PRODUCT_REQUEST = "CREATE_PRODUCT_REQUEST";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE";

export const UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";

export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";

export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";


export const fetchProductsByIndex =() =>
    async (dispatch) => {
        dispatch({ type: FETCH_PRODUCTINDEX_REQUEST });
        try {
            const data = await fetchProductsIndex();
            dispatch({ type: FETCH_PRODUCTINDEX_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_PRODUCTINDEX_FAILURE, payload: error.message });
        }
    };

// Fetch Products by Category
export const fetchProductsByCategory =
    (categoryId, page = 1) =>
    async (dispatch) => {
        dispatch({ type: FETCH_PRODUCTS_REQUEST });
        try {
            const data = await fetchProductsByCategories(categoryId, page);
            dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data.data });
        } catch (error) {
            dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
        }
    };
// Fetch Products by Subcategory
export const fetchProductsBySubcategory =
    (subcategoryId, page = 1) =>
    async (dispatch) => {
        dispatch({ type: FETCH_PRODUCTS_REQUEST });
        try {
            const data = await fetchProductsBySubcategories(
                subcategoryId,
                page
            );
            dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data.data });
        } catch (error) {
            console.log("Fetch products error:", error.message); // تحقق من الأخطاء هنا
            dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
        }
    };


// Create Product
export const createProduct = (productData) => async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST });
    try {
        const data = await createProducts(productData);
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
    }
};

// Update Product
export const updateProduct = (productId, productData) => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    try {
        const data = await updateProducts(productId, productData);
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
    }
};

// Delete Product
export const deleteProduct = (productId) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    try {
        await deleteProducts(productId);
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
    }
};

// Fetch a single product by ID
export const fetchProductById = (productId) => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_REQUEST });
    try {
        const data = await fetchProducts(productId); // استدعاء API Service
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data});
    } catch (error) {
        dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error.message });
    }
};
