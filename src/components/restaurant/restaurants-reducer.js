import {createSlice} from "@reduxjs/toolkit";
// import restaurants from "../data/restaurants.json";
import {
    createRestaurantThunk, deleteRestaurantThunk,
    findAllRestaurantsThunk,
    findRestaurantByIdThunk, updateRestaurantThunk
} from "../../services/restaurants-thunks";

const initialState = {
    restaurants: [],
    currentRestaurant: null,
    publicPage: null,
    loading: false
}

const restaurantSlice = createSlice({
    name: "restaurants",
    // initialState: restaurants[0],
    initialState,
    extraReducers: {
        [findAllRestaurantsThunk.pending]:
            (state) => {
                state.loading = true;
                state.restaurants = [];
                state.currentRestaurant = null;
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
                console.log(state.publicPage)
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
            },
        [deleteRestaurantThunk.fulfilled]:
            (state, action) => {
                state.loading = false
                const index = state.restaurants.findIndex(r => r._id === action.payload._id);
                state.restaurants.splice(index, 1);
            }
    }
    // reducers: {
    //     updateRestaurant(state, action) {
    //         return {...action.payload};
    //     }
    // }
});

// export const {updateRestaurant} = restaurantSlice.actions;
export default restaurantSlice.reducer;