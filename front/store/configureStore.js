import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

const configureStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares)) //연결안한거
      : composeWithDevTools(applyMiddleware(...middlewares)); //dev tool연결한거
  const store = createStore(reducer, enhancer);
  store.dispatch({
    type: "CHANGE_NICKNAME",
    data: "chaecong",
  });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
