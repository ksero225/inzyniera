import { OfferType } from "../utilities/OfferTypes";

type OfferProps = {
  offer: OfferType
}

const Offer = ({ offer }: OfferProps) => {
  const { id, title, company, technologies, age, mode, contractType, salary } =
    offer;

  return (
    <div className="row border p-3 mb-2 offer-row bg-lightblue" data-id={id}>
      <div className="col-md-8 d-flex flex-column justify-content-center">
        <h5 className="mb-1 offer-title">{title}</h5>
        <small className="text-muted offer-company-name">{company}</small>
        <p className="text-muted mb-1">{technologies}</p>

        {/* <!-- Dodatkowe informacje --> */}
        <div className="d-flex flex-wrap text-muted small">
          <span className="me-3">🕒 Wiek oferty: {age}</span>
          <span className="me-3">🌍 Tryb pracy: {mode}</span>
          <span className="me-3">📝 Rodzaj umowy: {contractType}</span>
        </div>
      </div>

      <div className="col-md-4 d-flex justify-content-end align-items-center">
        <span className="text-success fw-bold">{salary}</span>
      </div>
    </div>
  );
};

export default Offer;
