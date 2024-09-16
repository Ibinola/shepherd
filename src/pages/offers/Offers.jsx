import React, { useState } from "react";
import OfferList from "./OfferList";
import CardDetails from "./CardDetails";

// Array of offers
const offers = [
  {
    id: 1,
    subject: "Economics",
    level: "A-level",
    rate: 22.0,
    filePhoto: "/src/assets/svgs/offersfile.svg",
    frequency: "3 lessons weekly",
    availability: "Mon, Tue, Wed",
    startTime: "05:00 PM",
    endTime: "08:00 PM",
    teacher: "William Kelly",
    status: "New",
    updated: true,
    timeLeft: null,
    perfectOffer: false,
    date: null,
    offer: "Offer Expired",
  },
  {
    id: 2,
    subject: "Physics",
    level: "AS-level",
    rate: 30.0,
    filePhoto: "/src/assets/svgs/offersfile.svg",
    frequency: "4 lessons weekly",
    availability: "Mon, Tue, Wed",
    startTime: "02:00 PM",
    endTime: "04:00 PM",
    teacher: "John Smith",
    status: "New",
    updated: false,
    timeLeft: null,
    perfectOffer: false,
    date: null,
  },
  {
    id: 3,
    subject: "Chemistry",
    level: "A-level",
    rate: 27.0,
    filePhoto: "/src/assets/svgs/offersfile.svg",
    frequency: "3 lessons weekly",
    availability: "Mon, Tue, Wed",
    startTime: "03:00 PM",
    endTime: "06:00 PM",
    teacher: "Sophia Johnson",
    perfectOffer: true,
    status: "New",
    updated: false,
    timeLeft: null,
    date: null,
  },
  {
    id: 4,
    subject: "Biology",
    level: "O-level",
    rate: 22.5,
    filePhoto: "/src/assets/svgs/offersfile.svg",
    frequency: "5 lessons weekly",
    availability: "Mon, Tue, Wed",
    startTime: "11:00 AM",
    endTime: "01:00 PM",
    teacher: "David Lee",
    status: null,
    updated: false,
    timeLeft: "1 day left",
    perfectOffer: false,
    date: "24.09.2022",
    startDate: "17th September, 2024",
    EndDate: "17th October, 2024",
  },
  {
    id: 5,
    subject: "History",
    level: "AS-level",
    rate: 24.0,
    filePhoto: "/src/assets/svgs/offersfile.svg",
    frequency: "1 lesson weekly",
    availability: "Mon, Tue, Wed",
    startTime: "08:00 AM",
    endTime: "09:00 PM",
    teacher: "Olivia Brown",
    status: "New",
    updated: false,
    timeLeft: null,
    perfectOffer: true,
    date: null,
  },
  {
    id: 6,
    subject: "Geography",
    level: "A-level",
    rate: 29.0,
    filePhoto: "/src/assets/svgs/offersfile.svg",
    avatar: "/src/assets/Images/Ellipse.png",
    frequency: "2 lessons weekly",
    availability: "Mon, Tue, Wed",
    startTime: "12:00 PM",
    endTime: "02:00 PM",
    teacher: "Lucas Davis",
    status: null,
    updated: false,
    timeLeft: null,
    perfectOffer: false,
    date: "02.10.2022",
    offer: "Offer Expired",
    startDate: "17th September, 2024",
    EndDate: "17th October, 2024",
  },
  {
    id: 7,
    subject: "English Literature",
    level: "O-level",
    rate: 21.0,
    filePhoto: "/src/assets/svgs/offersfile.svg",
    frequency: "4 lessons weekly",
    availability: "Mon, Tue, Wed",
    startTime: "04:00 PM",
    endTime: "06:00 PM",
    teacher: "Emma White",
    status: "New",
    updated: false,
    timeLeft: null,
    perfectOffer: false,
    date: null,
    startDate: "23rd September, 2024",
    endDate: "23rd September, 2024",
  },
  {
    id: 8,
    subject: "French",
    level: "AS-level",
    rate: 32.0,
    filePhoto: "/src/assets/svgs/offersfile.svg",
    frequency: "2 lessons weekly",
    availability: "Mon, Tue, Wed",
    startTime: "06:00 PM",
    endTime: "08:00 PM",
    teacher: "Isabella Miller",
    status: "Updated",
    updated: false,
    timeLeft: "7 hours left",
    perfectOffer: false,
    date: "29.09.2022",
    startDate: "17th September, 2024",
    EndDate: "17th October, 2024",
  },
  // Add more offers as needed...
];

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null); // Track selected offer

  const handleCardClick = (offer) => {
    setSelectedOffer(offer); // Set the selected offer when clicked
  };

  const handleBackClick = () => {
    setSelectedOffer(null); // Reset to null to go back to offers list
  };

  return (
    <div className="offers-page p-6">
      {selectedOffer ? (
        // If an offer is selected, show the details view
        <CardDetails selectedOffer={selectedOffer} onBack={handleBackClick} />
      ) : (
        // Otherwise, show the offers list
        <>
          <h2 className="text-[24px] font-[600] leading-[30px] tracking-[-2%] mb-2">
            Offers
            <span className="w-[20px] gap-10 px-2 bg-[#F4F5F6] font-[500] text-[14px] text-[#6E7682]">
              {offers.length}
            </span>
          </h2>
          <p className="text-[#6E7682] mb-8 text-[14px] font-[400]">
            Easily manage and respond to offers from potential clients
          </p>
          <OfferList offers={offers} onCardClick={handleCardClick} />
        </>
      )}
    </div>
  );
};

export default Offers;
