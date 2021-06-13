import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import store from "./store";
import "antd/dist/antd.css";
import setAuthToken from "./util/setAuthToken";
import { setCurrentUser } from "./actions/authActions";

//importing general components
import ProtectedRoute from "./components/general/ProtectedRoute";

//landing component
import Landing from "./components/landing";

//dashboard component
import Dashboard from "./components/dashboard";
import Home from "./components/dashboard/components/Home";
import AddProduct from "./components/dashboard/components/AddProduct";

//importing user components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App(props) {
  useEffect(() => {
    store.dispatch(setCurrentUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Switch>
            <ProtectedRoute
              exact
              path="/dashboard"
              component={() => <Dashboard {...props} nestedRoute={Home} />}
            />
            <ProtectedRoute
              exact
              path="/dashboard/addProduct"
              component={() => (
                <Dashboard {...props} nestedRoute={AddProduct} />
              )}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
