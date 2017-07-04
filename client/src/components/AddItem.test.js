import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from './AddItem';

// redux dep
import { store } from '../util/store.js';
import { Provider } from "react-redux";

test('renders without crashing', () => {
    const div = document.createElement('div');
    const item = {
        item: {
            project: "henboard", 
            column: "todo", 
            week: "5/27/17", 
            name: "blah", 
        },  
        lane: {
            project: "henboard",
            column: "todo",
            addItem: true,
            value: "blah",
        },
        toggleAddItem: () => {},
        changeValue: () => {},
        addItem: () => {}
    };
    ReactDOM.render(AddItem(item), div);
});
