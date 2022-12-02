import axios from "axios";
const BASE_URL = "http://localhost:4000";

const RESTAURANTS_API = `${BASE_URL}/api/restaurants`;

export const findAllRestaurants = () =>
    axios.get(`${RESTAURANTS_API}`)
        .then(response => response.data);

export const findRestaurantById = (rid) =>
    axios.get(`${RESTAURANTS_API}/${rid}`)
        .then(response => {
            // console.log(response.data);
            return response.data;
        });

export const createRestaurant = (restaurant) =>
    axios.post(`${RESTAURANTS_API}`, restaurant)
        .then(response => response.data);

export const updateRestaurant = (restaurant) =>
    axios.put(`${RESTAURANTS_API}/${restaurant._id}`, restaurant)
        .then(response => response.data);

export const deleteRestaurant = (rid) =>
    axios.delete(`${RESTAURANTS_API}/${rid}`)
        .then(response => response.data);

export const deleteRestaurantByRestaurantName = (name) =>
    axios.delete(`${RESTAURANTS_API}/name/${name}/delete`)
        .then(response => response.data);