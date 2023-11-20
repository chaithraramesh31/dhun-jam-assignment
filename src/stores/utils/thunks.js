import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const adminLogin = createAsyncThunk(
    'admin/adminLogin',
    async(userDetails) => {
        try{
            const response = await axios.post('https://stg.dhunjam.in/account/admin/login', userDetails)
            return response.data;
        }catch(err) {
            console.log(err);
        }
    }
)

export const adminDetails = createAsyncThunk(
    'admin/adminDetails',
    async(id) => {
        try {
            const response = await axios.get(`https://stg.dhunjam.in/account/admin/${id}`)
            return response.data;
        }catch(err) {
            console.log(err);
        }
    }
)

export const editAdminDetails = createAsyncThunk(
    'admin/editAdminDetails',
    async({id,newDetails}) => {
        try {
            console.log("hi")
            const response = await axios.put(`https://stg.dhunjam.in/account/admin/${id}`, newDetails)
            console.log(response.data);
            return response.data;
        }catch(err) {
            console.log(err.response.data);
        }
    }
)