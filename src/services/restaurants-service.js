import axios from "axios";
const BASE_URL = "http://localhost:4000";

const RESTAURANTS_API = `${BASE_URL}/api/restaurants`;

axios.defaults.adapter = require('axios/lib/adapters/http')

export const findAllRestaurants = () =>
    axios.get(`${RESTAURANTS_API}`)
        .then(response => response.data);


export const findRestaurantById = async (rid) => {
    const response = await axios.get(`${RESTAURANTS_API}/${rid}`);
    const restaurant = response.data;
    // console.log(restaurant);
    return restaurant;
}

export const createRestaurant = async (restaurant) => {
    const response = await axios.post(`${RESTAURANTS_API}`, restaurant);
    // console.log(response.data);
    return response.data;
}



export const updateRestaurant = async (restaurant) => {
    await axios.put(`${RESTAURANTS_API}/${restaurant._id}`, restaurant);
    // console.log(restaurant)
    return restaurant;
}


export const deleteRestaurant = (rid) =>
    axios.delete(`${RESTAURANTS_API}/${rid}`)
        .then(response => response.data);


export const deleteRestaurantByRestaurantName = (name) =>
    axios.delete(`${RESTAURANTS_API}/name/${name}/delete`)
        .then(response => response.data);


export const findRestaurantsByName = (name) =>
    axios.get(`${RESTAURANTS_API}/name/${name}`)
        .then(response => response.data);

export const deleteRestaurantByOwner = (owner) =>
    axios.delete(`${RESTAURANTS_API}/users/${owner}`)
        .then(response => response.data);