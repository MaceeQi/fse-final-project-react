import axios from "axios";
const BASE_URL = "http://localhost:4000";

const RESTAURANTS_API = `${BASE_URL}/api/restaurants`;
const USERS_API = `${BASE_URL}/api/users`;

export const findAllRestaurants = () =>
    axios.get(`${RESTAURANTS_API}`)
        .then(response => response.data);

export const findRestaurantById = (rid) =>
    axios.get(`${RESTAURANTS_API}/${rid}`)
        .then(response => response.data);

export const createRestaurant = (uid, restaurant) =>
    axios.post(`${USERS_API}/${uid}/restaurants`, restaurant)
        .then(response => response.data);

export const updateRestaurant = (rid, restaurant) =>
    axios.put(`${RESTAURANTS_API}/${rid}`, restaurant)
        .then(response => response.data);

export const deleteRestaurant = (rid) =>
    axios.delete(`${RESTAURANTS_API}/${rid}`)
        .then(response => response.data);

export const deleteRestaurantByRestaurantName = (name) =>
    axios.delete(`${RESTAURANTS_API}/name/${name}/delete`)
        .then(response => response.data);