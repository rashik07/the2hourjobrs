//import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/antd.css";
import "./auth/login.css";
import "./jobs/list.css";
import "../container/footer/footer.css";
import "components/jobs/list/SelectedFilter.css";
import "./../styles/header.css";
import "./Landing_page/Landing_page.css";
import "./custom.css";
import "./responsive.css";
import Footer from "container/footer/footer";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
        <Footer/>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
