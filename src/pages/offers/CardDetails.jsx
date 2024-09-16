import React from "react";
import avatar from "../../assets/Images/Ellipse.png";
import info from "../../assets/svgs/info.svg";
import file from "../../assets/svgs/cardDetails-file.svg";

const CardDetails = ({ selectedOffer, onBack }) => {
  if (!selectedOffer) return null;

  const hourlyRate = selectedOffer.rate || 0;
  const serviceFee = hourlyRate * 0.05; // 5% of the hourly rate
  const amountReceived = (hourlyRate - serviceFee).toFixed(2);
  const totalAmount = (hourlyRate * 3).toFixed(2);

  const offerDetails = [
    { label: 'Subject & Level', value: `${selectedOffer.subject} - ${selectedOffer.level}` },
    { label: 'Availability', value: selectedOffer.availability },
    { label: 'Time (Mon)', value: `${selectedOffer.startTime} → ${selectedOffer.endTime}` },
    { label: 'Time (Tue)', value: `${selectedOffer.startTime} → ${selectedOffer.endTime}` },
    { label: 'Time (Wed)', value: `${selectedOffer.startTime} → ${selectedOffer.endTime}` },
    { label: 'Start date', value: selectedOffer.startDate || 'Not provided' },
    { label: 'End date', value: selectedOffer.endDate || 'Not provided' },
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
  const shadowCustom = "shadow-custom";
  const textXs = "text-[12px]";
  const textSm = "text-[14px]";

  return (
    <div className="flex justify-center">
      <div className={`w-[700px] p-10 bg-white ${shadowCustom} rounded-lg`}>
        
        {/* Header */}
        <div className="flex justify-between">
          <p className={`${textMuted}`}>Offers &#62; <span className={textPrimary}>Review Offers</span></p>
          <button onClick={onBack} className={`mb-4 ${textXs} text-blue-500 underline`}>&larr; Back to Offers</button>
        </div>

        {/* Offer Information */}
        <div className="w-[436px] py-6">
          <h2 className="text-[#212224] text-[24px] font-[600] leading-[30px]">Review Offer</h2>
          <p className={`${textMuted}`}>Respond to offer from clients, you may also choose to renegotiate</p>
        </div>

        {/* Teacher and Offer Expiry */}
        <div className={`w-[645px] p-6 ${borderCard} flex justify-between mb-4`}>
          <div className="flex items-center gap-4">
            <img src={avatar} alt={selectedOffer.teacher} className="w-[50px] h-[50px] rounded-full" />
            <div>
              <h2 className="text-[16px] text-[#212224] font-semibold">{selectedOffer.teacher}</h2>
              <p className={textGray}>
                Offer expires: <span className={textError}>{selectedOffer.offer}</span>
              </p>
            </div>
          </div>
          <span className={textGray}>{selectedOffer.date}</span>
        </div>

        {/* Offer Details */}
        <div className={`mb-6 w-[645px] p-6 ${borderCard}`}>
          <h3 className="text-lg font-bold mb-6">Offer Details</h3>
          {offerDetails.map((detail, index) => (
            <div key={index} className="mb-4">
              <span className={textMuted}>{detail.label}</span>
              <h4 className={`py-1 ${textBody}`}>{detail.value}</h4>
            </div>
          ))}
        </div>

        {/* Payment Details */}
        <div className={`w-[600px] p-6 ${borderCard}`}>
          <h3 className="text-lg font-bold">Payment Details</h3>
          <div className="mb-2">
            <span className={textMuted}>Hourly rate:</span>
            <h4 className={`py-1 ${textBody}`}>${hourlyRate.toFixed(2)}/hr</h4>
            <span className={`${textXs} ${textGray} block`}>
              Shepherd charges a <span className={textPrimary}>5% service fee (-$3.00/hr)</span>
            </span>
          </div>
          <div className="mb-2">
            <span className={textMuted}>You will receive:</span>
            <h4 className={`py-1 ${textBody}`}>${amountReceived}</h4>
          </div>
          <div className="mb-2">
            <span className={textMuted}>Total amount for this offer:</span>
            <h4 className={`py-1 ${textBody}`}>${totalAmount}</h4>
            <span className={`${textXs} ${textGray}`}>You’ll be paid after each session</span>
          </div>
          <div className="w-[517px] bg-[#EFF4FA] p-4 mt-2 rounded-[12px] text-[12px]">
            <img src={info} alt="info" className="inline-block mr-2" />
            <p className={`${textGray} mt-4`}>
              Initial payment will not be made until after the client reviews the offer after the first session. The client may decide to continue with you or withdraw the offer.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Accept/Decline Offer */}
      <div className={`w-[370px] h-[305px] mt-20 ml-6 ${borderCard} p-6`}>
        <div className="flex justify-center items-center rounded-full mx-auto w-[80px] h-[80px] bg-[#F7F7F8]">
          <img src={file} alt="file" />
        </div>
        <h3 className={`${textGray} ${textSm} text-center py-10`}>Respond to the offer before it expires</h3>
        <button className={`w-[310px] py-2 mb-4 ${btnPrimary}`}>Accept Offer</button>
        <button className={`w-[310px] py-2 ${btnDanger}`}>Decline Offer</button>
      </div>
    </div>
  );
};

export default CardDetails;
