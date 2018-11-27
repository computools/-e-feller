export const CHANGE_LANG = 'CHANGE_LANG';

export const setLang = data => {
  return {
    type: CHANGE_LANG,
    data
  };
};

export const changelang = (e) => {
  return (dispatch) => {
    dispatch(setLang({
      type: CHANGE_LANG,
      currentLang: e
    }))

  }
};