import {createSlice} from "@reduxjs/toolkit";
// import { deleteUpdate } from "../../../services/restaurant-updates-service";
import features from "../../data/featured-items.json";

const featuredSlice = createSlice({
    name: "features",
    initialState: features,
    reducers: {
        createFeature(state, action) {
           state.push({
                ...action.payload,
                _id: (new Date()).getTime() + "",
           })
        },

        deleteFeature(state, action) {
            const index = state.findIndex(feature =>feature._id === action.payload);
            state.splice(index, 1);
        }
   }
});

export const {createFeature, deleteFeature} = featuredSlice.actions;
export default featuredSlice.reducer;