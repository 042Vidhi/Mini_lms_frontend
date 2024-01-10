// starredCourseSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {current } from '@reduxjs/toolkit';

const initialState = {
  starItems: [],
};

const starredCourseSlice = createSlice({
  name: 'starredCourse',
  initialState,
  reducers: {
    addToStarList: (state, action) => {
      const newCourse = action.payload;
      console.log("Add to star course",newCourse)
      const existingCourse = state.starItems.find((course) => course.id === newCourse.id);

      if (!existingCourse) {
        // If the course is not already in the list, add it
        state.starItems.push(newCourse);
        console.log("Star course new list after pushing",state.starItems)
        console.log("Star course new list after pushing",current(state))
      } else {
        // If the course is already in the list, show an alert
        alert('Course is already in your starred courses!');
      }
    },
    removeFromStarList: (state, action) => {
      state.starItems = state.starItems.filter((course) => course.courseId !== action.payload.courseId);
    },
  },
});

export const { addToStarList, removeFromStarList } = starredCourseSlice.actions;
export const selectStarList = (state) => state.starredCourse;
export default starredCourseSlice.reducer;
