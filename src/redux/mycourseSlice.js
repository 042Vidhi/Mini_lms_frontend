// mycourseSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {current } from '@reduxjs/toolkit';

const initialState = {
  courseItems: [],
};

const mycourseSlice = createSlice({
  name: 'mycourseList',
  initialState,
  reducers: {
    addToMyCourseList: (state, action) => {
        
      const newCourse = action.payload;
      const existingCourse = state.courseItems.find((course) => course.id === newCourse.id);
      console.log("Existing course",existingCourse)
      if (existingCourse) {
        // If the course is already in the cart, show an alert
        alert('Course is already in your list!');
        console.log("Course is already in your list!",existingCourse,action.payload, state.courses)
       
      } else {
        state.courseItems.push(newCourse)
      }
      console.log("My course new list after pushing",current(state))
    },
    removeFromMyCourseList: (state, action) => {
      state.courseItems = state.courseItems.filter((course) => course.id !== action.payload.id);
      console.log(current(state))
    },
  },
});



export const { addToMyCourseList, removeFromMyCourseList } = mycourseSlice.actions;
export const selectMyCourse = (state) => state.mycourseList;
export default mycourseSlice.reducer;


