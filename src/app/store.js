import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice';
import sliderSlice from '../features/slider/sliderSlice';
import usersTeam from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    counters: counterSlice,
    mainSlider: sliderSlice,
    usersTeam: usersTeam
  }
})