import { OfferList } from "./components/OfferList";

function App() {
  return (
    <>
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

      {/* LOGIN MODAL */}

      <div
        className="modal fade"
        id="loginContainer"
        tabIndex={-1}
        aria-labelledby="loginModalLabel"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title w-100 h1 text-center">Logowanie</p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="needs-validation" id="loginForm">
                <div className="form-floating">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Username"
                    autoComplete="off"
                    required
                  />
                  <br />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-warning me-auto"
                data-bs-target="#registerModal"
                data-bs-toggle="modal"
              >
                Rejestracja
              </button>
              <button
                type="submit"
                form="loginForm"
                className="btn btn-primary"
                id="loginButton"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        {/*END OF LOGIN MODAL*/}
      </div>

      <div
        className="modal fade"
        id="registerModal"
        aria-hidden="true"
        aria-labelledby="registerModalLabel"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <p
                className="modal-title w-100 h1 text-center"
                id="registerModalLabel"
              >
                Rejestracja
              </p>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="form-floating">
                <div className="form-floating">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <br />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Username"
                    autoComplete="off"
                  />
                  <br />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-warning me-auto">Rejestruj</button>
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#loginContainer"
              >
                Logowanie
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-3 px-3">
        <div className="row">
          <form>
            <div className="row g-3">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="input-group">
                  <input
                    type="text"
                    name="userInput"
                    id="userInput"
                    maxLength={255}
                    className="form-control"
                    autoComplete="off"
                    placeholder="Wyszukaj po frazie"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg">
                <select id="category" name="category" className="form-select">
                  <option value="Category">Kategoria</option>
                  <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
                </select>
              </div>
              <div className="col-sm-12 col-md-6 col-lg">
                <select
                  id="operatingMode"
                  name="operatingMode"
                  className="form-select"
                >
                  <option value="operatingMode">Tryb pracy</option>
                  <option value="remote">Praca zdalana</option>
                  <option value="hybrid">Praca hybrydowa</option>
                  <option value="office">Praca w biurze</option>
                </select>
              </div>
              <div className="col-sm-12 col-md-6 col-lg">
                <select
                  name="employmentType"
                  id="employmentType"
                  className="form-select"
                >
                  <option value="employmentMode">Rodzaj umowy</option>
                  <option value="employmentMode">B2B</option>
                  <option value="internship">Staż</option>
                  <option value="mandateContract">Umowa o zlecenie</option>
                </select>
              </div>
              <div className="col-sm-12 col-md-6 col-lg">
                <select
                  name="jobLocation"
                  id="jobLocation"
                  className="form-select"
                >
                  <option value="jobLocation">Województwo</option>
                  <option value="locationSlask">Śląsk</option>
                  <option value="jobLodz">Łódź</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container-xxl py-3 px-3">
        {/* lista ofert */}
        <OfferList></OfferList>
      </div>
    </>
  );
}

export default App;
