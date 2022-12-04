import {createSlice} from "@reduxjs/toolkit";

import {
    createRestaurantThunk, deleteRestaurantThunk,
    findAllRestaurantsThunk,
    findRestaurantByIdThunk, updateRestaurantThunk
} from "../../services/restaurants-thunks";


// revise the currentRestaurant into null after implementing user login/signup
const initialState = {
    restaurants: [],
    loading: false,
    currentRestaurant: null,
    publicPage: null
}

const restaurantsReducer = createSlice({
    name: "restaurants",
    initialState,
    extraReducers: {
        [findAllRestaurantsThunk.pending]:
            (state) => {
                state.loading = true;
                state.restaurants = [];
                state.publicPage = null;
            },
        [findAllRestaurantsThunk.fulfilled]:
            (state, action) => {
                state.loading = false;
                state.restaurants = action.payload;
            },
        [findRestaurantByIdThunk.fulfilled]:
            (state, action) => {
                state.loading = false;
                state.publicPage = action.payload;
                // console.log(state.publicPage)
            },
        [createRestaurantThunk.fulfilled]:
            (state, action) => {
                state.loading = false
                state.restaurants.push(action.payload);
            },
        [updateRestaurantThunk.fulfilled]:
            (state, action) => {
                state.loading = false
                const restIndex = state.restaurants.findIndex(r => r._id === action.payload._id)
                    state.restaurants[restIndex] = {
                        ...state.restaurants[restIndex],
                        ...action.payload
                };
                state.currentRestaurant = {...state.currentRestaurant, ...action.payload};
                console.log(state.currentRestaurant)

            },
        [deleteRestaurantThunk.fulfilled]:
            (state, action) => {
                state.loading = false
                const index = state.restaurants.findIndex(r => r._id === action.payload._id);
                state.restaurants.splice(index, 1);
            },
    }
    // reducers: {
    //     updateRestaurant(state, action) {
    //         return {...action.payload};
    //     }
    // }
});

// export const {updateRestaurant} = restaurantSlice.actions;
export default restaurantsReducer.reducer;