import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App";
import { fetchUsers } from "./features/users/usersSlice";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//fetching users immediately when app starts
store.dispatch(fetchUsers());

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
