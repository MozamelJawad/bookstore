import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Category from './components/Category';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
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
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
