import {configureStore} from '@reduxjs/toolkit';
import internetConnectionReducer from './internetConnectionSlice';

const createEnhancers = getDefaultEnhancers => {
  if (__DEV__) {
    const reactotron = require('../../../ReactotronConfig').default;
    return getDefaultEnhancers().concat(reactotron.createEnhancer());
  } else {
    return getDefaultEnhancers();
  }
};

export const store = configureStore({
  reducer: {internetConnection: internetConnectionReducer},
  enhancers: createEnhancers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
