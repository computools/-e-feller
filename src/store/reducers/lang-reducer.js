import { LangActions } from '../actions'

const initialState = {
  allLang: null,
  currentLang: null
};

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case LangActions.CHANGE_LANG:
      return Object.assign({}, state, {
        ...action.data
      });

    default:
      return state;
  }
};