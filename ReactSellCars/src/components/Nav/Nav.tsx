import {  NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cars">Catalog</NavLink>
        </li>
      </ul>
    </div>
  );
}
