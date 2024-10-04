import Instance from "../axios";

export const fetchMessagesIndex = async () => {
    try {
        const response = await Instance.get("/messages");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createMessagesStore = async (messageData) => {
    try {
        const response = await Instance.post("/messages", messageData);
        console.log(response);
        return response;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteMessagesDestroy = async (messageId) => {
    try {
        const response = await Instance.delete(`/messages/${messageId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
