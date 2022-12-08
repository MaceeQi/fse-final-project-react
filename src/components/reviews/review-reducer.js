import {createSlice} from "@reduxjs/toolkit";
// import reviews from "../data/sample-reviews.json";
import {
    findAllReviewsThunk, createReviewThunk,
    updateReviewThunk, deleteReviewThunk, findAllReviewsForRestaurantThunk
} from "../../services/reviews-thunks";

const reviewsReducer = createSlice({
    name: "reviews",
    initialState: {
        reviews: []
    },
    extraReducers: {
       [findAllReviewsThunk.fulfilled]:
           (state, action) => {
                state.reviews = action.payload
            },
        [findAllReviewsForRestaurantThunk.fulfilled]:
            (state, action) => {
                state.reviews = action.payload
                state.reviews = state.reviews.sort((a,b) => a.restaurant.localeCompare(b.restaurant))
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
   // reducers: {
   //     createReview(state, action) {
   //         state.unshift({
   //                           ...action.payload,
   //                           _id: (new Date()).getTime() + "",
   //                           time: new Date().toLocaleString('en-US')
   //         })
   //     }
   // }
});

// export const {createReview} = reviewSlice.actions;
export default reviewsReducer.reducer;
