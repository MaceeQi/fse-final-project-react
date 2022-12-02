import axios from "axios";
const BASE_URL = "http://localhost:4000";

const RESTAURANTS_API = `${BASE_URL}/api/restaurants`;
const ITEMS_API = `${BASE_URL}/api/items`;

export const findAllFeaturedItems = () =>
    axios.get(`${ITEMS_API}`)
        .then(response => response.data);

export const findFeaturedItemsByRestaurant = (rid) =>
    axios.get(`${RESTAURANTS_API}/${rid}/items`)
        .then(response => response.data);

export const findFeaturedItemById = (itemId) =>
    axios.get(`${ITEMS_API}/${itemId}`)
        .then(response => response.data);

export const createFeaturedItem = (rid, item) =>
    axios.post(`${RESTAURANTS_API}/${rid}/items`, item)
        .then(response => response.data);

export const deleteFeaturedItem = (itemId) =>
    axios.delete(`${ITEMS_API}/${itemId}`)
        .then(response => response.data);