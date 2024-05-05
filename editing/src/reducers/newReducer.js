import { SET_NAME_VALUE, SET_COST_VALUE} from '../actions'

const initialState = {
  nameValue: '',
  costValue: ''
}

// const action = {
//   type: 'SET_USER_VALUE',
//   payload: ''
// }

const newReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME_VALUE:
      return {
        ...state,
        nameValue: action.payload
      }
    case SET_COST_VALUE:
      return {
        ...state,
        costValue: action.payload
      }
    default:
      return state;
  }

};

export default newReducer;