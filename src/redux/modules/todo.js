//REDUX-ACTION & IMMER
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//Actions
const ADD_LIST = "ADD_LIST";
const DELETE_LIST = "DELETE_LIST";
const EDIT_LIST = "EDIT_LIST";
// const GET_USER = "GET_USER";

//Action Creators
const addList = createAction(ADD_LIST, (list) => ({
  list,
}));
const deleteList = createAction(DELETE_LIST, (_delete) => ({
  _delete,
}));
const editList = createAction(EDIT_LIST, (edit) => ({
  edit,
}));

//InitialState
const initialState = {
  list: [],
};

//Reducer
export default handleActions(
  {
    [ADD_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.list);
      }),
    [DELETE_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter((p) => p !== action.payload._delete);
      }),
    [EDIT_LIST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.index === action.payload.edit);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.edit };
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  addList,
  deleteList,
  editList,
};

export { actionCreators };
