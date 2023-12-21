import {
  SET_TITLE,
  SET_EDITING,
  SET_NEWTEXTTITLE,
} from "../actions/title.actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_EDITING:
      return { ...state, editing: action.payload };
    case SET_NEWTEXTTITLE:
      return { ...state, newTitleText: action.payload };
    default:
      return state;
  }
};

export default reducer;
