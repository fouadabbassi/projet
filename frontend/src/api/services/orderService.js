import Instance from "../axios";

export const fetchOrdersApi = async (page = 1) => {
    try {
        const response = await Instance.get(`/orders?page=${page}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createOrderApi = async (orderData) => {
    try {
        const response = await Instance.post("/orders", orderData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateOrderApi = async (orderId, orderData) => {
    try {
        const response = await Instance.put(`/orders/${orderId}`, orderData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const destroyOrder = async (orderId) => {
    try {
        const response = await Instance.delete(`/products/${orderId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
