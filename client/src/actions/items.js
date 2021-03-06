const model = "items";
const INIT_ITEMS = "INIT_ITEMS";
function init(items) {
    return {
        type: INIT_ITEMS,
        model: model,
        skipValidation: true,
        items: items
    };
}
const OPEN_INFO = "OPEN_INFO";
function openInfo(item) {
    return {
        type: OPEN_INFO,
        model: model,
        project: item.project,
        name: item.name
    };
}
const CLOSE_INFO = "CLOSE_INFO";
function closeInfo(item) {
    return {
        type: CLOSE_INFO,
        model: model,
        project: item.project,
        name: item.name
    };
}
const ADD_ITEM = "ADD_ITEM";
function addItem(item) {
    return {
        type: ADD_ITEM,
        insert: true,
        model: model,
        project: item.project,
        week: item.week || "",
        column: item.column || "",
        name: item.name,
        addItem: false
    };
}
const REMOVE_ITEM = "REMOVE_ITEM";
function removeItem(item) {
    return {
        type: REMOVE_ITEM,
        model: model,
        project: item.project,
        name: item.name
    };
}
const MOVE_ITEM = "MOVE_ITEM";
function moveItem(item) {
    // locates an item by name and project
    // all other vars are what the matched item will be updated with
    return {
        type: MOVE_ITEM,
        model: model,
        project: item.project,
        name: item.name,
        week: item.week || "",
        column: item.column || ""
    };
}
const CHANGE_ITEM_VALUE = "CHANGE_ITEM_VALUE";
function changeItemValue(item) {
    // change value shown in modal input field for given item
    return {
        type: CHANGE_ITEM_VALUE,
        model: model,
        project: item.project,
        name: item.name,
        value: item.value
    };
}

const TOGGLE_INFO_ADD = "TOGGLE_INFO_ADD";
function toggleInfoAdd(item) {
    return {
        type: TOGGLE_INFO_ADD,
        model: model,
        project: item.project,
        name: item.name
    };
}

export {
    OPEN_INFO,
    CLOSE_INFO,
    ADD_ITEM,
    REMOVE_ITEM,
    MOVE_ITEM,
    CHANGE_ITEM_VALUE,
    INIT_ITEMS,
    TOGGLE_INFO_ADD,
    init,
    openInfo,
    closeInfo,
    addItem,
    removeItem,
    moveItem,
    changeItemValue,
    toggleInfoAdd
};
