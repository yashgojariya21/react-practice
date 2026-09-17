import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

const postSLice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload;
        },
    }
})

export const { setPost } = postSLice.actions;

export default postSLice.reducer;