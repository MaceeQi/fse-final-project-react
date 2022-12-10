import axios from "axios";
const BASE_URL="http://localhost:4000";
const AUTH_API = `${BASE_URL}/api/auth`;

const api = axios.create({
                             withCredentials: true
                         });

export const signup = async (user) => {
    const response = await api.post(`${AUTH_API}/signup`, user);
    const newUser = response.data;
    return newUser;
}

export const profile = () =>
    api.post(`${AUTH_API}/profile`)
        .then(response => response.data);

export const logout = () =>
    api.post(`${AUTH_API}/logout`)
        .then(response => response.data);

export const login = (credentials) =>
    api.post(`${AUTH_API}/login`, credentials)
        .then(response => response.data);