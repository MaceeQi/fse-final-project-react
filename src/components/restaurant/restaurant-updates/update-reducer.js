import {createSlice} from "@reduxjs/toolkit";
// import { deleteUpdate } from "../../../services/restaurant-updates-service";
import updates from "../../data/restaurant-updates.json";

const updateSlice = createSlice({
    name: "updates",
    initialState: updates,
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