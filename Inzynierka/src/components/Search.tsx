export const Search = () => {
  return (
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
  );
};
