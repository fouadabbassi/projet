import axios from "axios";
const Instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
export default Instance;
