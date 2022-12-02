import {createSlice} from "@reduxjs/toolkit";
// import { deleteUpdate } from "../../../services/restaurant-updates-service";
// import features from "../../data/featured-items.json";
import {
    findAllFeaturedItemsThunk,
    findFeaturedItemsByRestaurantThunk,
    findFeaturedItemByIdThunk, createFeaturedItemThunk, deleteFeaturedItemThunk,
} from "../../../services/featured-item-thunks";

const initialState = [];

const featuredSlice = createSlice({
    name: "features",
    // initialState: features,
    initialState,
    extraReducers: {
      [findAllFeaturedItemsThunk.fulfilled]:
          (state, {payload}) => {
            state = payload
          },
      [findFeaturedItemsByRestaurantThunk.fulfilled]:
          (state, {payload}) => {
              state = state.filter(i => i.restaurant === payload);
          },
      [findFeaturedItemByIdThunk.fulfilled]:
          (state, {payload}) => {
              state = state.filter(i => i._id === payload);
          },
      [createFeaturedItemThunk.fulfilled]:
          (state, {payload}) => {
              state.push(payload)
          },
      [deleteFeaturedItemThunk.fulfilled]:
          (state, {payload}) => {
              const index = state.findIndex(i => i._id === payload);
              state.splice(index, 1);
        },
    },
    reducers: {
        createFeature(state, action) {
           state.push({
                ...action.payload,
                _id: (new Date()).getTime() + "",
           })
        },

        deleteFeature(state, action) {
            const index = state.findIndex(feature =>feature._id === action.payload);
            state.splice(index, 1);
        }
   }
});

export const {createFeature, deleteFeature} = featuredSlice.actions;
export default featuredSlice.reducer;