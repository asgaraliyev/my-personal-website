const initialState = [];
const addCommentReducer = (state = initialState, action) => {
  if (action.type == "CHANGE_ITEMS") {
    return action.data;
  }
  return state;
};
export default addCommentReducer;
