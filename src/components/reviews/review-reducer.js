import {createSlice} from "@reduxjs/toolkit";
import {
    findAllReviewsThunk, createReviewThunk,
    updateReviewThunk, deleteReviewThunk, findAllReviewsForRestaurantThunk
} from "../../services/reviews-thunks";

const reviewsReducer = createSlice({
    name: "reviews",
    initialState: {
        reviews: [],
        loading: false
    },
    extraReducers: {
       [findAllReviewsThunk.fulfilled]:
           (state, action) => {
                state.reviews = action.payload
            },
        [findAllReviewsForRestaurantThunk.pending]:
            (state) => {
                state.loading = true;
                state.reviews = [];
            },
        [findAllReviewsForRestaurantThunk.fulfilled]:
            (state, action) => {
                state.loading = false;
                state.reviews = action.payload;
                state.reviews = state.reviews.sort((a,b) => a.restaurant.localeCompare(b.restaurant));
            },
        [deleteReviewThunk.fulfilled] :
            (state, { payload }) => {
                state.reviews = state.reviews
                    .filter(r => r._id !== payload)
            },
        [createReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.reviews.push(payload)
            },
        [updateReviewThunk().fulfilled]:
            (state, { payload }) => {
                const reviewNdx = state.review
                    .findIndex((r) => r._id === payload._id)
                state.reviews[reviewNdx] = {
                    ...state.reviews[reviewNdx].review,
                    ...payload
                }
            }

    },
});

export default reviewsReducer.reducer;
