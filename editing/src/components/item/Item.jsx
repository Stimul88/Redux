import "./item.css"
import React from "react";

export function Item({props}) {
  return (
    <>
      <li >
        <div>{props.name}</div>
        <div>{props.cost}</div>
        <button

        >✎</button>
        <button

        >✘</button>
      </li>
    </>
  )
}