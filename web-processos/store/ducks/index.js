import { combineReducers } from "redux";

import users from "./users";
import process from "./process";
import opinions from "./opinions";

export default combineReducers({
    opinions,
    process,
    users,
});
