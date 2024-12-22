type SelectFieldProps = {
  name: string;
  id: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

const SelectField = ({ name, id, options, placeholder }: SelectFieldProps) => {
  return (
    <select name={name} id={id} className="form-select">
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export const Search = ({ onSearch = () => {} }: { onSearch?: (filters: any) => void }) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const filters = {
      userInput: formData.get("userInput")?.toString() || "",
      category: formData.get("category")?.toString() || "",
      operatingMode: formData.get("operatingMode")?.toString() || "",
      employmentType: formData.get("employmentType")?.toString() || "",
      jobLocation: formData.get("jobLocation")?.toString() || "",
    };

    onSearch(filters);
  };

  return (
    <div className="container-xxl py-3 px-3">
      <div className="row">
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            {/* Wyszukiwanie po frazie */}
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

            {/* Kategoria */}
            <div className="col-sm-12 col-md-6 col-lg">
              <SelectField
                name="category"
                id="category"
                placeholder="Kategoria"
                options={[
                  { value: "IT", label: "IT" },
                  { value: "HR", label: "HR" },
                  { value: "Marketing", label: "Marketing" },
                ]}
              />
            </div>

            {/* Tryb pracy */}
            <div className="col-sm-12 col-md-6 col-lg">
              <SelectField
                name="operatingMode"
                id="operatingMode"
                placeholder="Tryb pracy"
                options={[
                  { value: "remote", label: "Praca zdalna" },
                  { value: "hybrid", label: "Praca hybrydowa" },
                  { value: "office", label: "Praca w biurze" },
                ]}
              />
            </div>

            {/* Rodzaj umowy */}
            <div className="col-sm-12 col-md-6 col-lg">
              <SelectField
                name="employmentType"
                id="employmentType"
                placeholder="Rodzaj umowy"
                options={[
                  { value: "B2B", label: "B2B" },
                  { value: "internship", label: "Staż" },
                  { value: "mandateContract", label: "Umowa zlecenie" },
                  { value: "employmentContract", label: "Umowa o pracę" },
                ]}
              />
            </div>

            {/* Lokalizacja */}
            <div className="col-sm-12 col-md-6 col-lg">
              <SelectField
                name="jobLocation"
                id="jobLocation"
                placeholder="Lokalizacja"
                options={[
                  { value: "Silesia", label: "Śląsk" },
                  { value: "Lodz", label: "Łódź" },
                  { value: "Warsaw", label: "Warszawa" },
                ]}
              />
            </div>

            {/* Przycisk wyszukiwania */}
            <div className="col-sm-12 col-md-6 col-lg">
              <button type="submit" className="btn btn-primary w-100">
                Szukaj
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
