import { createStore, combineReducers } from "redux";
import addCommentReducer from "./reducers/itemReducer";

const combined = combineReducers({
  items: addCommentReducer,
});
const store = createStore(
  combined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
