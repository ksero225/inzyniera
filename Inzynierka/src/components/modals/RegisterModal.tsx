import Modal from "./Modal";

export const RegisterModal = () => {
  return (
    <Modal
      id="registerModal"
      title="Rejestracja"
      content={
        <form className="needs-validation" id="registerForm">
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <label htmlFor="email">Email</label>
          </div>
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
          <div className="form-floating mb-3">
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
          label: "Rejestruj",
          className: "btn btn-warning me-auto",
          type: "submit",
          form: "registerForm", // Ensures the button submits the form
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
