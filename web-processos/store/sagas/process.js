import { takeLatest, put, call, all, takeEvery } from "redux-saga/effects";

import { Creators as ProcessCreators } from '../ducks/process'

import axios from '../../config/axios'

const getProcessFromApi = async () => {
	const { data } = await axios.get('process');
	if (data) {
		return data;
	}
	throw Error()
};

const createProcessFromApi = async (process) => {
	const { data } = await axios.post('process', process);
	if (data) {
		return data;
	}
	throw Error()
};

const setProcessFromApi = async (process) => {
	const { data } = await axios.put(`process/${process.id}`, process);
	if (data) {
		return data;
	}
	throw Error()
};

const deleteProcessFromApi = async (processId) => {
	const { data } = await axios.delete(`process/${processId}`);
	if (data) {
		return data;
	}
	throw Error()
};

//generators
function* getProcessAsync({}) {
	try {
		yield put(ProcessCreators.processLoading());

		const data = yield call(getProcessFromApi);

		yield put(ProcessCreators.getProcessSuccess(data));
	} catch (error) {
		if (error) {
			yield put(ProcessCreators.processError(error));
		}
	}
}

function* createProcessAsync({process}) {
	try {
		yield put(ProcessCreators.processLoading());

		const data = yield call(createProcessFromApi, process);

		yield all([
			put(ProcessCreators.createProcessSuccess(data)),
			put(ProcessCreators.formClean()),
			put(ProcessCreators.getProcessRequest()),
		]);
	} catch (error) {
		if (error) {
			yield put(ProcessCreators.processError(error));
		}
	}
}
function* setProcessAsync({process}) {
	try {
		yield put(ProcessCreators.processLoading());

		const data = yield call(setProcessFromApi, process);
		console.log('formClean',data, ProcessCreators.formClean , ProcessCreators.formClean());

		yield all([
			put(ProcessCreators.getProcessRequest()),
			put(ProcessCreators.formClean()),
			put(ProcessCreators.setProcessSuccess(data)),
		]);
	} catch (error) {
		if (error) {
			yield put(ProcessCreators.processError(error));
		}
	}
}
function* deleteProcessAsync({processId}) {
	try {
		yield put(ProcessCreators.processLoading());

		const data = yield call(deleteProcessFromApi, processId);

		yield all([
			put(ProcessCreators.getProcessRequest()),
			put(ProcessCreators.formClean()),
			put(ProcessCreators.deleteProcessSuccess(data)),
		]);
	} catch (error) {
		if (error) {
			yield put(ProcessCreators.processError(error));
		}
	}
}
function* initializerAsync({}) {
	try {
		yield put(ProcessCreators.processLoading());
		const initial = [
			// {
			// 	id: 101,
			// 	name: "Eduardo A Lucas",
			// 	type: 'admin'
			// },
		]

		yield put(ProcessCreators.createProcessRequest(initial[0]));

	} catch (error) {
		if (error) {
			yield put(ProcessCreators.processError(error));
		}
	}
}

// //Generator function
export function* getProcessWatcher() {
	yield takeLatest("PROCESS_INITIALIZER", initializerAsync);
	yield takeEvery("GET_PROCESS_REQUEST", getProcessAsync);
	yield takeEvery("CREATE_PROCESS_REQUEST", createProcessAsync);
	yield takeEvery("SET_PROCESS_REQUEST", setProcessAsync);
	yield takeEvery("DELETE_PROCESS_REQUEST", deleteProcessAsync);
}
