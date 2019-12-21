const initialState = {beersList: []}

export const beersReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CALL_SUCCESS":
      const beersWithLabels = action.payload.filter(beer => Object.keys(beer).includes("labels"))
      return {...state, beersList: beersWithLabels};
    case "CALL_FAILURE":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}



  // switch (action.type) {
  //   default: 
  //     return state;
  // }