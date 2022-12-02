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
        [deleteReviewThunk.fulfilled] :
            (state, { payload }) => {
                state.reviews = state.reviews
                    .filter(r => r._id !== payload)
            },
        [createReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.reviews.push(payload)
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