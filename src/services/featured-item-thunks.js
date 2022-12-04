import {createAsyncThunk} from "@reduxjs/toolkit";
import * as featuredItemService from "./featured-item-service";

export const findAllFeaturedItemsThunk = createAsyncThunk(
    'restaurants/findAllFeaturedItems', async () =>
        await featuredItemService.findAllFeaturedItems()
)

export const findFeaturedItemsByRestaurantThunk = createAsyncThunk(
    'restaurants/findFeaturedItemsByRestaurant', async (rid) =>
        await featuredItemService.findFeaturedItemsByRestaurant(rid)
)

export const findFeaturedItemByIdThunk = createAsyncThunk(
    'restaurants/findFeaturedItemById', async (itemId) =>
        await featuredItemService.findFeaturedItemById(itemId)
)

export const createFeaturedItemThunk = createAsyncThunk(
    'restaurants/createFeaturedItem', async (item) =>
        await featuredItemService.createFeaturedItem(item)
)

export const deleteFeaturedItemThunk = createAsyncThunk(
    'restaurants/deleteFeaturedItem', async (itemId) =>
        await featuredItemService.deleteFeaturedItem(itemId)
)