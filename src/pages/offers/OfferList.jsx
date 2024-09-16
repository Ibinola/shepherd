import React from "react";
import OfferCard from "./OfferCard";

const OfferList = ({ offers, onCardClick }) => {
  return (
    <div className="offers-grid grid grid-cols-3 gap-6">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default OfferList;
