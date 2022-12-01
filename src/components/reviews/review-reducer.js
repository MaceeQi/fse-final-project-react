import {createSlice} from "@reduxjs/toolkit";
// import reviews from "../data/sample-reviews.json";
import {findAllReviewsThunk, createReviewThunk,
    updateReviewThunk, deleteReviewThunk} from "../../services/reviews-thunks";

const reviewsReducer = createSlice({
    name: "reviews",
    initialState: {
        reviews: []
    },
    extraReducers: {
       [findAllReviewsThunk.fulfilled]: (state, action) => {
           state.reviews = action.payload
       },
       [deleteReviewThunk.fulfilled] : (state, action) => {
           state.reviews = state.filter(review => review._id !== action.payload)
       },
       [createReviewThunk.fulfilled]: (state, action) => {
           state.reviews.push(action.payload)
       },
       [updateReviewThunk.fulfilled]: (state, action) => {
           const reviewNdx = state.reviews.findIndex((review) => review._id === action.payload._id)
           state.reviews[reviewNdx] = {...state.reviews[reviewNdx], ...action.payload}
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