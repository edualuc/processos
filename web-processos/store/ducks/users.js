import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
	usersInitializer: [],
	getUsersRequest: [],
	getUsersSuccess: ['users'],
	usersLoading: [],
	usersError: [],
	createUserRequest: ['user'],
	createUserSuccess: [],
	setUserRequest: ['user'],
	setUserSuccess: [],
	deleteUserRequest: ['userId'],
	deleteUserSuccess: [],
	authenticate: ['user'],
	formSetEmpty: ['mode'],
	formSelectUser: ['user', 'mode'],
	formUpdate: ['user'],
	formClean: [],
	cleanUsers: []
});

/**
 * Handlers
 */
const INITIAL_STATE = {
	users: [],
	auth: undefined,
	selectForm: undefined,
};

const getUsers = (state = INITIAL_STATE, action) => {
	return { ...state, users: action.users };
}

const createUser = (state = INITIAL_STATE, action) => {
	return { ...state };
}

const setUser = (state = INITIAL_STATE, action) => {
	return { ...state };
}

const deleteUser = (state = INITIAL_STATE, action) => {
	return { ...state };
}

const getUsersLoading = (state = INITIAL_STATE, action) => {
	return { ...state, loading: true };
}

const getUsersError = (state = INITIAL_STATE, action) => {
	return { ...state, error: action.payload };
}

const authenticate = (state = INITIAL_STATE, action) => {
	return { ...state, auth: state.users.find(user => user.id === action.user?.id) };
}

const formClean = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: INITIAL_STATE.selectForm};
}

const formSetEmpty = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: {
		mode: action.mode,
		user: {}
	}};
}

const formSelectUser = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: {
		mode: action.mode,
		user: state.users.find(user => user.id === action.user?.id)
	}};
}

const formUpdate = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: {
		...state.selectForm,
		user: action.user
	}};
}

const cleanUsers = (state = INITIAL_STATE, action) => {
	return INITIAL_STATE;
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
	[Types.GET_USERS_SUCCESS]: getUsers,
	[Types.USERS_LOADING]: getUsersLoading,
	[Types.USERS_ERROR]: getUsersError,
	[Types.CREATE_USER_SUCCESS]: createUser,
	[Types.SET_USER_SUCCESS]: setUser,
	[Types.DELETE_USER_SUCCESS]: deleteUser,
	[Types.AUTHENTICATE]: authenticate,
	[Types.FORM_SET_EMPTY]: formSetEmpty,
	[Types.FORM_SELECT_USER]: formSelectUser,
	[Types.FORM_UPDATE]: formUpdate,
	[Types.FORM_CLEAN]: formClean,
	[Types.CLEAN_USERS]: cleanUsers
});
