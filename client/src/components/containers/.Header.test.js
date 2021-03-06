import React from "react";
import Header from "./Header";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import store from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("Header renders correctly", () => {
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <Header />
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
