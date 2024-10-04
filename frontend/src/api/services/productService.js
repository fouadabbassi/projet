import Instance from "../axios";

export const fetchProductsIndex = async () => {
    try {
        const response = await Instance.get(`/products`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const fetchProductsByCategories = async (categoryId, page = 1) => {
    try {
        const response = await Instance.get(
            `/products/bycategory/${categoryId}?page=${page}`
        );
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchProductsBySubcategories = async (subcategoryId, page = 1) => {
    try {
        const response = await Instance.get(
            `/products/bysubcategory/${subcategoryId}?page=${page}`
        );
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchProducts = async (productId) => {
    try {
        const response = await Instance.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createProducts = async (productData) => {
    try {
        const response = await Instance.post("/products", productData);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export const updateProducts = async (productId, productData) => {
    try {
        const response = await Instance.put(
            `/products/${productId}`,
            productData
        );
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteProducts = async (productId) => {
    try {
        const response = await Instance.delete(`/products/${productId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
