import {SET_NAME_VALUE, SET_COST_VALUE, SAVE_ITEM, EDIT_ITEM, DELETE_ITEM} from "../actions";

export const saveItem = () => {
  return {
    type: SAVE_ITEM,
  }
}

export const setNameValue = (payload) => {
  return {
    type: SET_NAME_VALUE,
    payload
  }
}

export const setCostValue = (payload) => {
  return {
    type: SET_COST_VALUE,
    payload
  }
}

export const editItem = () => {
  return {
    type: EDIT_ITEM
  }
}

export const deleteItem = () => {
  return {
    type: DELETE_ITEM
  }
}