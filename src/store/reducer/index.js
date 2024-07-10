import { FETCH_LIST, FETCH_QUESTION ,GENERATE_EXAM, RESET_EXAM} from "../actions";

const initialState = {
    randomQuestion : {},
    randomQuestionList: [],
    examModeQuestions: [],
    };

export default function reducer(state=initialState, action){
    switch (action.type) {
      case FETCH_QUESTION:
        return {
          ...state,
          randomQuestion: action.payload,
        };
      case FETCH_LIST:
        return {
          ...state,
          randomQuestionList: action.payload,
        };
      case GENERATE_EXAM:
        return {
          ...state,
          examModeQuestions: action.payload,
        };
      case RESET_EXAM:
        return {
          ...state,
          examModeQuestions: [],
        };
      default:
        return state;
    };
};