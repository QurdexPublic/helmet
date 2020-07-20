import React from 'react'
import './Breadcrumbs.css'
import {NavLink} from "react-router-dom";
const Breadcrumbs = (props) => {
  return (
   <div>
      <ul className="breadcrumbs">
        <li>
          <NavLink to="/">Home></NavLink>
        </li>
        <li>{props.slug}</li>
      </ul>
   </div>
  )
}

export default Breadcrumbs