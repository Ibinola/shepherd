import React from "react";
import OfferCard from "./OfferCard";
import { motion, AnimatePresence } from "framer-motion";

const OfferList = ({ offers, onCardClick }) => {
  return (
    <motion.div
    layout
    className="offers-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
  >
    <AnimatePresence>
      {offers.map((offer) => (
        <motion.div
          key={offer.id}
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.1 * offer.id }}
        >
          <OfferCard offer={offer} onClick={onCardClick} />
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
  
  
  );
};

export default OfferList;

