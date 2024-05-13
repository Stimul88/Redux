import "./head.css"
import {cleanItem, deleteElem, editItem, saveEdit, saveItem, setCostValue, setNameValue} from "../../js/saveItem";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {Item} from "../item/Item";
import {v4 as uuidv4} from 'uuid';
import {Filter} from "../Filter/Filter";

export function Head() {
  const dispatch = useDispatch()
  const { id, edit,nameValue, filter, costValue, list, filerArray } = useSelector((state) => state.form)

  const submitHandler = (e) => {
    e.preventDefault();

    if(id === '') {
      const newObj = {
        id: uuidv4(),
        name: nameValue,
        cost: costValue,
      }
      dispatch(saveItem(newObj))
      dispatch(cleanItem())
      return
    }
    const newObj = {
      id: id,
      name: nameValue,
      cost: costValue,
    }
    dispatch(saveEdit(newObj))
    dispatch(cleanItem())
  }

  const cancel = () => {
    dispatch(cleanItem())
  }

  const editing = (idNumber) => {
    dispatch(editItem(idNumber))
  }

  const deleteItem = (idNumber) => {
    dispatch(deleteElem(idNumber))
  }


  const inputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    switch (name) {
      case "nameValue":
        dispatch(setNameValue(value))
        break
      case "costValue":
        dispatch(setCostValue(value))
        break
    }
  }

  return (
    <>
      <form className="head"
            onSubmit={submitHandler}
      >
        <input
          type="text"
          name="nameValue"
          value={nameValue}
          className="input-name"
          onChange={inputChange}
        ></input>
        <input
          type="text"
          name="costValue"
          value={costValue}
          className="input-cost"
          onChange={inputChange}
        ></input>
        <button type="submit" disabled={nameValue === '' || costValue === ''} className="save">Save</button>
        <button type="button"
                style={edit ? {display: 'block'} : {display: 'none'}}
                onClick={cancel}
                className="cansel">Cancel</button>
      </form>
      <hr />
      <Filter/>
      <hr />
      <ul className="list">
        {filter === '' ? list.map((item) => (
          <Item
            props={item}
            key={item.id}
            onEdit={(evt) => {editing(evt);}}
            onDelete={(evt) => {deleteItem(evt);}
          }
          />
        )) : filerArray.map((item) => (
          <Item
            props={item}
            key={item.id}
            onEdit={(evt) => {editing(evt);}}
            onDelete={(evt) => {deleteItem(evt);}
            }
          />
        ))
        }
      </ul>
    </>
  )
}

export default Head