import {createSlice} from "@reduxjs/toolkit";
// import { deleteUpdate } from "../../../services/restaurant-updates-service";
// import features from "../../data/featured-items.json";
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
              console.log(state.features);
          },
      [findFeaturedItemByIdThunk.fulfilled]:
          (state, {payload}) => {
              state.loading = false;
              state.featureItem = payload;
          },
      [createFeaturedItemThunk.fulfilled]:
          (state, {payload}) => {
              state.features.push(payload);
              // console.log(payload);
          },
      [deleteFeaturedItemThunk.fulfilled]:
          (state, {payload}) => {
              const index = state.features.findIndex(i => i._id === payload);
              state.features.splice(index, 1);
        },
    },
   //  reducers: {
   //      createFeature(state, action) {
   //         state.push({
   //              ...action.payload,
   //              _id: (new Date()).getTime() + "",
   //         })
   //      },
   //
   //      deleteFeature(state, action) {
   //          const index = state.findIndex(feature =>feature._id === action.payload);
   //          state.splice(index, 1);
   //      }
   // }
});

// export const {createFeature, deleteFeature} = featuredSlice.actions;
export default featuredSlice.reducer;