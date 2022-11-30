import {createAsyncThunk} from "@reduxjs/toolkit";
import * as restaurantsService from "./restaurants-service";

export const findAllRestaurantsThunk = createAsyncThunk(
    'restaurants/findAllRestaurants', async () =>
        await restaurantsService.findAllRestaurants()
)

export const findRestaurantByIdThunk = createAsyncThunk(
    'restaurants/findRestaurantById', async (rid) =>
        await restaurantsService.findRestaurantById(rid)
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

