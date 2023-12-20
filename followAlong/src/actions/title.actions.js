export const SET_TITLE = "SET_TITLE";
export const SET_EDITING = "SET_EDITING";
export const SET_NEWTEXTTITLE = "SET_NEWTEXTTITLE";

export default {
  setTitle: (title) => {
    return { type: SET_TITLE, payload: title };
  },
  setEditing: (isEditing) => {
    return { type: SET_EDITING, payload: isEditing };
  },
  setNewTextTitle: (newTextTitle) => {
    return { type: SET_NEWTEXTTITLE, payload: newTextTitle };
  },
};
