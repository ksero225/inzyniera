import { OfferType } from "../utilities/OfferTypes";

type OfferProps = {
  offer: OfferType;
};

const Offer = ({ offer }: OfferProps) => {
  const {
    offerId,
    offerTitle,
    offerVoivodeship,
    offerCompany,
    offerTechnologies,
    offerMode,
    offerContractType,
    offerSalary,
  } = offer;

  return (
    <div className="row border p-3 mb-2 offer-row bg-lightblue" data-id={offerId}>
      <div className="col-md-8 d-flex flex-column justify-content-center">
        <h5 className="mb-1 offer-title">{offerTitle}</h5>
        <small className="text-muted offer-company-name">{offerCompany}</small>
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
  );
};

export default Offer;
