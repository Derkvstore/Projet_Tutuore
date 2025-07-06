import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState: {
        userInfo: null,
        user_SidebarActive :false,
    },
    reducers: {
        setUserInfo : (state, action) => {state.userInfo = action.payload},
        setUser_SidebarActive : (state, action) => {state.user_SidebarActive = action.payload },
    }
});

export const { setUserInfo, setUser_SidebarActive } = userSlice.actions;
export default userSlice.reducer;