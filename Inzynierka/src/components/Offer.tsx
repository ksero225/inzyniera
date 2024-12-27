import { useState } from "react";
import { OfferType } from "../utilities/OfferTypes";
import { useAuth } from "./AuthProvider"; // Zakładając, że masz hook useAuth
import { Link } from "react-router-dom";

type OfferProps = {
  offer: OfferType;
};

const Offer = ({ offer }: OfferProps) => {
  const { isLoggedIn } = useAuth(); // Pobieranie statusu logowania
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    offerId,
    offerTitle,
    offerVoivodeship,
    offerCompany,
    offerTechnologies,
    offerMode,
    offerContractType,
    offerSalary,
    offerDescription,
  } = offer;

  const openModal = (e: React.MouseEvent) => {
    // Sprawdź, czy środkowy przycisk myszy został kliknięty
    if (e.button === 1) {
      window.open(`/offer/${offerId}`, "_blank");
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="row border p-3 mb-2 offer-row bg-lightblue"
        data-id={offerId}
        onClick={openModal}
        onMouseDown={(e) => e.preventDefault()} // Zabezpieczenie przed podwójnym kliknięciem
      >
        <div className="col-md-8 d-flex flex-column justify-content-center">
          <h5 className="mb-1 offer-title">{offerTitle}</h5>
          <small className="text-muted offer-company-name">
            {offerCompany}
          </small>
          <p className="text-muted mb-1">{offerTechnologies}</p>

          {/* Dodatkowe informacje */}
          <div className="d-flex flex-wrap text-muted small">
            <span className="me-3">🌍 Województwo: {offerVoivodeship}</span>
            <span className="me-3">🏢 Tryb pracy: {offerMode}</span>
            <span className="me-3">📝 Rodzaj umowy: {offerContractType}</span>
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-end align-items-center">
          <span className="text-success fw-bold">{offerSalary}</span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-center">
                {/* Przycisk zamknij po lewej */}
                <h5 className="modal-title">{offerTitle}</h5>{" "}
                {/* Tytuł na środku */}
              </div>
              <div className="modal-body">
                <p>
                  <strong>Firma:</strong> {offerCompany}
                </p>
                <p>
                  <strong>Województwo:</strong> {offerVoivodeship}
                </p>
                <p>
                  <strong>Technologie:</strong> {offerTechnologies}
                </p>
                <p>
                  <strong>Tryb pracy:</strong> {offerMode}
                </p>
                <p>
                  <strong>Rodzaj umowy:</strong> {offerContractType}
                </p>
                <p>
                  <strong>Wynagrodzenie:</strong> {offerSalary}
                </p>
                <hr />
                <p>
                  <strong>Opis oferty:</strong>
                </p>
                <p>{offerDescription}</p>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Zamknij
                </button>
                <div>
                  <Link
                    to={`/offer/${offerId}`} // Tylko ID w URL
                    state={{ offer }} // Przekazywanie całej oferty jako stan
                    className="btn btn-primary"
                  >
                    Przejdź do strony oferty
                  </Link>
                  <button
                    type="button"
                    className="btn btn-primary ms-2"
                    disabled={!isLoggedIn} // Włącz przycisk tylko dla zalogowanych
                  >
                    Aplikuj
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offer;
