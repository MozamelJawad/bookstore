import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Category from './components/Category';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
