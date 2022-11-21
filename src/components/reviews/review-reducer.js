import {createSlice} from "@reduxjs/toolkit";
import reviews from "../data/sample-reviews.json";

const reviewSlice = createSlice({
   name: "reviews",
   initialState: reviews,
   reducers: {
       createReview(state, action) {
           state.unshift({
                             ...action.payload,
                             _id: (new Date()).getTime() + "",
                             time: new Date().toLocaleString('en-US')
           })
       }
   }
});

export const {createReview} = reviewSlice.actions;
export default reviewSlice.reducer;