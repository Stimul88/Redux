import {
  SET_NAME_VALUE,
  SET_COST_VALUE,
  SAVE_ITEM,
  CLEAN_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  SAVE_EDIT,
  FILTER_ITEM, FILTER_ARRAY
} from "../store/actions";

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

export const saveItem = (payload) => {
  return {
    type: SAVE_ITEM,
    payload
  }
}

export const cleanItem = () => {
  return {
    type: CLEAN_ITEM,
  }
}

export const editItem = (payload) => {
  return {
    type: EDIT_ITEM,
    payload
  }
}

export const saveEdit = (payload) => {
  return {
    type: SAVE_EDIT,
    payload
  }
}



export const deleteElem = (payload) => {
  return {
    type: DELETE_ITEM,
    payload
  }
}

export const setFilter = (payload) => {
  return {
    type: FILTER_ITEM,
    payload
  }
}

export const setFilterArray = (payload) => {
  return {
    type: FILTER_ARRAY,
    payload
  }
}
