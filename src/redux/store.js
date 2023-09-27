import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";

// export type RootState = {
//   pageTitle: String;
// };

const initialState = {
  pageTitle: "Movie Catalogue"
};

const store = createStore(reducer, initialState);

export default store;
