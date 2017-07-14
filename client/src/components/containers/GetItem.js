// redux dep
import { connect } from "react-redux";
import { openInfo, closeInfo, removeItem } from "../../actions/items";
import projects from "../../models/projects.js";
import sprints from "../../models/sprints.js";

// component dep
import Item from "../Item";

const mapStateToProps = (state, ownProps) => {
    let project = projects.getCurrentProject(state);
    let sprint = sprints.getCurrentSprint(state);
    return {
        item: {
            project: project.project,
            week: sprint.week,
            column: ownProps.column,
            name: ownProps.name,
            openInfo: ownProps.openInfo,
            value: ownProps.value
        }
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dragItem: (event,item) => { 
            event.dataTransfer.setData("text", item.name);
        },
        openInfo: (event,item) => {
            dispatch(openInfo({project: item.project, name: item.name}));
        },
        closeInfo: (event,item) => {
            dispatch(closeInfo({project: item.project, name: item.name}));
        },
        removeItem: (item) => {
            dispatch(removeItem(item))
        },
    };
};

const GetItem = connect(  
    mapStateToProps,
    mapDispatchToProps
)(Item);

export default GetItem;
