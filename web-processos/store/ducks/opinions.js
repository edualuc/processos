import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
	opinionsInitializer: [],
	getOpinionsRequest: [],
	getOpinionsSuccess: ['opinions'],
	opinionsLoading: [],
	opinionsError: [],
	createOpinionRequest: ['opinion'],
	createOpinionSuccess: [],
	setOpinionRequest: ['opinion'],
	setOpinionSuccess: [],
	deleteOpinionRequest: ['opinionId'],
	deleteOpinionSuccess: [],
	formSetEmpty: ['mode'],
	formSelectOpinion: ['opinion', 'mode'],
	formUpdate: ['opinion'],
	formClean: [],
	cleanOpinions: []
});

/**
 * Handlers
 */
const INITIAL_STATE = {
	opinions: [],
	selectForm: undefined,
};

const getOpinions = (state = INITIAL_STATE, action) => {
	return { ...state, opinions: action.opinions };
}

const createOpinion = (state = INITIAL_STATE, action) => {
	return { ...state };
}

const setOpinion = (state = INITIAL_STATE, action) => {
	return { ...state };
}

const deleteOpinion = (state = INITIAL_STATE, action) => {
	return { ...state };
}

const getOpinionsLoading = (state = INITIAL_STATE, action) => {
	return { ...state, loading: true };
}

const getOpinionsError = (state = INITIAL_STATE, action) => {
	return { ...state, error: action.payload };
}

const formClean = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: INITIAL_STATE.selectForm};
}

const formSetEmpty = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: {
		mode: action.mode,
		opinion: {}
	}};
}

const formSelectOpinion = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: {
		mode: action.mode,
		opinion: state.opinions.find(opinion => opinion.id === action.opinion?.id) || action.opinion
	}};
}

const formUpdate = (state = INITIAL_STATE, action) => {
	return { ...state, selectForm: {
		...state.selectForm,
		opinion: action.opinion
	}};
}

const cleanOpinions = (state = INITIAL_STATE, action) => {
	return INITIAL_STATE;
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
	[Types.GET_OPINIONS_SUCCESS]: getOpinions,
	[Types.OPINIONS_LOADING]: getOpinionsLoading,
	[Types.OPINIONS_ERROR]: getOpinionsError,
	[Types.CREATE_OPINION_SUCCESS]: createOpinion,
	[Types.SET_OPINION_SUCCESS]: setOpinion,
	[Types.DELETE_OPINION_SUCCESS]: deleteOpinion,
	[Types.FORM_SET_EMPTY]: formSetEmpty,
	[Types.FORM_SELECT_OPINION]: formSelectOpinion,
	[Types.FORM_UPDATE]: formUpdate,
	[Types.FORM_CLEAN]: formClean,
	[Types.CLEAN_OPINIONS]: cleanOpinions
});
