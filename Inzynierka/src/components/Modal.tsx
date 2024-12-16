import React from "react";
import { ComponentProps } from "react";

// type FooterButton = {
//   // label: string;
//   // className?: string;
//   dataToggle?: string;
//   dataTarget?: string;
//   // onClick?: () => void;
//   // type?: "button" | "submit";
//   // form?: string;
// };

type FooterButton = Pick<ComponentProps<"button">, "onClick" | "form" | "className"> & {
  type?: "button" | "submit";
  label: string;
  dataToggle?: string;
  dataTarget?: string;
}

type ModalProps = {
  id: string;
  title: string;
  content: React.ReactNode;
  footerButtons?: FooterButton[];
  onClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({
  id,
  title,
  content,
  footerButtons = [],
  onClose,
}) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title w-100 h1 text-center" id={`${id}Label`}>
              {title}
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">{content}</div>
          <div className="modal-footer">
            {footerButtons.map((button, index) => (
              <button
                key={index}
                className={`btn ${button.className}`}
                data-bs-toggle={button.dataToggle || ""}
                data-bs-target={button.dataTarget || ""}
                onClick={button.onClick}
                type={button.type || "button"}
                form={button.form || ""}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
