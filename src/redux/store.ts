import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { baseApi } from "./api/baseApi";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
