import { configureStore } from "@reduxjs/toolkit";
import adminPanelReducer  from '../adminSlice';
import loaderReducer from '../loaderSlice';
import sidebar_ActiveReducer  from '../sidebarSlice';
import userReducer  from '../userSlice';
import homeReducer  from '../homeSlice';

const store = configureStore({
    reducer: {
        adminPanelReducer,
        homeReducer,
        loaderReducer, 
        sidebar_ActiveReducer,
        userReducer,
    }
})

export default store;