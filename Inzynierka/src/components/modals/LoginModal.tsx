import { useState } from "react";
import Modal from "./Modal";

export const LoginModal = () => {
  const [usernameError, setUsernameError] = useState(""); // Błąd dla loginu
  const [passwordError, setPasswordError] = useState(""); // Błąd dla hasła

  // Funkcja obsługująca wysyłanie formularza
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const userLogin = (form.username as HTMLInputElement).value;
    const userPassword = (form.password as HTMLInputElement).value;

    // Resetujemy poprzednie błędy
    setUsernameError("");
    setPasswordError("");

    // Wysyłanie żądania POST do endpointu logowania
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userLogin,
          userPassword,
        }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          // Zakładamy, że backend zwraca specyficzne komunikaty dla loginu i hasła
          const errorData = await response.json();
          if (errorData.message.includes("login")) {
            setUsernameError("Invalid login");
          }
          if (errorData.message.includes("password")) {
            setPasswordError("Invalid password");
          }
        } else {
          throw new Error("An unexpected error occurred.");
        }
      } else {
        const data = await response.json();
        console.log("Logged in successfully:", data);
        // Możesz zapisać dane logowania, token, itd.
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <Modal
      id="loginContainer"
      title="Logowanie"
      content={
        <form
          className="needs-validation"
          id="loginForm"
          onSubmit={handleSubmit} // Przypisujemy funkcję do onSubmit
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              name="username"
              id="username"
              className={`form-control ${usernameError ? "is-invalid" : ""}`} // Dodajemy klasę 'is-invalid' jeśli jest błąd
              placeholder="Username"
              autoComplete="off"
              required
            />
            <label htmlFor="username">Login</label>
            {usernameError && (
              <div className="invalid-feedback">{usernameError}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control ${passwordError ? "is-invalid" : ""}`} // Dodajemy klasę 'is-invalid' jeśli jest błąd
              placeholder="Password"
              autoComplete="off"
              required
            />
            <label htmlFor="password">Hasło</label>
            {passwordError && (
              <div className="invalid-feedback">{passwordError}</div>
            )}
          </div>
        </form>
      }
      footerButtons={[
        {
          label: "Rejestracja",
          className: "btn btn-warning me-auto",
          dataToggle: "modal",
          dataTarget: "#registerModal", // Przełącz na modal rejestracji
        },
        {
          label: "Login",
          className: "btn btn-primary",
          type: "submit",
          form: "loginForm", // Formularz zostanie wysłany przy kliknięciu
        },
      ]}
    ></Modal>
  );
};
