import axios from "axios";

export const getContacts = (keyword) => async (dispatch) => {
    try {
        dispatch({ type: "ALL_PHONE_REQUEST" });

        const { data } = await axios.get(`/get?keyword=${keyword}`);
        // console.log(data);

        dispatch({
            type: "ALL_PHONE_SUCCESS",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "ALL_PHONE_FAIL",
            payload: error.response.data,
        });
    }
};

export const deleteContacts = (id) => async (dispatch) => {
    try {
        await axios.delete(`/delete?id=${id}`);
    } catch (error) {
        dispatch({
            type: "ALL_PHONE_FAIL",
            payload: error.response.data,
        });
    }
};