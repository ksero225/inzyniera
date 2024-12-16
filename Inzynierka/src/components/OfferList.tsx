import { useState } from "react";
import { OfferType } from "../utilities/OfferTypes";
import Offer from "./Offer";

const offerExample: OfferType = {
  id: 1,
  title: "Senior Developer",
  company: "Tech Corp",
  technologies: "React, TypeScript",
  age: "3 days ago",
  mode: "Remote",
  contractType: "B2B",
  salary: "24,000 - 28,000 PLN",
};

export const OfferList = () => {
  const [offers, _setOffers] = useState<OfferType[]>([offerExample]);

  return (
    <div className="container-xxl py-3 px-3">
      {offers.map((offer) => (
        <Offer offer={offer}></Offer>
      ))}
    </div>
  );
};
