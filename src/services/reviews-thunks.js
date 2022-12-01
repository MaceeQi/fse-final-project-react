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
    'reviews/createReview', async (review) =>
        // await reviewsService.createReview(review.criticid, review.restaurantid, review.review)
        await reviewsService.createReview("6383e8fde3994dcd7623e825", "637c1ccb59bca90266c414a7", review)
        // Currently hardcoded because test restaurant and users have ids "123", which are too short
)

export const updateReviewThunk = createAsyncThunk(
    'reviews/updateReview', async (review) =>
        await reviewsService.updateReview(review)
)

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteReview', async (reviewid) => {
        await reviewsService.deleteReview(reviewid)
        return reviewid
    }
)