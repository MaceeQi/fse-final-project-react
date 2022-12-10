import {createAsyncThunk} from "@reduxjs/toolkit";
import * as usersService from "./users-service";

export const findAllUsersThunk = createAsyncThunk(
    'users/findAllUsers', async () =>
        await usersService.findAllUsers()
)

export const findUserByIdThunk = createAsyncThunk(
    'users/findUserById', async (uid) => {
        // console.log(uid);
        const user = await usersService.findUserById(uid);
        // console.log(user);
        return user;
    }
)

export const createUserThunk = createAsyncThunk(
    'users/createUser', async (user) => {
        return await usersService.createUser(user);
    }
)

export const updateUserThunk = createAsyncThunk(
    'users/updateUser', async (user) =>
        await usersService.updateUser(user)
)

export const deleteUserThunk = createUserThunk(
    'users/deleteUser', async (uid) =>
        await usersService.deleteUser(uid)
)