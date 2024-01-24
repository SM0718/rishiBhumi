import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
};

// Load authentication state from localStorage if available
const savedAuthState = JSON.parse(localStorage.getItem("authState"));
const authSlice = createSlice({
    name: "auth",
    initialState: savedAuthState || initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            // Save authentication state to localStorage
            localStorage.setItem("authState", JSON.stringify(state));
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            // Remove authentication state from localStorage
            localStorage.removeItem("authState");
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
