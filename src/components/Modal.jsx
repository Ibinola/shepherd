import React, { useEffect, useState } from "react";
import Calender from "../assets/svgs/Calendar.svg";
import EventCard from "../components/EventCard";
import EventCardgreen from "./EventCardgreen";
import TotalsDisplay from "./TotalsDisplay";

function Modal({ showModal, setShowModal }) {
    const [isVisible, setIsVisible] = useState(showModal);

    useEffect(() => {
        if (showModal) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Match duration with CSS transition
            return () => clearTimeout(timer);
        }
    }, [showModal]);

    if (!isVisible) return null;

    return (
        <div
            className={`my-5 fixed inset-0 z-30 flex items-center justify-center fade-in-out transition-all duration-300 ease-in-out
      }`}
        >
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
                    showModal ? "opacity-50" : "opacity-0"
                }`}
                onClick={() => setShowModal(false)} // Close modal on click outside
            ></div>

            {/* Modal content */}
            <div className="p-4 w-fit h-full overflow-y-auto relative ">
                <div
                    className={`bg-white z-30 p-6 rounded-lg shadow-lg relative max-w-[422px] w-full transition-transform duration-300 ease-in-out transform ${
                        showModal ? "translate-y-0" : "translate-y-10 opacity-0"
                    }`}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        onClick={() => setShowModal(false)}
                    >
                        <span>
                            <img src={Calender} alt="" />
                        </span>
                    </button>

                    {/* Modal body */}
                    <div className="">
                        <h3 className="text-lg leading-6 text-[#212224] font-[500]">
                            Monthly report
                        </h3>
                        <div className="mt-3 text-sm text-gray-500 border-b">
                            <p>Previous classes</p>

                            <EventCard />
                        </div>

                        <div className="mt-3 text-sm text-gray-500">
                            <p>Upcoming classes</p>

                            <EventCardgreen />
                        </div>
                        <TotalsDisplay />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
