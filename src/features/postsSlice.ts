import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
    createdAt: Date,
    editedAt: Date,
    location: any,
    title: string,
    author: {}
}

interface PostsState {
    posts: []
}

// const postsSlice = createSlice(

// )