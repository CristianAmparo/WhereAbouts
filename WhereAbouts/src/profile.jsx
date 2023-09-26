import React, { useState } from 'react';

const Profile = () => {
    const [selectedStatus, setSelectedStatus] = useState('In');
    const [availability, setAvailability] = useState('Available');
    const [location, setLocation] = useState('');
 

    

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };
    const handleAvailabilityChange = (event) => {
        setAvailability(event.target.value);
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const Submit = () => {
      const data = {
        selectedStatus,
        availability,
        location
      }

      console.log(data);
    }
   
  return (
    <>
      <section className="fixed right-0 top-0  z-0 h-screen pt-28 w-96 bg-[#F8EFD1] shadow-2xl">
        <div className="flex flex-col items-center">
          <img className='w-32' src="public/images/profile.png" alt="" />
          <h3 className="text-2xl font-bold">Cristian Amparo</h3>
          <h3>Department of Information Technology</h3>
          <div className="mt-5 justify-center bg-black w-3/4 h-0.5"></div>
        </div>
        <div>
          <h1 className='pt-2'>WhereAbouts</h1>
          <div className="flex justify-center gap-3">
            <label className={`status-label ${selectedStatus === 'In' && 'selected'}`}>
              <input
                type="radio"
                name="status"
                value="In"
                checked={selectedStatus === 'In'}
                onChange={handleStatusChange}
                className="hidden"
              />
              <h4 className={`${selectedStatus === "In"? "px-6 outline outline-yellow-400" : "" } bg-green-700  text-lg font-bold w-max px-4 rounded-2xl border-2 border-black`}>In</h4>
            </label>
            <label className={`status-label ${selectedStatus === 'Out' && 'selected'}`}>
              <input
                type="radio"
                name="status"
                value="Out"
                checked={selectedStatus === 'Out'}
                onChange={handleStatusChange}
                className="hidden"
              />
                <h4 className={`${selectedStatus === "Out"? "px-6 outline outline-yellow-400" : "" } bg-red-600 text-lg font-bold w-max px-4 rounded-2xl border-2 border-black`}>Out</h4>
            </label>
            <label className={`status-label ${selectedStatus === 'Absent' && 'selected'}`}>
              <input
                type="radio"
                name="status"
                value="Absent"
                checked={selectedStatus === 'Absent'}
                onChange={handleStatusChange}
                className="hidden"
              />
              <h4 className={`${selectedStatus === "Absent"? "px-6 outline outline-yellow-400" : "" } bg-gray-400 text-lg font-bold w-max px-4 rounded-2xl border-2 border-black`}>Absent</h4>
            </label>
          </div>
          <h3 className='text-center pt-3'>Choose your status!</h3>
          <div className="my-5 justify-center bg-black w-3/4 h-0.5 mx-auto"></div>

            <div className="flex justify-center gap-3">

              <label className={`status-label ${selectedStatus === 'In' && 'selected'}`}>
              <input
                type="radio"
                name="availability"
                value="Available"
                checked={availability === 'Available'}
                onChange={handleAvailabilityChange}
                className="hidden"
              />
              <h4 className={`${availability === "Available"? "px-6 outline outline-yellow-400" : "" } bg-yellow-500  text-sm font-bold w-max py-1 px-4 rounded-2xl border-2 border-black`}>Available</h4>
            </label>
            <label className={`status-label ${selectedStatus === 'Out' && 'selected'}`}>
              <input
                type="radio"
                name="availability"
                value="Unavailable"
                checked={availability === 'Unavailable'}
                onChange={handleAvailabilityChange}
                className="hidden"
              />
                <h4 className={`${availability === "Unavailable"? "px-6 outline outline-yellow-400" : "" } bg-gray-200 text-sm font-bold w-max py-1 px-4 rounded-2xl border-2 border-black`}>Unavailable</h4>
            </label>
            </div>
            <h3 className='text-center pt-3'>Choose your availability!</h3>
            <div className="my-5  bg-black w-3/4 h-0.5 mx-auto"></div>

            <div className=' text-center mb-16'> 
              <input 
                type="text"
                name="location"
                value={location}
                onChange={handleLocationChange}
                className='shadow-md  w-2/3 p-4 ' 
                placeholder='Type your current location'/>
              <h3 className='text-center pt-3'>Where are you?</h3>
            </div>
            <div className='text-center'>
                <button className='mx-auto w-2/3 p-2 rounded-lg shadow-lg bg-slate-500 text-white text-lg self-center' onClick={Submit}>Update</button>
            </div>
        </div>
      </section>
    </>
  );
}

export default Profile;