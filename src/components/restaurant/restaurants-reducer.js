import {createSlice} from "@reduxjs/toolkit";

import {
    createRestaurantThunk, deleteRestaurantThunk,
    findAllRestaurantsThunk, findRestaurantByIdThunk,
    updateRestaurantThunk, findRestaurantsByNameThunk
} from "../../services/restaurants-thunks";

const initialState = {
    restaurants: [],
    loading: false,
    currentRestaurant: null,
    publicPage: null
}

const restaurantSlice = createSlice({
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
                state.restaurants = state.restaurants.sort((a, b) => a.name.localeCompare(b.name));
            },
        [findRestaurantByIdThunk.pending]:
            (state) => {
                state.loading = true;
                state.publicPage = null;
                // console.log(state.publicPage)
            },
        [findRestaurantByIdThunk.fulfilled]:
            (state, action) => {
                state.loading = false;
                state.publicPage = action.payload;
                // console.log(state.publicPage)
            },
        [createRestaurantThunk.pending]:
            (state, action) => {
                state.loading = true;
                state.currentRestaurant = null;
            },
        [createRestaurantThunk.fulfilled]:
            (state, action) => {
                state.loading = false
                state.restaurants.push(action.payload);
                state.currentRestaurant = action.payload;
                console.log(state.currentRestaurant);
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
                // console.log(state.currentRestaurant)
            },
        [deleteRestaurantThunk.fulfilled]:
            (state, action) => {
                state.loading = false
                const index = state.restaurants.findIndex(r => r._id === action.payload._id);
                state.restaurants.splice(index, 1);
            },
        [findRestaurantsByNameThunk.fulfilled]:
            (state, action) => {
                state.restaurants = action.payload;
                state.restaurants = state.restaurants.sort((a,b) => a.name.localeCompare(b.name));
            }
    },
});

export default restaurantSlice.reducer;
