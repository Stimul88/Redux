import "./head.css"
import newReducer from "../../reducers/newReducer";
import {saveItem, setCostValue, setNameValue} from "../../js/saveItem";
import { connect, useDispatch, useSelector } from "react-redux";

function Head({props}) {

  const submitHandler = (e) => {
    e.preventDefault();
    props.dispatch(saveItem())
  }

  const changeName = (e) => {
    const { value } = e.target;
    // console.log(value)
    props.dispatch(setNameValue(value))
  }

  const changeCost = (e) => {
    const { value } = e.target;
    props.dispatch(setCostValue(value))
  }


  return (
    <form className="head"
          onSubmit={submitHandler}
    >
      <input
        type="text"
        value={props.nameValue}
        className="input-name"
        onChange={changeName}
      ></input>
      <input
        type="text"
        value={props.costValue}
        className="input-cost"
        onChange={changeCost}
      ></input>
      <button type="submit" className="save">Save</button>
      <button type="submit" style={{display: 'none'}} className="cansel">Cansel</button>
    </form>
  )
}

const mapStateToProps = (state, props) => {
  return {
    nameValue: state.name.nameValue,
    costValue: state.cost.costValue
  }

}

const mapDispatchToProps = (dispatch) => {
  return (
    dispatch
  )
}


export default connect(
  mapStateToProps, mapDispatchToProps,
)(
  Head
);