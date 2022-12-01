import {createSlice} from "@reduxjs/toolkit";
// import reviews from "../data/sample-reviews.json";
import {findAllReviewsThunk, createReviewThunk,
    updateReviewThunk, deleteReviewThunk} from "../../services/reviews-thunks";

const initialState = {
    reviews: [],
    loading: false
}

const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    extraReducers: {
       [findAllReviewsThunk().pending]: (state) => {
           state.loading = true
           state.reviews = []
       },
       [findAllReviewsThunk().fulfilled]: (state, { payload }) => {
           state.loading = false
           state.reviews = payload
       },
       [findAllReviewsThunk().rejected]: (state) => {
           state.loading = false
       },
       [deleteReviewThunk().fulfilled] : (state, { payload }) => {
           state.loading = false
           state.tuits = state.tuits.filter(review => review._id !== payload)
       },
       [createReviewThunk.fulfilled]: (state, { payload }) => {

           state.reviews.push(payload);
       },
       [updateReviewThunk.fulfilled]: (state, { payload }) => {
           state.loading = false
           const reviewNdx = state.reviews.findIndex(review => review._id === payload._id)
           state.reviews[reviewNdx] = {...state.reviews[reviewNdx], ...payload}
       }
    }
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

export const {createReview} = reviewSlice.actions;
export default reviewSlice.reducer;