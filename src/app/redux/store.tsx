import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice';
import pageReducer from './pageSlice';

export const store = configureStore({
    reducer: {
      color: colorReducer,
      activePage: pageReducer,
    }
  });


// TypeScript Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;