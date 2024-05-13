import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFilter, setFilterArray} from "../../js/saveItem";

export function Filter() {
  const { list, filter} = useSelector((state) => state.form)
  const dispatch = useDispatch()

  const inputChange = (e) => {
    e.preventDefault()
    const { value } = e.target;
    dispatch(setFilter(value))
    dispatch(setFilterArray(list))
  }
  return (
    <form className="filter">
      <label htmlFor="filter">Фильтр</label>
      <input
        type="text"
        name="filter"
        value={filter}
        className="filter-name"
        onChange={inputChange}
      ></input>

    </form>
  )
}