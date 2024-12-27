import { useForm } from "react-hook-form";
import Modal from "./Modal";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  birthdate: string;
  city?: string;
  workMode?: string;
  contractType?: string;
};

export const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    // Resetujemy błędy
    clearErrors();

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userLogin: data.username,
          userPassword: data.password,
          email: data.email,
          birthdate: data.birthdate,
          city: data.city,
          workMode: data.workMode,
          contractType: data.contractType,
        }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          const errorData = await response.json();
          if (errorData.errors) {
            errorData.errors.forEach(
              (error: { field: string; message: string }) => {
                setError(error.field as keyof RegisterFormData, {
                  type: "manual",
                  message: error.message,
                });
              }
            );
          }
        } else {
          throw new Error("Rejestracja nie powiodła się. Spróbuj ponownie.");
        }
      } else {
        console.log("Zarejestrowano pomyślnie");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Błąd:", error.message);
      }
    }
  };

  return (
    <Modal
      id="registerModal"
      title="Rejestracja"
      content={
        <form
          className="needs-validation"
          id="registerForm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-floating mb-3">
            <input
              type="email"
              {...register("email", {
                required: "Adres e-mail jest wymagany.",
              })}
              id="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Email"
              autoComplete="off"
            />
            <label htmlFor="email">Adres e-mail</label>
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              {...register("username", {
                required: "Nazwa użytkownika jest wymagana.",
              })}
              id="username"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              placeholder="Nazwa użytkownika"
              autoComplete="off"
            />
            <label htmlFor="username">Nazwa użytkownika</label>
            {errors.username && (
              <div className="invalid-feedback">{errors.username.message}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              {...register("password", { required: "Hasło jest wymagane." })}
              id="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Hasło"
              autoComplete="off"
            />
            <label htmlFor="password">Hasło</label>
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="date"
              {...register("birthdate", {
                required: "Data urodzenia jest wymagana.",
              })}
              id="birthdate"
              className={`form-control ${errors.birthdate ? "is-invalid" : ""}`}
              placeholder="Data urodzenia"
            />
            <label htmlFor="birthdate">Data urodzenia</label>
            {errors.birthdate && (
              <div className="invalid-feedback">{errors.birthdate.message}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              {...register("city")}
              id="city"
              className={`form-control ${errors.city ? "is-invalid" : ""}`}
              placeholder="Miasto zamieszkania"
              autoComplete="off"
            />
            <label htmlFor="city">Miasto zamieszkania (opcjonalne)</label>
            {errors.city && (
              <div className="invalid-feedback">{errors.city.message}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <select
              {...register("workMode")}
              id="workMode"
              className={`form-select ${errors.workMode ? "is-invalid" : ""}`}
            >
              <option value="">
                Wybierz preferowany tryb pracy (opcjonalne)
              </option>
              <option value="remote">Zdalna</option>
              <option value="hybrid">Hybrydowa</option>
              <option value="onsite">Stacjonarna</option>
            </select>
            <label htmlFor="workMode">Preferowany tryb pracy</label>
            {errors.workMode && (
              <div className="invalid-feedback">{errors.workMode.message}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <select
              {...register("contractType")}
              id="contractType"
              className={`form-select ${
                errors.contractType ? "is-invalid" : ""
              }`}
            >
              <option value="">
                Wybierz preferowany typ umowy (opcjonalne)
              </option>
              <option value="b2b">B2B</option>
              <option value="employment">Umowa o pracę</option>
              <option value="mandate">Umowa zlecenie</option>
            </select>
            <label htmlFor="contractType">Preferowany typ umowy</label>
            {errors.contractType && (
              <div className="invalid-feedback">
                {errors.contractType.message}
              </div>
            )}
          </div>
        </form>
      }
      footerButtons={[
        {
          label: "Rejestruj",
          className: "btn btn-warning me-auto",
          type: "submit",
          form: "registerForm",
        },
        {
          label: "Logowanie",
          className: "btn btn-primary",
          dataToggle: "modal",
          dataTarget: "#loginContainer",
        },
      ]}
    ></Modal>
  );
};
