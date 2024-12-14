import Modal from "./Modal";

export const LoginModal = () => {
  return (
    <Modal
      id="loginContainer"
      title="Logowanie"
      content={
        <form className="needs-validation" id="loginForm">
          <div className="form-floating mb-3">
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              placeholder="Username"
              autoComplete="off"
              required
            />
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
              required
            />
            <label htmlFor="password">Password</label>
          </div>
        </form>
      }
      footerButtons={[
        {
          label: "Rejestracja",
          className: "btn btn-warning me-auto",
          dataToggle: "modal",
          dataTarget: "#registerModal",
        },
        {
          label: "Login",
          className: "btn btn-primary",
          type: "submit",
          form: "loginForm",
        },
      ]}
    ></Modal>
  );
};
