import { useState } from "react";
import Modal from "./Modal";

export const RegisterModal = () => {
  const [errorMessage, setErrorMessage] = useState(""); // Przechowujemy ogólny komunikat o błędzie
  const [emailError, setEmailError] = useState(""); // Błąd dla emaila
  const [usernameError, setUsernameError] = useState(""); // Błąd dla loginu
  const [passwordError, setPasswordError] = useState(""); // Błąd dla hasła

  // Funkcja obsługująca wysyłanie formularza
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Zapobiega przeładowaniu strony

    // Typowanie event.target jako HTMLFormElement
    const form = event.target as HTMLFormElement;

    // Typowanie poszczególnych inputów jako HTMLInputElement
    const email = (form.email as HTMLInputElement).value;
    const username = (form.username as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;

    // Resetujemy poprzednie błędy
    setEmailError("");
    setUsernameError("");
    setPasswordError("");
    setErrorMessage("");

    // Prosta walidacja po stronie klienta
    if (!email || !username || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Wysyłamy dane do backendu
    try {
      const response = await fetch("localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      const data = await response.json();
      console.log("User registered successfully:", data);
      // Możesz dodać logikę przejścia do innej strony lub zamknięcia formularza

    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message); // Ustawia ogólny komunikat o błędzie

        // Zależnie od rodzaju błędu, ustawiamy błąd na odpowiednie pole
        if (error.message === "Registration failed. Please try again.") {
          setEmailError("This email is already in use.");
          setUsernameError("This username is already taken.");
          setPasswordError("Password is too weak.");
        }
      } else {
        setErrorMessage("An unknown error occurred.");
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
          onSubmit={handleSubmit} // Przypisujemy funkcję do onSubmit
        >
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              id="email"
              className={`form-control ${emailError ? "is-invalid" : ""}`} // Dodajemy klasę 'is-invalid' jeśli jest błąd
              placeholder="Email"
              autoComplete="off"
              required
            />
            <label htmlFor="email">Email</label>
            {emailError && (
              <div className="invalid-feedback">{emailError}</div>
            )}
          </div>
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
            <label htmlFor="username">Username</label>
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
            <label htmlFor="password">Password</label>
            {passwordError && (
              <div className="invalid-feedback">{passwordError}</div>
            )}
          </div>

          {errorMessage && (
            <div className="text-danger mt-3">
              <strong>{errorMessage}</strong>
            </div>
          )}
        </form>
      }
      footerButtons={[
        {
          label: "Rejestruj",
          className: "btn btn-warning me-auto",
          type: "submit",
          form: "registerForm", // Formularz zostanie wysłany przy kliknięciu
        },
        {
          label: "Logowanie",
          className: "btn btn-primary",
          dataToggle: "modal",
          dataTarget: "#loginContainer", // Switch back to the login modal
        },
      ]}
    ></Modal>
  );
};
