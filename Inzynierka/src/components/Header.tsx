import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const Header = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className="bg-dark text-white py-3 shadow">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            {/* Logo */}
            <Link className="navbar-brand fs-5 mb-0" to="/">
              Znajdź Ofertę
            </Link>

            {/* Przycisk burgera */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Zawartość nawigacji */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-warning">
                    <i className="bi bi-house-door"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link text-warning">
                    <i className="bi bi-person"></i> Profil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/offerForm" className="nav-link text-warning">
                    <i className="bi bi-plus-circle"></i> Stwórz ofertę!
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutWebsite" className="nav-link text-warning">
                    <i className="bi bi-info-circle"></i> O stronie
                  </Link>
                </li>
              </ul>

              {/* Przycisk Zaloguj/Wyloguj */}
              <div className="d-lg-none">
                {isLoggedIn ? (
                  <button
                    type="button"
                    className="btn btn-danger w-100 mt-2"
                    onClick={logout}
                  >
                    🚪 Wyloguj
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-outline-warning w-100 mt-2"
                    data-bs-toggle="modal"
                    data-bs-target="#loginContainer"
                  >
                    🔑 Zaloguj
                  </button>
                )}
              </div>
            </div>

            {/* Przycisk Zaloguj/Wyloguj na dużych ekranach */}
            <div className="d-none d-lg-block">
              {isLoggedIn ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={logout}
                >
                  🚪 Wyloguj
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#loginContainer"
                >
                  🔑 Zaloguj
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
