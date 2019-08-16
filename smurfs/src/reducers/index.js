import { FETCH_SMURF_DATA_START, FETCH_SMURF_DATA_SUCCESS, FETCH_SMURF_DATA_FAILURE } from './../actions'

const intialState = {
  smurfArray: [],
  error: '',
  loading: false
}

const reducer = (state = intialState, action) => {
  console.log('reducer action: ', action)
  switch(action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        error: '',
        loading: true
      }
    case FETCH_SMURF_DATA_SUCCESS:
      return {
        ...state,
        smurfArray: action.payload,
        error: '',
        loading: false
      }
    case FETCH_SMURF_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default reducer