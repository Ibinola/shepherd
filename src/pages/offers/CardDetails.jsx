import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/svgs/avatar.svg";
import info from "../../assets/svgs/info.svg";
import file from "../../assets/svgs/cardDetails-file.svg";
import celebrate from "../../assets/svgs/celeb.svg";

const CardDetails = ({ selectedOffer, onBack }) => {
  const [modalType, setModalType] = useState(null); // To track which modal to open (accept/decline)
  const [note, setNote] = useState(""); // To capture the optional note
  const [showModal, setShowModal] = useState(false); // Controls modal visibility

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNote(""); // Reset the note when modal closes
  };
  const navigate = useNavigate();

  if (!selectedOffer) return null;

  const hourlyRate = selectedOffer.rate || 0;
  const serviceFee = hourlyRate * 0.05; // 5% of the hourly rate
  const amountReceived = (hourlyRate - serviceFee).toFixed(2);
  const totalAmount = (hourlyRate * 3).toFixed(2);

  const offerDetails = [
    {
      label: "Subject & Level",
      value: `${selectedOffer.subject} - ${selectedOffer.level}`,
    },
    { label: "Availability", value: selectedOffer.availability },
    {
      label: "Time (Mon)",
      value: `${selectedOffer.startTime} → ${selectedOffer.endTime}`,
    },
    {
      label: "Time (Tue)",
      value: `${selectedOffer.startTime} → ${selectedOffer.endTime}`,
    },
    {
      label: "Time (Wed)",
      value: `${selectedOffer.startTime} → ${selectedOffer.endTime}`,
    },
    { label: "Start date", value: selectedOffer.startDate || "Not provided" },
    { label: "End date", value: selectedOffer.endDate || "Not provided" },
  ];

  // My reusable styles so as to avoid breaking the DRY rule
  const textMuted = "text-[#6E7682] text-[14px] font-[400] leading-[1.25rem]";
  const textPrimary = "text-[#207DF7]";
  const textError = "text-[#F53535] font-[800]";
  const textBody = "text-[#212224] text-[14px] font-[500] leading-[1.25rem]";
  const textGray = "text-gray-500";
  const borderCard = "border border-[#eff0eb] rounded-[12px]";
  const btnPrimary = "bg-[#207DF7] text-white font-semibold rounded-[8px]";
  const btnDanger = "bg-[#FEF0F0] text-[#F53535] font-semibold rounded-md";
  // const shadowCustom = "shadow-lg";
  const textXs = "text-[12px]";
  const textSm = "text-[14px]";
  // const textMd = "text-[16px]";

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-6">
      <div className={`lg:w-[700px] m-0 p-4 shadow-lg rounded-lg`}>
        {/* Header */}
        <div className="flex justify-between p-2">
          <p className={`${textMuted}`}>
            Offers &#10095; <span className={textPrimary}>Review Offers</span>
          </p>
          <button onClick={onBack} className={`mb-4  ${textXs} text-blue-500`}>
            &#10094; Back to Offers
          </button>
        </div>

        {/* Offer Information */}
        <div className="w-full lg:w-[436px] py-6">
          <h2 className="text-[#212224] text-[20px] lg:text-[24px] font-[600] leading-[30px]">
            Review Offer
          </h2>
          <p className={`${textMuted}`}>
            Respond to offer from clients, you may also choose to renegotiate
          </p>
        </div>

        {/* Teacher and Offer Expiry */}
        <div
          className={`w-full lg:w-[645px] p-4 lg:p-6 ${borderCard} flex justify-between mb-4`}
        >
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt={selectedOffer.teacher}
              className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full"
            />
            <div>
              <h2 className="text-[14px] lg:text-[16px] text-[#212224] font-semibold">
                {selectedOffer.teacher}
              </h2>
              <p className={textGray}>
                Offer expires:
                <span className={textError}>{selectedOffer.offer}</span>
              </p>
            </div>
          </div>
          <span className={textGray}>{selectedOffer.date}</span>
        </div>

        {/* Offer Details */}
        <div className={`mb-6 w-full lg:w-[645px] p-4 lg:p-6 ${borderCard}`}>
          <h3 className="text-lg font-bold mb-6">Offer Details</h3>
          {offerDetails.map((detail, index) => (
            <div key={index} className="mb-4">
              <span className={textMuted}>{detail.label}</span>
              <h4 className={`py-1 ${textBody}`}>{detail.value}</h4>
            </div>
          ))}
        </div>

        {/* Payment Details */}
        <div className={`w-full lg:w-[645px] p-4 lg:p-6 ${borderCard}`}>
          <h3 className="text-lg font-bold">Payment Details</h3>
          <div className="mb-2">
            <span className={textMuted}>Hourly rate:</span>
            <h4 className={`py-1 ${textBody}`}>${hourlyRate.toFixed(2)}/hr</h4>
            <span className={`${textXs} ${textGray} block`}>
              Shepherd charges a{" "}
              <span className={textPrimary}>5% service fee (-$3.00/hr)</span>
            </span>
          </div>
          <div className="mb-2">
            <span className={textMuted}>You will receive:</span>
            <h4 className={`py-1 ${textBody}`}>${amountReceived}</h4>
          </div>
          <div className="mb-2">
            <span className={textMuted}>Total amount for this offer:</span>
            <h4 className={`py-1 ${textBody}`}>${totalAmount}</h4>
            <span className={`${textXs} ${textGray}`}>
              You’ll be paid after each session
            </span>
          </div>
          <div className="w-full lg:w-[600px]  bg-[#EFF4FA] p-2 mt-4 rounded-[12px] text-[12px]">
            <img src={info} alt="info" className="inline-block mr-2" />
            <p className={`${textGray} mt-4`}>
              Initial payment will not be made until after the client reviews
              the offer after the first session. The client may decide to
              continue with you or withdraw the offer.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Accept/Decline Offer */}
      <div
        className={`w-full lg:w-[370px] h-[305px] mt-10 lg:mt-20 ${borderCard} p-6`}
      >
        <div className="flex justify-center items-center  mx-auto w-[80px] h-[80px] rounded-full lg:w-[80px]  lg:h-[70px] bg-[#F7F7F8] transition-colors duration-300">
          <img src={file} alt="file" />
        </div>
        <h3
          className={`${textGray} ${textSm} text-center py-6 lg:py-10 transition-opacity duration-500 ease-in-out`}
        >
          Respond to the offer before it expires
        </h3>
        <button
          onClick={() => openModal("accept")}
          className={`w-full lg:w-[310px] py-2 mb-4 ${btnPrimary} transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-600`}
        >
          Accept Offer
        </button>

        <button
          onClick={() => openModal("decline")}
          className={`w-full lg:w-[310px] py-2 ${btnDanger} transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-red-200`}
        >
          Decline Offer
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className={`${textMuted} w-[5rem] bg-[#F3F5F6] rounded-[2.5rem] p-2 font-[400]`}
              >
                Close &times;
              </button>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h3 className=" font-[700] mt-4 text-[1.5rem] block mx-auto leading-[1.3125rem]">
                {modalType === "accept" ? "Offer Accepted" : "Decline Offer"}
              </h3>
            </div>

            {modalType === "decline" ? (
              <>
                {/* Decline Modal Content */}
                <p className="text-gray-600 mb-2">Add a note (Optional)</p>
                <textarea
                  className="w-full h-[100px] p-2 border border-gray-300 rounded-md"
                  placeholder="Let the client know what your terms are"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => {
                      console.log("Note added:", note);
                      navigate("/dashboard");
                      closeModal();
                    }}
                    className="bg-[#F53535] text-white px-4 py-2 rounded-md"
                  >
                    Confirm
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Accept Modal Content */}
                <div className="block mx-auto">
                  <img src={celebrate} alt="celebrate" />
                </div>
                <p
                  className={`${textMuted} ${textSm} w-[259px] block mx-auto text-center`}
                >
                  {selectedOffer.teacher} has been added to your message list
                </p>
                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => {
                      closeModal();
                    }}
                    className={`${btnPrimary} ${textSm} text-white px-4 py-2 rounded-md`}
                  >
                    Send a Message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
