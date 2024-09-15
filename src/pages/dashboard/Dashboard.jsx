import React, { useState } from "react";
import schedule_logo from "../../assets/svgs/schedule.svg";
import no_schedule from "../../assets/svgs/no_schedule.svg";
import { FaCalendar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Greeting } from "../../components/Greeting";
import {
  stats,
  transactions,
  userName,
  weather,
} from "../../utils/dashboard_data";
import Stats from "../../components/Stats";
import Transactions from "../../components/Transactions";
import Events from "../../components/Events";
// import { UserContext } from "../../context/UserContext";

function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());

  // const { user } = useContext(UserContext);

  const handleChange = (e) => {
    setStartDate(e);
  };
  const ExampleCustomInput = React.forwardRef(
    ({ value, onClick, className }, ref) => (
      <button className={className} onClick={onClick} ref={ref}>
        <FaCalendar />
      </button>
    )
  );

  return (
    <div className="p-5">
      {/* Greeting Section */}
      <Greeting
        // userName={user?.firstName}
        userName={userName}
        time="Good evening"
        weather={weather}
      />

      {/* Stats Section */}
      <Stats stats={stats} />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-4 mt-5">
        {/* Recent Transactions */}
        <Transactions transactions={transactions} />

        {/* Schedule */}
        <div className="min-w-[40%] border rounded-lg border-[#EEEFF2] p-4">
          <div className="flex justify-between">
            <p className="font-semibold mb-4 flex items-center gap-2">
              <span>
                <img src={schedule_logo} alt="schedule logo" />
              </span>
              Schedule
            </p>

            <DatePicker
              selected={startDate}
              onChange={handleChange}
              customInput={
                <ExampleCustomInput className="example-custom-input" />
              }
            />
          </div>

          <hr />
          <div className="space-y-4 mt-4">
            {/* Event Item */}
            {/* CALENDAR */}

            <div className="flex bg-white justify-start md:justify-center rounded-lg mx-auto py-2 px-2 md:mx-12 ">
              <div className="flex group  rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
                <div className="flex items-center px-4 py-4">
                  <div className="text-center">
                    <p className="text-gray-900 mt-3 group-hover:font-bold transition-all text-2xl	duration-300">
                      12
                    </p>
                    <p className="text-gray-900 text-xs transition-all  group-hover:font-semibold duration-300">
                      {" "}
                      SUN{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex group rounded-full mx-1 transition-all	duration-300 cursor-pointer justify-center  w-16">
                <div className="flex items-center px-4 py-4">
                  <div className="text-center">
                    <p className="text-gray-900  mt-3 group-hover:font-bold transition-all text-2xl	duration-300">
                      {" "}
                      13
                    </p>
                    <p className="text-gray-900  text-xs transition-all font-normal group-hover:font-semibold 	duration-300">
                      {" "}
                      MON
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex group  bg-[#F0F6FE]  rounded-full mx-1 cursor-pointer justify-center relative h-20 w-20">
                <div className="flex items-center px-4 my-2 py-4">
                  <div className="text-center">
                    <p className="text-[#207DF7] mt-3 font-bold text-2xl">
                      {" "}
                      14{" "}
                    </p>
                    <p className="text-gray-900 text-xs font-semibold"> TUE </p>
                  </div>
                </div>
              </div>

              <div className="flex group  rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
                <div className="flex items-center px-4 py-4">
                  <div className="text-center">
                    <p className="text-gray-900  mt-3 group-hover:font-bold transition-all text-2xl	duration-300">
                      {" "}
                      15{" "}
                    </p>
                    <p className="text-gray-900  text-xs transition-all font-normal group-hover:font-semibold 	duration-300">
                      {" "}
                      WED{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex group  rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
                <div className="flex items-center px-4 py-4">
                  <div className="text-center">
                    <p className="text-gray-900 mt-3  transition-all	duration-300 text-2xl">
                      {" "}
                      16{" "}
                    </p>
                    <p className="text-gray-900 text-xs transition-all  group-hover:font-semibold duration-300">
                      {" "}
                      THU{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex group  rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
                <div className="flex items-center px-4 py-4">
                  <div className="text-center">
                    <p className="text-gray-900 mt-3  transition-all	duration-300 text-2xl">
                      {" "}
                      17{" "}
                    </p>
                    <p className="text-gray-900 text-xs transition-all  group-hover:font-semibold duration-300">
                      {" "}
                      FRI{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[#6E7682] text-xs ml-6 font-normal">
              Upcoming Events
            </p>
            <Events />
            <p className="text-[#6E7682] text-xs ml-6">Tomorrow</p>

            {/* Placeholder for no more classes */}
            <div className="gap-4 flex items-center flex-col text-gray-400 text-xs">
              <img src={no_schedule} alt="no schedule" />
              No classes scheduled for tomorrow
            </div>
          </div>
        </div>

        {/* <Schedule /> */}
      </div>
    </div>
  );
}

export default Dashboard;
