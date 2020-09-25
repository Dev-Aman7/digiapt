import axios from "axios";

const AUTH_URL = "AUTH_URL";
const BASE_CLIENT = "BACKEND_URL";
export const AuthClient = axios.create({
    baseURL: AUTH_URL,
    withCredentials: true,
});

export const BaseClient = axios.create({
    baseURL: BASE_CLIENT,
});

export default BaseClient;
