import React from 'react'
import "./list.css"
import {useDispatch, useSelector} from "react-redux";
import {Item} from "../item/Item";

export const List = () => {
  const dispatch = useDispatch()
  const { list } = useSelector((state) => state)

  return (
    <ul className="list">
      {list.map((item, index) => (
        <Item
          props={item}
          key={index}
        />
      ))}
    </ul>
  )
}

// key={props.id}