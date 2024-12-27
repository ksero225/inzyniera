import { useLocation } from "react-router-dom";
import { OfferType } from "../../utilities/OfferTypes";

export const OfferDetailPage = () => {
  const location = useLocation();
  const offer = location.state?.offer as OfferType;

  if (!offer) {
    return <div>Oferta nie została znaleziona.</div>;
  }

  const {
    offerTitle,
    offerCompany,
    offerVoivodeship,
    offerTechnologies,
    offerMode,
    offerContractType,
    offerSalary,
    offerDescription,
  } = offer;

  return (
    <div className="container-xxl py-5">
      <div className="row justify-content-center">
        {/* Offer Header */}
        <div className="col-md-8 text-center mb-4">
          <h2 className="display-4">{offerTitle}</h2>
          <h4 className="text-muted">{offerCompany}</h4>
        </div>
      </div>

      {/* Information Table (without borders) */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-6 text-end">
              <strong>Województwo:</strong>
            </div>
            <div className="col-6 text-start">{offerVoivodeship}</div>
          </div>
          <div className="row mb-3">
            <div className="col-6 text-end">
              <strong>Tryb pracy:</strong>
            </div>
            <div className="col-6 text-start">{offerMode}</div>
          </div>
          <div className="row mb-3">
            <div className="col-6 text-end">
              <strong>Rodzaj umowy:</strong>
            </div>
            <div className="col-6 text-start">{offerContractType}</div>
          </div>
          <div className="row mb-3">
            <div className="col-6 text-end">
              <strong>Technologie:</strong>
            </div>
            <div className="col-6 text-start">{offerTechnologies}</div>
          </div>
          <div className="row mb-3">
            <div className="col-6 text-end">
              <strong>Wynagrodzenie:</strong>
            </div>
            <div className="col-6 text-start">{offerSalary}</div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <h5 className="text-center">Opis oferty</h5>
          <p>{offerDescription}</p>
        </div>
      </div>

      {/* Apply Section */}
      <div className="row mt-4 justify-content-center">
        <div className="col-md-6 text-center">
          <a
            className="btn btn-success w-100"
            rel="noopener noreferrer"
          >
            Aplikuj na ofertę
          </a>
        </div>
      </div>
    </div>
  );
};
