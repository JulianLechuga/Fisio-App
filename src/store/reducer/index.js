import { FETCH_LIST, FETCH_QUESTION } from "../actions";

const initialState = {
    randomQuestion : {},
    randomQuestionList: [],
    };

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_QUESTION:                
            return {
                ...state,
                randomQuestion: action.payload,
            };
        case FETCH_LIST:
            return {
                ...state,
                randomQuestionList: [],
            };
        default:
            return state
    };
};