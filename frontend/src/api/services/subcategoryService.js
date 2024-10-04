import Instance from "../axios";

export const fetchSubcategoriesByCategories = async (categoryId) => {
    try {
        const response = await Instance.get(`/subcategories/bycategory/${categoryId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const fetchSubcategories = async () => {
    try {
        const response = await Instance.get(
            `/subcategories`
        );
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createSubcategories = async (subcategoryData) => {
    try {
        const response = await Instance.post("/subcategories", subcategoryData);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export const updateSubcategories = async (subcategoryId, subcategoryData) => {
    try {
        const response = await Instance.put(
            `/subcategories/${subcategoryId}`,
            subcategoryData
        );
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteSubcategories = async (subcategoryId) => {
    try {
        const response = await Instance.delete(
            `/subcategories/${subcategoryId}`
        );
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
