import {createAsyncThunk} from "@reduxjs/toolkit";
import * as UpdateService from "./restaurant-updates-service";

export const findAllUpdatesThunk = createAsyncThunk(
    'restaurants/findAllUpdates', async () =>
        await UpdateService.findAllUpdates()
)

export const findUpdatesByRestaurantThunk = createAsyncThunk(
    'restaurants/findUpdatesByRestaurant', async (rid) =>
        await UpdateService.findUpdatesByRestaurant(rid)
)

export const findUpdateByIdThunk = createAsyncThunk(
    'restaurants/findUpdateById', async (updateId) =>
        await UpdateService.findUpdateById(updateId)
)

export const createUpdateThunk = createAsyncThunk(
    'restaurants/createUpdate', async (update) =>
        await UpdateService.createUpdate(update)
)

export const deleteUpdateThunk = createAsyncThunk(
    'restaurants/deleteUpdate', async (updateId) =>
        await UpdateService.deleteUpdate(updateId)
)