//REDUX-ACTION & IMMER
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//Actions
const GET_COLOR = "GET_COLOR";

//Action Creators
const getColor = createAction(GET_COLOR, (color) => ({
  color,
}));

//InitialState
const initialState = {
  colorList: [],
};

//Middleware
const getColorDB = () => {
  return (dispatch, getState, { history }) => {
    axios({
      method: "get",
      url: "https://reqres.in/api/unknown",
      headers: {},
    })
      .then((res) => {
        const color = res.data.data;
        dispatch(getColor(color));
      })
      .catch((err) => {
        console.log("getColor 에러", err);
      });
  };
};

//Reducer
export default handleActions(
  {
    [GET_COLOR]: (state, action) =>
      produce(state, (draft) => {
        draft.colorList = action.payload.color;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getColorDB,
};

export { actionCreators };
