import React from 'react'
import "./list.css"

export const List = () => {
  const data = [
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
    },
  ]

  return (
    <ul>
      {data.map((item, index) => (
        <li key={item.id}>
          <div>{item.name}</div>
          <div>{item.cost}</div>
          <button

          >✎</button>
          <button

          >✘</button>
          </li>
      ))}
    </ul>
  )
}
