// react dep
import React from "react";
import ReactDOM from "react-dom";

// redux dep
import { Provider } from "react-redux";
import { store } from "./util/store.js";
import data from "./util/data.js";

// react router dep
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom"
import Home from "./components/views/Home.js";
import Backlog from "./components/views/Backlog.js";

// css dep
import "./css/index.css";

// dispatch inital state actions
data.updateInitialState(store);

ReactDOM.render(
        <Router>
            <Provider store={store}>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} store={store} />
                    <Route path="/backlog" component={Backlog} />
                </div>
            </Provider>
        </Router>,
document.getElementById("root")
);
