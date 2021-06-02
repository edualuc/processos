import { takeLatest, put, call, select } from "redux-saga/effects";

import { Creators as UserCreators } from '../ducks/users'

import axios from '../../config/axios'

const getUsersFromApi = async () => {
	const { data } = await axios.get('users');
	console.log('api.axios', data);
	if (data) {
		return data;
	}
	throw Error()
};

const createUsersFromApi = async (user) => {
	console.log('api.createUsersFromApi', user);
	const { data } = await axios.post('users', user);
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
	try {
		yield put(UserCreators.usersLoading());

		const data = yield call(getUsersFromApi);

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
console.log('createUsersAsync', user)
		const data = yield call(createUsersFromApi, user);

		yield all([
			put(UserCreators.getUsersRequest()),
			put(UserCreators.createUserSuccess(data)),
		]);
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

// //Generator function
export function* getUsersWatcher() {
	yield takeLatest("GET_USERS_REQUEST", getUsersAsync);
	yield takeLatest("CREATE_USER_REQUEST", createUsersAsync);
	yield takeLatest("SET_USER_REQUEST", setUsersAsync);
	yield takeLatest("DELETE_USER_REQUEST", deleteUsersAsync);
}
