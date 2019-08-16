import axios from 'axios'

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START'
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS'
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE'

export const getSmurfData = () => dispatch => {
  dispatch({ type: FETCH_SMURF_DATA_START })
  axios.get(`http://localhost:3333/smurfs`)
    .then(result => dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: result.data }))
    .catch(error => dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: 'API error'}))
}
