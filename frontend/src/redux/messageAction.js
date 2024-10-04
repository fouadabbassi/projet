import { createMessagesStore, deleteMessagesDestroy, fetchMessagesIndex } from "../api/services/messageService";


// Actions Types
export const FETCH_MESSAGES_REQUEST = "FETCH_MESSAGES_REQUEST";
export const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS";
export const FETCH_MESSAGES_FAILURE = "FETCH_MESSAGES_FAILURE";

export const CREATE_MESSAGE_REQUEST = "CREATE_MESSAGE_REQUEST";
export const CREATE_MESSAGE_SUCCESS = "CREATE_MESSAGE_SUCCESS";
export const CREATE_MESSAGE_FAILURE = "CREATE_MESSAGE_FAILURE";

export const DELETE_MESSAGE_REQUEST = "DELETE_MESSAGE_REQUEST";
export const DELETE_MESSAGE_SUCCESS = "DELETE_MESSAGE_SUCCESS";
export const DELETE_MESSAGE_FAILURE = "DELETE_MESSAGE_FAILURE";

// Fetch MESSAGES
export const fetchMessages = () => async (dispatch) => {
    dispatch({ type: FETCH_MESSAGES_REQUEST });
    try {
        const data = await fetchMessagesIndex();
        dispatch({ type: FETCH_MESSAGES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_MESSAGES_FAILURE, payload: error.message });
    }
};

// Create MESSAGE
export const createMessage = (messageData) => async (dispatch) => {
    dispatch({ type: CREATE_MESSAGE_REQUEST });
    try {
        const data = await createMessagesStore(messageData);
        dispatch({ type: CREATE_MESSAGE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_MESSAGE_FAILURE, payload: error.message });
    }
};


// Delete MESSAGE
export const deleteMessage = (messageId) => async (dispatch) => {
    dispatch({ type: DELETE_MESSAGE_REQUEST});
    try {
        await deleteMessagesDestroy(messageId);
        dispatch({ type: DELETE_MESSAGE_SUCCESS, payload: messageId });
    } catch (error) {
        dispatch({ type: DELETE_MESSAGE_FAILURE, payload: error.message });
    }
};
