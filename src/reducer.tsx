const reducer = (state, action) => {
  throw new Error(`No matching action.type: ${action.type}`);
};

export default reducer;
