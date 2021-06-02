import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
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
	setSelected: ['user'],
	selectForm: ['user'],
	updateForm: ['user'],
	cleanUsers: []
});

/**
 * Handlers
 */
const INITIAL_STATE = {
// 	users: [{
// 		id: 11,
// 		nome: 'Eduardo',
// 		role: 'admin',
// 	},{
// 		id: 12,
// 		nome: 'Luana',
// 		role: 'processos',
// 	},
// ],
	users: [],
	selected: undefined,
	selectedForm: undefined,
};

const getUsers = (state = INITIAL_STATE, action) => {
	return { ...state, users: action.users };
}

const setUser = (state = INITIAL_STATE, action) => {
	return { ...state, users: action.users };
}

const createUser = (state = INITIAL_STATE, action) => {
	return { ...state, users: action.users };
}

const deleteUser = (state = INITIAL_STATE, action) => {
	return { ...state, users: action.users };
}

const getUsersLoading = (state = INITIAL_STATE, action) => {
	return { ...state, loading: true };
}

const getUsersError = (state = INITIAL_STATE, action) => {
	return { ...state, error: action.payload };
}

const setSelected = (state = INITIAL_STATE, action) => {
	return { ...state, selected: state.users.find(user => user.id === action.user?.id) };
}

const selectForm = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: state.users.find(user => user.id === action.user?.id) };
}

const updateForm = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: action.user };
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
	[Types.SET_SELECTED]: setSelected,
	[Types.SELECT_FORM]: selectForm,
	[Types.UPDATE_FORM]: updateForm,
	[Types.CLEAN_USERS]: cleanUsers
});
