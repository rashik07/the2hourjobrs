import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store, persistor } from "./../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./auth/login.css";
import "./../styles/header.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
