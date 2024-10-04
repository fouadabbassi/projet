import Instance from "../axios";

export const fetchCategories = async () => {
    try {
        const response = await Instance.get("/categories");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createCategories = async (categoryData) => {
    try {
        const response = await Instance.post("/categories", categoryData);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export const updateCategories = async (categoryId, categoryData) => {
    try {
        const response = await Instance.put(
            `/categories/${categoryId}`,
            categoryData
        );
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteCategories = async (categoryId) => {
    try {
        const response = await Instance.delete(`/categories/${categoryId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
