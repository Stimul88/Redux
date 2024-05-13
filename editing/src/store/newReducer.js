import {SAVE_ITEM, SET_COST_VALUE, SET_NAME_VALUE, CLEAN_ITEM, EDIT_ITEM, SAVE_EDIT, DELETE_ITEM} from './actions'

const listArray = [
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
  }
]

const initialState = {
  id: '',
  nameValue: '',
  costValue: '',
  edit: false,
  list: listArray
}

const newReducer = (state = initialState, action) => {

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

      const newArray = [...state.list, action.payload]

      return {
        ...state,
          list: newArray
      };
    case CLEAN_ITEM:
      return {
        ...state,
        id: '',
        nameValue: '',
        costValue: '',
        edit: false,
      };
    case EDIT_ITEM:
      const findItem = state.list.find(item =>
        item.id === action.payload
      )

      return {
        ...state,
        id: findItem.id,
        nameValue: findItem.name,
        costValue: findItem.cost,
        edit: true,
      };
    case SAVE_EDIT:
      const editElement = {
        id: state.id,
        name: state.nameValue,
        cost: state.costValue,
      }

      const mapArray = state.list.map((item) =>
        item.id === action.payload.id ? editElement : item
    )

      return {
        ...state,
        list: mapArray
      };
    case DELETE_ITEM:


      const filterArray = state.list.filter((item) =>
        item.id !== action.payload
      )

      return {
        ...state,
        list: filterArray
      };
    default:
      return state;
  }
};

export default newReducer;