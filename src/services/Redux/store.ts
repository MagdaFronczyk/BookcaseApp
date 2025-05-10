import {configureStore} from '@reduxjs/toolkit';
import internetConnectionReducer from './internetConnectionSlice';

export const store = configureStore({
  reducer: {internetConnection: internetConnectionReducer},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
