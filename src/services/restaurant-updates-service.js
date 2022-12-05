import axios from "axios";
const BASE_URL = "http://localhost:4000";

const RESTAURANTS_API = `${BASE_URL}/api/restaurants`;
const UPDATES_API = `${BASE_URL}/api/updates`;

export const findAllUpdates = () =>
    axios.get(`${UPDATES_API}`)
        .then(response => response.data);

export const findUpdatesByRestaurant = (rid) =>
    axios.get(`${RESTAURANTS_API}/${rid}/updates`)
        .then(response => {
            return response.data
        });

export const findUpdateById = (updateId) =>
    axios.get(`${UPDATES_API}/${updateId}`)
        .then(response => response.data);

export const createUpdate = async (update) => {
    const response = await axios.post(`${RESTAURANTS_API}/${update.updatedBy}/updates`, update);
    return response.data;
}

export const deleteUpdate = (updateId) =>
    axios.delete(`${UPDATES_API}/${updateId}`)
        .then(response => response.data);