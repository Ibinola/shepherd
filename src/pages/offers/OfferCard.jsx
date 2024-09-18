import React from "react";
import offersFile from "../../assets/svgs/offersfile.svg"
import avatar from "../../assets/svgs/avatar.svg";
import pen from "../../assets/svgs/pen.svg";
import star from "../../assets/svgs/Star.svg";
import glitters from "../../assets/svgs/glittrts.svg";

const OfferCard = ({ offer, onClick, file, borderCard, textGray, textSm, btnPrimary, btnDanger }) => {
  return (
    <div
      onClick={() => onClick(offer)} // When clicked, pass the offer to the parent
      className="offer-card border bg-white shadow-lg p-4 rounded-lg flex flex-col justify-between cursor-pointer"
    >
      <div className="flex justify-between">
        <div className="w-[42px] h-[42px] rounded-[50%] bg-[#F7F7F8] flex justify-center items-center">
         <img src={offersFile} alt="file" />
        </div>
        <div className="flex gap-4 ">
          {offer.updated && (
            <div className="w-[81px] p-[3px] rounded-[4px] justify-center flex items-center gap-[.125rem] bg-[#F0F6FE] text-[#207DF7] text-[12px] font-[500]">
              <img src={pen} alt="pen" />
              <h4>Updated</h4>
            </div>
          )}
          {offer.status === "New" && (
            <div className="bg-[#F4F5F6] w-[57px] p-[.5rem] rounded-[.25rem] text-[#6E7682] justify-center flex items-center gap-[.125rem] text-center font-[500] text-[12px]">
              <img src={glitters} alt="glitters" />
              <span>New</span>
            </div>
          )}
          {offer.perfectOffer && (
            <div className="justify-center flex items-center gap-[.125rem] text-[.75rem] bg-[#F0F6FE] w-[106px] p-[.5rem] rounded-[.25rem] text-[#207DF7] font-500">
              <img src={star} alt="star" />
              <span>Perfect Offer</span>
            </div>
          )}
          {offer.date && (
            <span className="text-[#6E7682] text-[12px] w-[83px] p-[.1875rem] rounded-[.25rem] bg-[#F4F5F6] flex items-center justify-center">
              {offer.date}
            </span>
          )}
        </div>
      </div>

      <div className="offer-header flex items-center justify-between">
        <div className="offer-subject mt-2 flex gap-4">
          <h4 className="text-[16px] font-[500] leading-[21px] text-[#212224]">
            {offer.subject}
          </h4>
          <span className="w-[73px] p-[2px] bg-[#FFF2EB] text-center rounded-[.25rem] text-[12px] text-orange-500">
            {offer.level}
          </span>
        </div>

        <div className="rate text-[24px] p-2 leading-[18px] font-[500]">
          <span className="rate font-bold">${offer.rate}/hr</span>
        </div>
      </div>

      <div className="text-[#6E7682] text-[14px] leading-[20px] flex mt-2">
        <p>{offer.frequency}</p>.
        <p>
          {offer.startTime} &rarr; {offer.endTime}
        </p>
      </div>
      <hr className="mt-4 bg-[#EEEFF2]" />

      <div className="offer-footer flex items-center gap-2 mt-4">
        <img src={avatar} alt={offer.teacher} />
        <span className="text-[#585F68] text-[14px] font-[500]">
          {offer.teacher}
        </span>
      </div>

      <div className="offer-timer">
        {offer.timeLeft && (
          <span className="text-red-500 flex justify-end">
            {offer.timeLeft}
          </span>
        )}
      </div>
    </div>
  );
};

export default OfferCard;
