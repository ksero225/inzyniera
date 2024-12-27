import { useForm } from "react-hook-form";
import Modal from "./Modal";``
import { useAuth } from "../AuthProvider";
import {Modal as BootstrapModal} from "bootstrap";
import { useCallback } from "react";

type LoginFormData = {
  username: string;
  password: string;
};

export const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<LoginFormData>();

  const { login } = useAuth();

  const handleLogin = async () => {
    // Przykład logowania
    const isAuthenticated = true; // Faktyczna logika logowania
    if (isAuthenticated) {
      login();
      hide();
    }
  };

  const hide = useCallback(() => {
    const modalElement = document.getElementById('loginContainer')
    if (modalElement) {
      const listener = () => document.body.querySelector(".modal-backdrop")?.remove()
      modalElement.addEventListener("hide.bs.modal", listener)
      BootstrapModal.getInstance(modalElement)?.hide()
      return () => {
        modalElement.removeEventListener("hide.bs.modal", listener)
      }
    }

  }, [])

  const onSubmit = async (data: LoginFormData) => {
    const { username, password } = data;
    clearErrors();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userLogin: username,
          userPassword: password,
        }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          const errorData = await response.json();
          if (errorData.message.includes("login")) {
            setError("username", { type: "manual", message: "Invalid login" });
          }
          if (errorData.message.includes("password")) {
            setError("password", {
              type: "manual",
              message: "Invalid password",
            });
          }
        } else {
          throw new Error("An unexpected error occurred.");
        }
      } else {
        handleLogin(); // Wywołaj funkcję zamykającą modal
      }
    } catch (error) {
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              {...register("username", { required: "Login is required" })}
              id="username"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              placeholder="Username"
              autoComplete="off"
            />
            <label htmlFor="username">Login</label>
            {errors.username && (
              <div className="invalid-feedback">{errors.username.message}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              id="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Password"
              autoComplete="off"
            />
            <label htmlFor="password">Hasło</label>
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
        </form>
      }
      footerButtons={[
        {
          label: "Rejestracja",
          className: "btn btn-warning me-auto",
          dataToggle: "modal",

          dataTarget: "#registerModal_", // Przełącz na modal rejestracji
        },
        {
          label: "Login",
          className: "btn btn-primary",
          type: "submit",
          form: "loginForm", // Formularz zostanie wysłany przy kliknięciu
        },
      ]}
    />
  );
};
