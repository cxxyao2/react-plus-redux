import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"; //  getDefaultMiddleWare:Redux trunk
import reducer from "./reducers";
import logger from "../middleware/logger";
import toast from "../middleware/toast";
import api from "../middleware/api";

const store = () => {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "console" }),
      toast,
      api,
    ],
  });
};

export default store;
