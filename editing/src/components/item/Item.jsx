import "./item.css"
import React from "react";

export function Item({props, onEdit, onDelete}) {


  return (
    <>
      <li >
        <div>{props.name}</div>
        <div>{props.cost}</div>
        <button
          onClick={() => onEdit(props.id)}
        >✎</button>
        <button
          onClick={() => onDelete(props.id)}
        >✘</button>
      </li>
    </>
  )
}