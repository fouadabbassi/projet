import Instance from "../axios";

export const login = async (data) => {
    try {
        const response = await Instance.post("/login", data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const register = async (data) => {
    try {
        const response = await Instance.post("/register", data);
        return response;
    } catch (error) {
        throw error.response.data;
    }
};

export const logout = async () => {
    try {
        await Instance.post("/logout");
    } catch (error) {
        throw error.response.data;
    }
};
export const getProfile = async () => {
    try {
        const response = await Instance.get("/user");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateAdmin = async ( userData) => {
    try {
        const response = await Instance.put(
            `/users/admin-update`,
            userData
        );
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchUserById = async (id) => {
    try {
        const response = await Instance.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const fetchAllUsers = async () => {
    try {
        const response = await Instance.get(`/users`);
        console.log(response)
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const destroyUser = async (userId) => {
    try {
        const response = await Instance.delete(`/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
