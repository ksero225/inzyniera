const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="row">
        <span className="col-sm-11 align-middle" style={{ fontSize: 20 }}>
          Witaj na stronie! Znajdziesz tutaj oferty prac!
        </span>
        <button
          type="button"
          className="col-sm-1 btn btn-primary align-end px-2"
          id="loginModal"
          data-bs-toggle="modal"
          data-bs-target="#loginContainer"
        >
          Zaloguj!
        </button>
      </div>
    </header>
  );
};

export default Header;
