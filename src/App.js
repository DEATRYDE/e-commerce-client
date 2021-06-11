import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import store from "./store";
import "antd/dist/antd.css";
import setAuthToken from "./util/setAuthToken";
import { setCurrentUser } from "./actions/authActions";

//landing component
import Landing from "./components/landing";

//importing user components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(setCurrentUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
