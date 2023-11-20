import { createSlice } from "@reduxjs/toolkit";
import { adminDetails, adminLogin, editAdminDetails } from "../utils/thunks";

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        id: '',
        loading: true,
        adminData: null
    },
    extraReducers:(builder) => {
        builder
        .addCase(adminLogin.fulfilled,(state,action) => {
            state.id = action.payload.data.id;
        })
        .addCase(adminDetails.fulfilled,(state, action) => {
            state.loading = false;
            state.adminData = action.payload.data;
        })
        .addCase(editAdminDetails.fulfilled,(state,action) => {
            console.log(action.payload)
            state.adminData.amount = action.payload.data.amount
        })
    }
})

export default adminSlice.reducer;