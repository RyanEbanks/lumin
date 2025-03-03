import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activePage: "home", //Default page
};

const pageSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        },
    },
});

export const { setActivePage } = pageSlice.actions;
export default pageSlice.reducer;