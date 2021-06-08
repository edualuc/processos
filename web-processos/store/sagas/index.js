import { all } from "redux-saga/effects";
import { getUsersWatcher } from "./users";
import { getProcessWatcher } from "./process";
import { getOpinionsWatcher } from "./opinions";

export default function* rootSaga() {
    yield all([
        getUsersWatcher(),
        getProcessWatcher(),
        getOpinionsWatcher(),
    ]);
}
