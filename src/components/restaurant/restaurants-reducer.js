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
            state = action.payload;
          },
      [findRestaurantByIdThunk.fulfilled]:
          (state, action) => {
            state = state.filter(r => r._id === action.payload);
          },
      [createRestaurantThunk.fulfilled]:
          (state, action) => {
            state.push(action.payload);
          },
      [updateRestaurantThunk.fulfilled]:
          (state, action) => {
            const restIndex = state.findIndex(t => t._id === action.payload._id)
              state[restIndex] = {
                ...state[restIndex],
                ...action.payload
              }
          },
      [deleteRestaurantThunk.fulfilled]:
          (state, action) => {
            const index = state.findIndex(r => r._id === action.payload._id);
            state.splice(index, 1);
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