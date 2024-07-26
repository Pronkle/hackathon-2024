import './style.css';
import { Menudata } from './menudata';
import React from 'react'

function Menu() {
  return (
    <div className = 'Menu'>
      <ul className="Menulist">
        {Menudata.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Menu