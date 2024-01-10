import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import mycourseReducer from './mycourseSlice';
import starredcourseReducer from './starcourseSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    mycourseList: mycourseReducer,
    starredCourse: starredcourseReducer,
  },
  
});