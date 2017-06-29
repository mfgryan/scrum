// react dep
import React from "react";
import ReactDOM from "react-dom";

// redux dep
import { createStore } from "redux";
import { Provider } from "react-redux";
import config from "./util/store.js";
import henboardApp from "./reducers/index.js";

// react router dep
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom"
import Home from "./views/home/Home.js";
import Backlog from "./views/backlog/Backlog.js";

// css dep
import "./index.css";

// create initial store 
let store = createStore(henboardApp, config.getState());
config.writeAll(store,true,true);

// note add spinning icon while state update action pending

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
