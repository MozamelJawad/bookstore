import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <NavLink className="navBrand" to="/">Bookstore CMS</NavLink>
    <ul>
      <li>
        <NavLink to="/">Books</NavLink>
      </li>
      <li>
        <NavLink to="/categories">Categories</NavLink>
      </li>
    </ul>
    <div className="icon"><i className="bi bi-person" /></div>
  </nav>
);

export default Navbar;
