import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    documentId: null
};

const savedAuthState = JSON.parse(localStorage.getItem("authState"));
const authSlice = createSlice({
    name: "auth",
    initialState: savedAuthState || initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.documentId = action.payload;
            localStorage.setItem("authState", JSON.stringify(state));
            console.log(JSON.parse(localStorage.getItem("authState")));
        },
        logout: (state) => {
            state.status = false;
            state.documentId = null;
            localStorage.removeItem("authState");
        },
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
