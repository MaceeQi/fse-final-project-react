import {createSlice} from "@reduxjs/toolkit";
import {
    findAllUpdatesThunk,
    findUpdatesByRestaurantThunk,
    findUpdateByIdThunk, createUpdateThunk, deleteUpdateThunk,
} from "../../../services/restaurant-updates-thunks";

const initialState = {
    update: {},
    updates: [],
    loading: false
};

const updateSlice = createSlice({
    name: "updates",
    initialState,
    extraReducers: {
        [findAllUpdatesThunk.fulfilled]:
            (state, {payload}) => {
              state.loading = false;
              state.updates = payload;
            },
        [findUpdatesByRestaurantThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.updates = payload;
            },
        [findUpdateByIdThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.update = payload;
            },
        [createUpdateThunk.fulfilled]:
            (state, {payload}) => {
                state.updates.push(payload);
            },
        [deleteUpdateThunk.fulfilled]:
            (state, {payload}) => {
                const index = state.updates.findIndex(i => i._id === payload);
                state.updates.splice(index, 1);
          },
      },
    reducers: {
        createUpdate(state, action) {
           state.unshift({
                ...action.payload,
                _id: (new Date()).getTime() + "",
           })
        },

        deleteUpdate(state, action) {
            const index = state
                .findIndex(update =>
                update._id === action.payload);
            state.splice(index, 1);
        }
   }
});

export const {createUpdate, deleteUpdate} = updateSlice.actions;
export default updateSlice.reducer;