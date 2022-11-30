import {createSlice} from "@reduxjs/toolkit";
// import restaurants from "../data/restaurants.json";
import {
    createRestaurantThunk, deleteRestaurantThunk,
    findAllRestaurantsThunk,
    findRestaurantByIdThunk, updateRestaurantThunk
} from "../../services/restaurants-thunks";

const restaurantSlice = createSlice({
    name: "restaurants",
    // initialState: restaurants[0],
    initialState: [],
    extraReducers: {
      [findAllRestaurantsThunk.fulfilled]:
          (state, action) => {
            state.restaurants = action.payload;
          },
      [findRestaurantByIdThunk.fulfilled]:
          (state, action) => {
            state.restaurants = state.restaurants
                .filter(r => r._id === action.payload);
          },
      [createRestaurantThunk.fulfilled]:
          (state, action) => {
            state.restaurants.push(action.payload);
          },
      [updateRestaurantThunk.fulfilled]:
          (state, action) => {
            const restIndex = state.restaurants
                .findIndex(t => t._id === action.payload._id)
              state.restaurants[restIndex] = {
                ...state.restaurants[restIndex],
                ...action.payload
              }
          },
      [deleteRestaurantThunk.fulfilled]:
          (state, action) => {
            state.restaurants = state.restaurants
                .filter(r => r._id !== action.payload._id);
          }
    },
    // reducers: {
    //     updateRestaurant(state, action) {
    //         return {...action.payload};
    //     }
    // }
});

// export const {updateRestaurant} = restaurantSlice.actions;
export default restaurantSlice.reducer;