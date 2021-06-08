import { takeLatest, put, call, all, takeEvery, select } from "redux-saga/effects";

import { Creators as OpinionCreators } from '../ducks/opinions'

import axios from '../../config/axios'

const getOpinionsFromApi = async () => {
	const { data } = await axios.get('opinions');
	if (data) {
		return data;
	}
	throw Error()
};

const createOpinionsFromApi = async (opinion) => {
	const { data } = await axios.post('opinions', opinion);
	if (data) {
		return data;
	}
	throw Error()
};

const setOpinionsFromApi = async (opinion) => {
	const { data } = await axios.put(`opinions/${opinion.id}`, opinion);
	if (data) {
		return data;
	}
	throw Error()
};

const deleteOpinionsFromApi = async (opinionId) => {
	const { data } = await axios.delete(`opinions/${opinionId}`);
	if (data) {
		return data;
	}
	throw Error()
};

//generators
function* getOpinionsAsync({}) {
	try {
		yield put(OpinionCreators.opinionsLoading());

		const data = yield call(getOpinionsFromApi);

		yield put(OpinionCreators.getOpinionsSuccess(data));
	} catch (error) {
		if (error) {
			yield put(OpinionCreators.opinionsError(error));
		}
	}
}

function* createOpinionsAsync({opinion}) {
	try {
		yield put(OpinionCreators.opinionsLoading());

		const data = yield call(createOpinionsFromApi, opinion);

		yield all([
			put(OpinionCreators.createOpinionSuccess(data)),
			put(OpinionCreators.formClean()),
			put(OpinionCreators.getOpinionsRequest()),
		]);
	} catch (error) {
		if (error) {
			yield put(OpinionCreators.opinionsError(error));
		}
	}
}
function* setOpinionsAsync({opinion}) {
	try {
		yield put(OpinionCreators.opinionsLoading());

		const data = yield call(setOpinionsFromApi, opinion);
		console.log('formClean',data, OpinionCreators.formClean , OpinionCreators.formClean());

		yield all([
			put(OpinionCreators.getOpinionsRequest()),
			put(OpinionCreators.formClean()),
			put(OpinionCreators.setOpinionSuccess(data)),
		]);
	} catch (error) {
		if (error) {
			yield put(OpinionCreators.opinionsError(error));
		}
	}
}
function* deleteOpinionsAsync({opinionId}) {
	try {
		yield put(OpinionCreators.opinionsLoading());

		const data = yield call(deleteOpinionsFromApi, opinionId);

		yield all([
			put(OpinionCreators.getOpinionsRequest()),
			put(OpinionCreators.formClean()),
			put(OpinionCreators.deleteOpinionsSuccess(data)),
		]);
	} catch (error) {
		if (error) {
			yield put(OpinionCreators.opinionsError(error));
		}
	}
}
function* initializerAsync({}) {
	try {
		yield put(OpinionCreators.opinionsLoading());
		const initial = [
		]

		yield put(OpinionCreators.createOpinionRequest(initial[0]));

	} catch (error) {
		if (error) {
			yield put(OpinionCreators.opinionsError(error));
		}
	}
}
function* formMakeOpinionAsync({objOpinion, mode}) {
	try {
		const { auth } = yield select( state => state.users);
		const process = yield select(state => state.process.process);
		const opinions = yield select(state => state.opinions.opinions);
		const opinion = opinions.find(opinion => opinion.id === objOpinion?.id) || ({
			...objOpinion,
			process: process.find(proc => proc.id === objOpinion.process)
		})
		yield put(OpinionCreators.formSelectOpinion(opinion, mode));

	} catch (error) {
		if (error) {
			console.log('formMakeOpinionAsync error', error);
			yield put(OpinionCreators.opinionsError(error));
		}
	}
}

// //Generator function
export function* getOpinionsWatcher() {
	yield takeLatest("OPINIONS_INITIALIZER", initializerAsync);
	yield takeEvery("GET_OPINIONS_REQUEST", getOpinionsAsync);
	yield takeEvery("CREATE_OPINION_REQUEST", createOpinionsAsync);
	yield takeEvery("SET_OPINION_REQUEST", setOpinionsAsync);
	yield takeEvery("DELETE_OPINION_REQUEST", deleteOpinionsAsync);
	yield takeEvery("FORM_MAKE_OPINION", formMakeOpinionAsync);
}

