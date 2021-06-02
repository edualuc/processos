import { all } from "redux-saga/effects";
import { getUsersWatcher } from "./users";

export default function* rootSaga() {
    yield all([
        getUsersWatcher(),
    ]);
}
