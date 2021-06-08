import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import store from "./store";

//importing general component
import NavBar from "./components/general/NavBar";

//landing component
import Background from "./components/landing/background";

//importing user components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Background} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
