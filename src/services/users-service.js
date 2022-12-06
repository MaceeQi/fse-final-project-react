import axios from "axios";
const BASE_URL = "http://localhost:4000";

const LOGIN_API = `${BASE_URL}/api/login`;
const USERS_API = `${BASE_URL}/api/users`;

export const createUser = (user) =>
  axios.post(`${USERS_API}`, user)
    .then(response => response.data);

export const findAllUsers = () =>
  axios.get(USERS_API)
    .then(response => response.data);

export const findUserById = (uid) =>
  axios.get(`${USERS_API}/${uid}`)
    .then(response => response.data);

export const deleteUser = (uid) =>
  axios.delete(`${USERS_API}/${uid}`)
    .then(response => response.data);

export const deleteUsersByUsername = (username) =>
  axios.delete(`${USERS_API}/username/${username}/delete`)
    .then(response => response.data);

export const findUserByCredentials = (credentials) =>
  axios.post(`${LOGIN_API}`, credentials)
    .then(response => response.data);

export const updateUser = (uid, updates) =>
    axios.put(`${USERS_API}/${uid}`, updates)
        .then(response => response.data);

export const deleteAllUsers = () =>
    axios.delete(`${USERS_API}`)
        .then(response => response.data);

export const findUsersByType = (type) =>
    axios.get(`${USERS_API}/type/${type}`)
        .then(response => response.data);

export const findUsersByRestaurant = (rid) =>
    axios.get(`${USERS_API}/business/${rid}`)
        .then(response => response.data);

export const deleteUsersByRestaurant = (rid) =>
    axios.delete(`${USERS_API}/business/${rid}`)
        .then(response => response.data);

const service = {
  findAllUsers
}

export default service;