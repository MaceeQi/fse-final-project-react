import axios from "axios";
const BASE_URL = "http://localhost:4000";

const RESTAURANTS_API = `${BASE_URL}/api/restaurants`;
const REVIEWS_API = `${BASE_URL}/api/reviews`;

const api = axios.create({withCredentials: true});

export const findAllReviews = () =>
    axios.get(`${REVIEWS_API}`)
        .then(response => response.data)

export const findAllReviewsForRestaurant = (restaurantid) =>
    axios.get(`${RESTAURANTS_API}/${restaurantid}/reviews`)
        .then(response => response.data);

export const findAllReviewsByCritic = (criticid) =>
    axios.get(`${BASE_URL}/api/users/${criticid}/reviews`)
        .then(response => response.data);

export const findReviewById = (reviewid) =>
    axios.get(`${REVIEWS_API}/${reviewid}`)
        .then(response => response.data);

export const createReview = async (criticid, restaurantid, review) => {
    const response = await axios
        .post(`${RESTAURANTS_API}/${restaurantid}/users/${criticid}/reviews`, review);
    console.log(response.data);
    return response.data;
}


export const updateReview = (reviewid, review) =>
    axios.put(`${REVIEWS_API}/${reviewid}`, review)
        .then(response => response.data);

export const deleteReview = (reviewid) =>
    axios.delete(`${REVIEWS_API}/${reviewid}`)
        .then(response => response.data);
