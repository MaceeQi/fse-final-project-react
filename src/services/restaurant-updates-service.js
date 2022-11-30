import axios from "axios";
const BASE_URL = "http://localhost:4000";

const RESTAURANTS_API = `${BASE_URL}/api/restaurants`;

export const findAllUpdates = (restaurantid) =>
    axios.get(`${RESTAURANTS_API}/${restaurantid}/updates`)
        .then(response => response.data);

export const createUpdate = (restaurantid, update) =>
    axios.post(`${RESTAURANTS_API}/${restaurantid}/updates`, update)
        .then(response => response.data);

export const editUpdate = (restaurantid,updateid, update) =>
    axios.put(`${RESTAURANTS_API}/${restaurantid}/updates/${updateid}`, update)
        .then(response => response.data);

export const deleteUpdate = (restaurantid, updateid) =>
    axios.delete(`${RESTAURANTS_API}/${restaurantid}/updates/${updateid}}`)
        .then(response => response.data);