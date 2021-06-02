import { takeLatest, put, call, select, takeEvery } from "redux-saga/effects";

import { Creators as UserCreators } from '../ducks/users'

import axios from '../../config/axios'

const getUsersFromApi = async () => {
	const { data } = await axios.get('users');
	console.log('api.getUsersFromApi', data);
	if (data) {
		return data;
	}
	throw Error()
};

const createUsersFromApi = async (user) => {
	const { data } = await axios.post('users', user);
	console.log('api.createUsersFromApi', data);
	if (data) {
		return data;
	}
	throw Error()
};

const setUsersFromApi = async (user) => {
	const { data } = await axios.put(`users/${user.id}`, user);
	console.log('api.setUsersFromApi', data);
	if (data) {
		return data;
	}
	throw Error()
};

const deleteUsersFromApi = async (userId) => {
	const { data } = await axios.delete(`users/${userId}`);
	console.log('api.deleteUsersFromApi', data);
	if (data) {
		return data;
	}
	throw Error()
};

//generators
function* getUsersAsync({}) {
	console.log('getUsersAsync1')
	try {
		yield put(UserCreators.usersLoading());

		const data = yield call(getUsersFromApi);
		console.log('getUsersAsync2', data)

		yield put(UserCreators.getUsersSuccess(data));
	} catch (error) {
		if (error) {
			yield put(UserCreators.usersError(error));
		}
	}
}

function* createUsersAsync({user}) {
	try {
		yield put(UserCreators.usersLoading());

		const data = yield call(createUsersFromApi, user);
		console.log('createUsersAsync', data)
		yield put(UserCreators.createUserSuccess(data));
		console.log('createUsersAsync2', data)

		yield put(UserCreators.getUsersRequest());
	} catch (error) {
		if (error) {
			yield put(UserCreators.usersError(error));
		}
	}
}
function* setUsersAsync({user}) {
	try {
		yield put(UserCreators.usersLoading());

		const data = yield call(setUsersFromApi, user);

		yield all([
			put(UserCreators.getUsersRequest()),
			put(UserCreators.setUserSuccess(data)),
		]);
	} catch (error) {
		if (error) {
			yield put(UserCreators.usersError(error));
		}
	}
}
function* deleteUsersAsync({userId}) {
	try {
		yield put(UserCreators.usersLoading());

		const data = yield call(deleteUsersFromApi, userId);

		yield all([
			put(UserCreators.getUsersRequest()),
			put(UserCreators.deleteUsersSuccess(data)),
		]);
	} catch (error) {
		if (error) {
			yield put(UserCreators.usersError(error));
		}
	}
}
function* initializerAsync({}) {
	console.log('saga.initializerAsync');
	try {
		yield put(UserCreators.usersLoading());
		const initial = [
			{
				id: 101,
				name: "edu1",
				type: 'admin'
			}
		]

		yield put(UserCreators.createUserRequest(initial[0]));

	} catch (error) {
		if (error) {
			yield put(UserCreators.usersError(error));
		}
	}
}

// //Generator function
export function* getUsersWatcher() {
	yield takeLatest("USERS_INITIALIZER", initializerAsync);
	yield takeEvery("GET_USERS_REQUEST", getUsersAsync);
	yield takeEvery("CREATE_USER_REQUEST", createUsersAsync);
	yield takeEvery("SET_USER_REQUEST", setUsersAsync);
	yield takeEvery("DELETE_USER_REQUEST", deleteUsersAsync);
}
