import { configureStore } from '@reduxjs/toolkit';
import AdminReducer from './reducers/admin';

export const store = configureStore({
    reducer:{
        admin: AdminReducer
    }
})