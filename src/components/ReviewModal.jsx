import React, { useEffect, useState } from "react";
import Calender from "../assets/svgs/Calendar.svg";
import ReviewContent from "./ReviewContent";

function ReviewModal({ showReviewModal, setShowReviewModal }) {
    const [isVisible, setIsVisible] = useState(showReviewModal);

    useEffect(() => {
        if (showReviewModal) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [showReviewModal]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-30 flex items-center justify-center transition-all duration-300 ease-in-out">
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
                    showReviewModal ? "opacity-50" : "opacity-0"
                }`}
                onClick={() => setShowReviewModal(false)}
            ></div>

            <div className="bg-white max-h-full z-30 p-6 rounded-lg shadow-lg relative w-[95%] max-w-[422px] h-fit transition-all duration-300 ease-in-out fade-in-out">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={() => setShowReviewModal(false)}
                >
                    <img src={Calender} alt="" />
                </button>
                <div className=" items-center text-center border-b p-3">
                    <h3 className="text-lg leading-6 text-[#212224] font-[500] text-[14]">
                        Big Cedar dropped feedback for you
                    </h3>
                </div>
                <h3 className="mt-2 ml-3">Rating</h3>

                <ReviewContent />
                <div className="flex text-left justify-center items-center border rounded-xl w-full mt-2 max-w-md mx p-4 text-[#212224] font-[400]">
                    Anything is possible when you believe in yourself! This is
                    my first React project,If it impresses you,give me a thumbs
                    up!! Feel free to modify it if you need to add or change
                    anything
                </div>
            </div>
        </div>
    );
}

export default ReviewModal;
