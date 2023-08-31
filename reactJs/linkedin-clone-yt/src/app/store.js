import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

function configureStore() {
  return {
    reducer: {
      user: userReducer,
    },
  };
}

export default configureStore;

// this is the same as:
// export default configureStore({
//     reducer: {
//         counter: userReducer,
//     }
// })
