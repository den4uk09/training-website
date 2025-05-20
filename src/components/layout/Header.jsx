import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import { useState } from 'react';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const { handleSearch } = useSearch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchInput.trim()) {
      handleSearch(searchInput);
      navigate(`/search?query=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <header className="text-center bg-success text-white">
      <div className="container-fluid header-container">
        <div className="logo-container">
          <Link to="/" className="text-white text-decoration-none d-flex align-items-center">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7bGjcuWBJ4w5S6z8sZkf_k6hR7nQgzNj-8YvgrSmenXkn4Alr3tTHNkAsCxqrhttps://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7bGjcuWBJ4w5S6z8sZkf_k6hR7nQgzNj-8YvgrSmenXkn4Alr3tTHNkAsCxqr" // Шлях до нового зображення їжака
              alt="Їжак"
              className="site-logo rounded-circle me-2"
            />
            <span className="fs-4">Сайт про їжаків</span>
          </Link>
        </div>

        <nav className="main-nav">
          <Link to="/" className={`nav-link text-white ${location.pathname === '/' ? 'active' : ''}`}>
            Головна
          </Link>
          <Link to="/morphology" className={`nav-link text-white ${location.pathname === '/morphology' ? 'active' : ''}`}>
            Зовнішній вигляд їжаків
          </Link>
          <Link to="/nutrition" className={`nav-link text-white ${location.pathname === '/nutrition' ? 'active' : ''}`}>
            Харчування їжаків
          </Link>
          <Link to="/population" className={`nav-link text-white ${location.pathname === '/population' ? 'active' : ''}`}>
            Ареал їжаків
          </Link>
          <Link to="/photo" className={`nav-link text-white ${location.pathname === '/photo' ? 'active' : ''}`}>
            Фотографії їжаків
          </Link>
        </nav>

        <div className="search-container">
          <form onSubmit={onSubmit} className="d-flex">
            <input
              type="search"
              className="form-control me-2"
              placeholder="Пошук на сайті..."
              value={searchInput}
              onChange={(inputEvent) => setSearchInput(inputEvent.target.value)}
            />
            <button type="submit" className="btn btn-light">
              Пошук
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;