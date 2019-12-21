import axios from 'axios';

export const CALL_SUCCESS = "CALL_SUCCESS";
export const CALL_FAILURE = "CALL_FAILURE";

export const getBeers = data => dispatch => {
  axios
    .get(`https://sandbox-api.brewerydb.com/v2/beers/?key=25f788b324dfde379d07a98b02febfb0`)
    .then(res => {
      dispatch({type: CALL_SUCCESS, payload: res.data.data});
    })
    .catch(err => {
      dispatch({type: CALL_FAILURE, payload: err.response})
    });
}