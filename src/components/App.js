import React from "react";
import HomePage from "./HomePage";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        {" "}
        {/*Switch is order dependent, paths are evaluated linearly.*/}
        <Route path="/" exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
