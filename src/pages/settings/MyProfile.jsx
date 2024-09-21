import React, { useReducer } from 'react';
import { FaPen } from 'react-icons/fa';
import Card from './Card';

// Initial state for the reducer
const initialState = {
  email: 'lesliepeters@gmail.com',
  hourlyRate: 20.0,
  editMode: {
    aboutMe: false,
    subjects: false,
    qualifications: false,
    availability: false,
  },
  errors: {
    email: '',
    hourlyRate: '',
  },
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_HOURLY_RATE':
      return { ...state, hourlyRate: action.payload };
    case 'TOGGLE_EDIT':
      return {
        ...state,
        editMode: { ...state.editMode, [action.payload]: !state.editMode[action.payload] },
      };
    case 'SET_ERRORS':
      return { ...state, errors: { ...state.errors, ...action.payload } };
    default:
      return state;
  }
};

const Profile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit action with validation if needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-6">
        {/* User Information */}
          <h2 className="text-2xl font-semibold">My Profile</h2>
        <Card title="">
          <div className="bg-white shadow p-4 rounded-md">
            <p className="text-lg">Leslie Peters</p>
            <p className="text-sm text-gray-500">{state.email}</p>
            <p className="text-md font-medium mt-2">
              Hourly Rate: <span className="text-green-600">${state.hourlyRate}/hr</span>
            </p>
          </div>
        </Card>
         {/* Video Section */}
         <Card title="">
          <div className="flex justify-center items-center h-48 bg-gray-200 rounded-md">
            <div className="text-gray-600">Update Intro Video</div>
          </div>
        </Card>
        {/* About Me Section */}
        <Card >
          <div className="flex p-1 justify-between items-center">
            <h3 className="text-xl font-semibold">About Me</h3>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_EDIT', payload: 'aboutMe' })}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaPen />
            </button>
          </div>
          {state.editMode.aboutMe ? (
            <textarea
              className="w-full h-20 p-2 border rounded-md"
              defaultValue="Quam eros suspendisse a pulvinar sagittis mauris. Vel dui adipiscing id faucibus consectetur amet."
            />
          ) : (
            <p className="text-gray-700">
              Quam eros suspendisse a pulvinar sagittis mauris. Vel dui adipiscing id faucibus consectetur amet.
            </p>
          )}
        </Card>

        {/* Subject Offered Section */}
        <Card >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Subjects Offered</h3>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_EDIT', payload: 'subjects' })}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaPen />
            </button>
          </div>
          {state.editMode.subjects ? (
            <textarea
              className="w-full h-20 p-2 border rounded-md"
              defaultValue="Economics, Mathematics, Yoruba"
            />
          ) : (
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-10">
                  <th className="px-4 py-2 border border-gray-300">Subject</th>
                  <th className="px-4 py-2 border border-gray-300">Level</th>
                  <th className="px-4 py-2 border border-gray-300">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 bg-gray-100">Economics</td>
                  <td className="px-4 py-2 border border-gray-300">GCSE</td>
                  <td className="px-4 py-2 border border-gray-300">$10.00/hr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 bg-gray-100">Mathematics</td>
                  <td className="px-4 py-2 border border-gray-300">A-Level</td>
                  <td className="px-4 py-2 border border-gray-300">$10.00/hr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 bg-gray-100">Yoruba</td>
                  <td className="px-4 py-2 border border-gray-300">Grade 12</td>
                  <td className="px-4 py-2 border border-gray-300">$12.00/hr</td>
                </tr>
              </tbody>
            </table>
          )}
        </Card>

        {/* Qualifications Section */}
        <Card title="Qualifications" editButton={true}>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <div>
                <h3 className="text-base font-semibold">Indian Institute of Management (IIM), Bangalore</h3>
                <p className="text-sm text-gray-600">Master of Business Administration (MBA), Information System</p>
                <p className="text-sm text-gray-500">2008 - 2010</p>
              </div>
            </div>

            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <div>
                <h3 className="text-base font-semibold">Indian Institute of Management (IIM), Bangalore</h3>
                <p className="text-sm text-gray-600">Master of Business Administration (MBA), Information System</p>
                <p className="text-sm text-gray-500">2008 - 2010</p>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Availability Section */}
        <Card title="Availability" editButton={true}>
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th>Time</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center justify-center">
                  <span className="mr-2">☁️</span> 8 AM → 12 PM
                </td>
                <td className="bg-gray-200"></td>
                <td className="bg-gray-200"></td>
                <td className="bg-gray-200"></td>
                <td className="bg-gray-200"></td>
                <td className="bg-gray-200"></td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td className="flex items-center justify-center">
                  <span className="mr-2">☁️</span> 12 PM → 5 PM
                </td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="flex items-center justify-center">
                  <span className="mr-2">☁️</span> 5 PM → 9 PM
                </td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Card>

      </div>
    </form>
  );
};

export default Profile;
