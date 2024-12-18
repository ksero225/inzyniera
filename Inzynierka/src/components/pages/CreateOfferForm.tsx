import React, { useState } from "react";

export const CreateOfferForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    technologies: "",
    description: "",
    deadline: "",
    mode: "remote",
    contractType: "full-time",
    salary: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Dodaj nową ofertę pracy</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        {/* Sekcja: Informacje podstawowe */}
        <fieldset className="mb-4">
          <legend className="text-primary">Podstawowe informacje</legend>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                Tytuł
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                required
                autoComplete="false"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="company" className="form-label">
                Firma
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-control"
                value={formData.company}
                onChange={handleChange}
                required
                autoComplete="false"
              />
            </div>
          </div>
        </fieldset>

        {/* Sekcja: Szczegóły techniczne */}
        <fieldset className="mb-4">
          <legend className="text-primary">Szczegóły techniczne</legend>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="technologies" className="form-label">
                Technologie
              </label>
              <input
                type="text"
                id="technologies"
                name="technologies"
                className="form-control"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="Np. JavaScript, React"
                list="technologies-list"
                required
                autoComplete="false"
              />
              <datalist id="technologies-list">
                <option value="JavaScript" />
                <option value="React" />
                <option value="Node.js" />
                <option value="TypeScript" />
                <option value="Python" />
                <option value="Java" />
                <option value="C#" />
              </datalist>
            </div>

            <div className="col-md-6">
              <label htmlFor="deadline" className="form-label">
                Deadline oferty
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className="form-control"
                value={formData.deadline}
                onChange={handleChange}
                required
                autoComplete="false"
              />
            </div>
          </div>
        </fieldset>

        {/* Sekcja: Opis oferty */}
        <fieldset className="mb-4">
          <legend className="text-primary">Opis oferty</legend>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Opis
            </label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Podaj szczegóły dotyczące oferty, wymagania, benefity itp."
              autoComplete="false"
              required
            />
          </div>
        </fieldset>

        {/* Sekcja: Opcje pracy */}
        <fieldset className="mb-4">
          <legend className="text-primary">Opcje pracy</legend>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="mode" className="form-label">
                Tryb pracy
              </label>
              <select
                id="mode"
                name="mode"
                className="form-select"
                value={formData.mode}
                onChange={handleChange}
                required
                autoComplete="false"
              >
                <option value="remote">Zdalna</option>
                <option value="office">Stacjonarna</option>
                <option value="hybrid">Hybrydowa</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="contractType" className="form-label">
                Rodzaj umowy
              </label>
              <select
                id="contractType"
                name="contractType"
                className="form-select"
                value={formData.contractType}
                onChange={handleChange}
                required
                autoComplete="false"
              >
                <option value="full-time">Pełny etat</option>
                <option value="part-time">Część etatu</option>
                <option value="contract">Kontrakt</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Sekcja: Wynagrodzenie */}
        <fieldset className="mb-4">
          <legend className="text-primary">Wynagrodzenie</legend>
          <div className="row g-3">
            <div className="col-md-12">
              <label htmlFor="salary" className="form-label">
                Wynagrodzenie (np. "5000-7000 PLN")
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                className="form-control"
                value={formData.salary}
                onChange={handleChange}
                required
                autoComplete="false"
              />
            </div>
          </div>
        </fieldset>

        <div className="text-center">
          <button type="submit" className="btn btn-success px-5">
            Dodaj ofertę
          </button>
        </div>
      </form>
    </div>
  );
};
