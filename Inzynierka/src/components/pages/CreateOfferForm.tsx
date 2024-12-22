import { useForm } from "react-hook-form";
import { useAuth } from "../AuthProvider";

type OfferFormData = {
  title: string;
  company: string;
  technologies: string;
  description: string;
  mode: string;
  contractType: string;
  salary: string;
  voivodeship: string;
};

export const CreateOfferForm = () => {
  const { isLoggedIn } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<OfferFormData>();

  const onSubmit = async (data: OfferFormData) => {
    clearErrors();

    try {
      const response = await fetch("http://localhost:8080/api/offer/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          offerTitle: data.title,
          offerCompany: data.company,
          offerTechnologies: (data.technologies).toLowerCase(),
          offerMode: data.mode,
          offerContractType: data.contractType,
          offerSalary: data.salary,
          offerVoivodeship: data.voivodeship,
        }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          const errorData = await response.json();
          if (errorData.errors) {
            errorData.errors.forEach(
              (error: { field: string; message: string }) => {
                setError(error.field as keyof OfferFormData, {
                  type: "manual",
                  message: error.message,
                });
              }
            );
          } else {
            throw new Error("Dodanie oferty nie powiodło się.");
          }
        }
      } else {
        const responseData = await response.json();
        console.log("Dodano ofertę pomyślnie: ", responseData);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("Błąd: ", error.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Dodaj nową ofertę pracy</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-light p-4 rounded shadow"
      >
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
                {...register("title", { required: "Tytuł jest wymagany" })}
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
                autoComplete="off"
              />
              {errors.title && (
                <div className="invalid-feedback">{errors.title.message}</div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="company" className="form-label">
                Firma
              </label>
              <input
                type="text"
                id="company"
                {...register("company", { required: "Firma jest wymagana" })}
                className={`form-control ${errors.company ? "is-invalid" : ""}`}
                autoComplete="off"
              />
              {errors.company && (
                <div className="invalid-feedback">{errors.company.message}</div>
              )}
            </div>
          </div>
        </fieldset>

        {/* Sekcja: Szczegóły techniczne */}
        <fieldset className="mb-4">
          <legend className="text-primary">Szczegóły techniczne</legend>
          <div className="row g-3">
            <div className="col-md-12">
              <label htmlFor="technologies" className="form-label">
                Technologie
              </label>
              <input
                type="text"
                id="technologies"
                {...register("technologies", {
                  required: "Technologie są wymagane",
                })}
                className={`form-control ${
                  errors.technologies ? "is-invalid" : ""
                }`}
                placeholder="Np. JavaScript, React"
                list="technologies-list"
                autoComplete="off"
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
              {...register("description", { required: "Opis jest wymagany" })}
              className={`form-control ${
                errors.description ? "is-invalid" : ""
              }`}
              rows={5}
              placeholder="Podaj szczegóły dotyczące oferty, wymagania, benefity itp."
            />
            {errors.description && (
              <div className="invalid-feedback">
                {errors.description.message}
              </div>
            )}
          </div>
        </fieldset>

        {/* Sekcja: Opcje pracy */}
        <fieldset className="mb-4">
          <legend className="text-primary">Opcje pracy</legend>
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="mode" className="form-label">
                Tryb pracy
              </label>
              <select
                id="mode"
                {...register("mode", { required: "Tryb pracy jest wymagany" })}
                className={`form-select ${errors.mode ? "is-invalid" : ""}`}
              >
                <option value="remote">Zdalna</option>
                <option value="office">Stacjonarna</option>
                <option value="hybrid">Hybrydowa</option>
              </select>
              {errors.mode && (
                <div className="invalid-feedback">{errors.mode.message}</div>
              )}
            </div>

            <div className="col-md-4">
              <label htmlFor="contractType" className="form-label">
                Rodzaj umowy
              </label>
              <select
                id="contractType"
                {...register("contractType", {
                  required: "Rodzaj umowy jest wymagany",
                })}
                className={`form-select ${
                  errors.contractType ? "is-invalid" : ""
                }`}
              >
                <option value="employmentContract">Umowa o pracę</option>
                <option value="full-time">Pełny etat</option>
                <option value="part-time">Część etatu</option>
                <option value="mandateContract">Umowa o zlecenie</option>
                <option value="B2B">B2B</option>
                <option value="internship">Staż</option>
              </select>
              {errors.contractType && (
                <div className="invalid-feedback">
                  {errors.contractType.message}
                </div>
              )}
            </div>

            <div className="col-md-4">
              <label htmlFor="voivodeship" className="form-label">
                Województwo
              </label>
              <input
                type="text"
                id="voivodeship"
                {...register("voivodeship", {
                  required: "Województwo jest wymagane",
                })}
                className={`form-control ${
                  errors.voivodeship ? "is-invalid" : ""
                }`}
                list="voivodeship-list"
                placeholder="Wybierz lub wpisz województwo"
              />
              <datalist id="voivodeship-list">
                <option value="Dolnośląskie" />
                <option value="Kujawsko-Pomorskie" />
                <option value="Lubelskie" />
                <option value="Lubuskie" />
                <option value="Łódzkie" />
                <option value="Małopolskie" />
                <option value="Mazowieckie" />
                <option value="Opolskie" />
                <option value="Podkarpackie" />
                <option value="Podlaskie" />
                <option value="Pomorskie" />
                <option value="Śląskie" />
                <option value="Świętokrzyskie" />
                <option value="Warmińsko-Mazurskie" />
                <option value="Wielkopolskie" />
                <option value="Zachodniopomorskie" />
              </datalist>

              {errors.voivodeship && (
                <div className="invalid-feedback">
                  {errors.voivodeship.message}
                </div>
              )}
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
                {...register("salary", {
                  required: "Wynagrodzenie jest wymagane",
                })}
                className={`form-control ${errors.salary ? "is-invalid" : ""}`}
                autoComplete="off"
              />
              {errors.salary && (
                <div className="invalid-feedback">{errors.salary.message}</div>
              )}
            </div>
          </div>
        </fieldset>

        <div className="text-center position-relative">
          <button
            type="submit"
            className="btn btn-success px-5"
            disabled={!isLoggedIn}
            title={
              !isLoggedIn ? "Musisz być zalogowany, by stworzyć ofertę" : ""
            }
          >
            Dodaj ofertę
          </button>
        </div>
      </form>
    </div>
  );
};
