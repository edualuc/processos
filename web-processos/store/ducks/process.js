import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
	processInitializer: [],
	getProcessRequest: [],
	getProcessSuccess: ['process'],
	processLoading: [],
	processError: [],
	createProcessRequest: ['process'],
	createProcessSuccess: [],
	setProcessRequest: ['process'],
	setProcessSuccess: [],
	deleteProcessRequest: ['processId'],
	deleteProcessSuccess: [],
	formSetEmpty: ['mode'],
	formSelectProcess: ['process', 'mode'],
	formUpdate: ['process'],
	formClean: [],
	cleanProcess: []
});

/**
 * Handlers
 */
const INITIAL_STATE = {
	process: [],
	selectForm: undefined,
};

const getProcess = (state = INITIAL_STATE, action) => {
	return { ...state, process: action.process };
}

const createProcess = (state = INITIAL_STATE, action) => {
	return { ...state };
}

const setProcess = (state = INITIAL_STATE, action) => {
	return { ...state };
}

const deleteProcess = (state = INITIAL_STATE, action) => {
	return { ...state };
}

const getProcessLoading = (state = INITIAL_STATE, action) => {
	return { ...state, loading: true };
}

const getProcessError = (state = INITIAL_STATE, action) => {
	return { ...state, error: action.payload };
}

const formClean = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: INITIAL_STATE.selectForm};
}

const formSetEmpty = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: {
		mode: action.mode,
		process: {}
	}};
}

const formSelectProcess = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: {
		mode: action.mode,
		process: state.process.find(proc => proc.id === action.process?.id)
	}};
}

const formUpdate = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: {
		...state.selectForm,
		process: action.process
	}};
}

const cleanProcess = (state = INITIAL_STATE, action) => {
	return INITIAL_STATE;
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
	[Types.GET_PROCESS_SUCCESS]: getProcess,
	[Types.PROCESS_LOADING]: getProcessLoading,
	[Types.PROCESS_ERROR]: getProcessError,
	[Types.CREATE_PROCESS_SUCCESS]: createProcess,
	[Types.SET_PROCESS_SUCCESS]: setProcess,
	[Types.DELETE_PROCESS_SUCCESS]: deleteProcess,
	[Types.FORM_SET_EMPTY]: formSetEmpty,
	[Types.FORM_SELECT_PROCESS]: formSelectProcess,
	[Types.FORM_UPDATE]: formUpdate,
	[Types.FORM_CLEAN]: formClean,
	[Types.CLEAN_PROCESS]: cleanProcess
});
