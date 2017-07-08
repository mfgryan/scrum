import axios from "axios";

const items = {};

items.primaryKeys = ["project", "name"];

items.initialState = [];

//PK [items]
items.get = function(){
    return axios.get("/api/items"); 
};

items.post = function(data){
    return axios.post("/api/items",data); 
};

items.remove = function(data){
    return axios.post("/api/items/delete",data); 
};

export default items;

