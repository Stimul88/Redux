import {EDIT_ITEM, DELETE_ITEM} from '../actions'

const initialState = [
  {
    id: 1,
    name: "Замена стекла",
    cost: "21000"
  },
  {
    id: 2,
    name: "Замена дисплея",
    cost: "25000"
  },
  {
    id: 3,
    name: "Замена аккумулятора",
    cost: "4000"
  },
  {
    id: 4,
    name: "Замена микрофона",
    cost: "2500"
  },
]


const listReducer = (state = initialState, action) => {


  switch (action.type) {
    case EDIT_ITEM:
      return {
        ...state,
      }
    case DELETE_ITEM:
      return {
        ...state,
      }
    default:
      return state;
  }

};

export default listReducer;