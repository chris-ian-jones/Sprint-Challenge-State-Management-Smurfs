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

export const POST_SMURF_DATA_SUCCESS = 'POST_SMURF_DATA_SUCCESS'

export const addSmurfData = (smurfData) => dispatch => {
  dispatch({ type: FETCH_SMURF_DATA_START })
  axios.post(`http://localhost:3333/smurfs`, smurfData)
    .then(result => dispatch({ type: POST_SMURF_DATA_SUCCESS, payload: smurfData }))
    .catch(error => dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: 'API error'}))
}

export const DELETE_SMURF_DATA_SUCCESS = 'DELETE_SMURF_DATA_SUCCESS'

export const deleteSmurfData = (smurfId) => dispatch => {
  dispatch({ type: FETCH_SMURF_DATA_START })
  axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(result => {
      console.log('DELETE_SMURF_DATA_SUCCESS result : ', result)
      dispatch({ type: DELETE_SMURF_DATA_SUCCESS, payload: result.data })
    })
    .catch(error => dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: 'API error'}))
}