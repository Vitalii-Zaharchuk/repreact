import { combineReducers, createStore } from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
let reducer = combineReducers({
    profilePage : profileReducer,
    messagePage : messageReducer
})
let  store = createStore(reducer);
export default store;
