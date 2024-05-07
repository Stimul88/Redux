import "./head.css"
import {saveItem, setCostValue, setNameValue} from "../../js/saveItem";
import { useDispatch, useSelector } from "react-redux";

export function Head() {
  const dispatch = useDispatch()
  const { form, list } = useSelector((state) => state)
  // const { ...state } = useSelector((state) => state)
  const { nameValue, costValue } = form

  // console.log(list)


  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(saveItem())
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
      <button type="submit" style={{display: 'none'}} className="cansel">Cansel</button>
    </form>
  )
}

export default Head