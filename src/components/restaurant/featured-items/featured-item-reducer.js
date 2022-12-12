import {createSlice} from "@reduxjs/toolkit";
import {
    findAllFeaturedItemsThunk,
    findFeaturedItemsByRestaurantThunk,
    findFeaturedItemByIdThunk, createFeaturedItemThunk, deleteFeaturedItemThunk,
} from "../../../services/featured-item-thunks";

const initialState = {
    featureItem: {},
    features: [],
    loading: false
};

const featuredSlice = createSlice({
    name: "features",
    initialState,
    extraReducers: {
      [findAllFeaturedItemsThunk.fulfilled]:
          (state, {payload}) => {
            state.loading = false;
            state.features = payload;
          },
      [findFeaturedItemsByRestaurantThunk.fulfilled]:
          (state, {payload}) => {
              state.loading = false;
              state.features = payload;
          },
      [findFeaturedItemByIdThunk.fulfilled]:
          (state, {payload}) => {
              state.loading = false;
              state.featureItem = payload;
          },
      [createFeaturedItemThunk.fulfilled]:
          (state, {payload}) => {
              state.features.push(payload);
          },
      [deleteFeaturedItemThunk.fulfilled]:
          (state, {payload}) => {
              const index = state.features.findIndex(i => i._id === payload);
              state.features.splice(index, 1);
        },
    },
});

export default featuredSlice.reducer;