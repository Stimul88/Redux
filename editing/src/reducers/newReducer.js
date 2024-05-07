import {SAVE_ITEM, SET_COST_VALUE, SET_NAME_VALUE} from '../actions'
import {v4 as uuidv4} from 'uuid';


const initialState = {
  id: '',
  nameValue: '',
  costValue: ''
}

const newReducer = (state = initialState, action) => {

  // console.log(action)


  switch (action.type) {
    case SET_NAME_VALUE:
      return {
        ...state,
        nameValue: action.payload,
      }
    case SET_COST_VALUE:
      return {
        ...state,
        costValue: action.payload
      }
    case SAVE_ITEM:
      // return { ...state, ...action.payload , id: uuidv4()};
      return { ...state};
    default:
      return state;
  }

};

export default newReducer;