// react dep
import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

// style dep
import "../css/Selector.css";

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = { showAll: false };
    }
    render() {
        let range = this.state.showAll ? this.props.items.length : 3;
        return (
                <DropdownButton
                    noCaret
                    onSelect={event => this.props.itemClicked(event)}
                    id="Selector"
                    title={this.props.title}>
                    {this.props.items
                        .slice()
                        .reverse()
                        .slice(0, range)
                        .map((item, index) =>
                            <MenuItem
                                key={item[this.props.itemKey]}
                                eventKey={item[this.props.itemKey]}>
                                {this.props.items.length - index}&nbsp;&nbsp;<small>{item[this.props.itemKey]}</small>
                            </MenuItem>
                        )}
                    {!this.state.showAll &&
                        <li>
                            <a
                                href="#"
                                onClick={() =>
                                    this.setState({ showAll: true })}>
                                <b>load all</b>
                            </a>
                        </li>}
                    <MenuItem divider />
                    {this.props.addItemTitle && 
                        <MenuItem eventKey={"add"}>
                            {this.props.addItemTitle}
                        </MenuItem>
                    }
                </DropdownButton>
        );
    }
}

export default Selector;
