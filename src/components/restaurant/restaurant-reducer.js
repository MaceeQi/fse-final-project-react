import {createSlice} from "@reduxjs/toolkit";
import restaurants from "../data/restaurants.json";

const restaurantSlice = createSlice({
    name: "restaurants",
    initialState: restaurants[0],
    reducers: {
        updateRestaurant(state, action) {
            return {...action.payload};
        }
    }
});

export const {updateRestaurant} = restaurantSlice.actions;
export default restaurantSlice.reducer;