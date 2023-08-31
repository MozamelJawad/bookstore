import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <NavLink className="navBrand" to="/">Bookstore CMS</NavLink>
    <ul>
      <li>
        <NavLink
          className="navTab"
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#121212' : '#121212',
            opacity: isActive ? '1' : '0.5',
          })}
        >
          BOOKS
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navTab"
          to="/categories"
          style={({ isActive }) => ({
            color: isActive ? '#121212' : '#121212',
            opacity: isActive ? '1' : '0.5',
          })}
        >
          CATEGORIES
        </NavLink>
      </li>
    </ul>
    <div className="icon"><i className="bi bi-person" /></div>
  </nav>
);

export default Navbar;
