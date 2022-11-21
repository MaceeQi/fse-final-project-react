import axios from "axios";
const BASE_URL = "http://localhost:4000";

const RESTAURANTS_API = `${BASE_URL}/api/restaurant`;

export const findAllReviews = (restaurantid) =>
    axios.get(`${RESTAURANTS_API}/${restaurantid}/reviews`)
        .then(response => response.data);

export const createReview = (restaurantid, uid, review) =>
    axios.post(`${RESTAURANTS_API}/${restaurantid}/users/${uid}/reviews`, review)
        .then(response => response.data);

export const updateReview = (restaurantid, uid, reviewid, review) =>
    axios.put(`${RESTAURANTS_API}/${restaurantid}/users/${uid}/reviews/${reviewid}`, review)
        .then(response => response.data);

export const deleteReview = (restaurantid, uid, reviewid) =>
    axios.delete(`${RESTAURANTS_API}/${restaurantid}/users/${uid}/reviews/${reviewid}`)
        .then(response => response.data);

const service = {
    findAllReviews
}

export default service;
