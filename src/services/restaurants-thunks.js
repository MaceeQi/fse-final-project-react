import {createAsyncThunk} from "@reduxjs/toolkit";
import * as restaurantsService from "./restaurants-service";

export const findAllRestaurantsThunk = createAsyncThunk(
    'restaurants/findAllRestaurants', async () =>
        await restaurantsService.findAllRestaurants()
)

export const findRestaurantByIdThunk = createAsyncThunk(
    'restaurants/findRestaurantById', async (rid) =>
        {
            const res = await restaurantsService.findRestaurantById(rid)
            console.log(res)
        }
)

export const createRestaurantThunk = createAsyncThunk(
    'restaurants/createRestaurant', async (restaurant) =>
        await restaurantsService.createRestaurant(restaurant)
)

export const updateRestaurantThunk = createAsyncThunk(
    'restaurants/updateRestaurant', async (restaurant) =>
        await restaurantsService.updateRestaurant(restaurant)
)

export const deleteRestaurantThunk = createAsyncThunk(
    'restaurants/deleteRestaurant', async (rid) =>
        await restaurantsService.deleteRestaurant(rid)
)

