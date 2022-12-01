import {createAsyncThunk} from "@reduxjs/toolkit";
import * as reviewsService from "./reviews-service";

export const findAllReviewsThunk = createAsyncThunk(
    'reviews/findAllReviews', async () =>
        await reviewsService.findAllReviews()
)

export const findAllReviewsForRestaurantThunk = createAsyncThunk(
    'reviews/findAllReviewsForRestaurant', async (restaurantid) =>
        await reviewsService.findAllReviewsForRestaurant(restaurantid)
)

export const findAllReviewsByCriticThunk = createAsyncThunk(
    'reviews/findAllReviewsByCritic', async (criticid) =>
        await reviewsService.findAllReviewsByCritic(criticid)
)

export const findReviewByIdThunk = createAsyncThunk(
    'reviews/findReviewById', async (reviewid) =>
        await reviewsService.findReviewById(reviewid)
)

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview', async (restaurantid, criticid, review) =>
        await reviewsService.createReview(restaurantid, criticid, review)
)

export const updateReviewThunk = createAsyncThunk(
    'reviews/updateReview', async (review) =>
        await reviewsService.updateReview(review)
)

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteReview', async (reviewid) =>
        await reviewsService.deleteReview(reviewid)
)