import {createAsyncThunk} from "@reduxjs/toolkit";
import {login, logout, profile, signup} from "./auth-service";


export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async () => await logout()
)

export const profileThunk = createAsyncThunk(
    'auth/profile',
    async () => await profile()
)

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (user) => await login(user)
)

export const signupThunk = createAsyncThunk(
    'auth/signup',
    async (user) => await signup(user)
)