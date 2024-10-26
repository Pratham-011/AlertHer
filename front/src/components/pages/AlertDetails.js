// import React, { useEffect, useState } from 'react';
// import Navbar from '../Navbar';

// function AlertDetails() {
//   const [alertData, setAlertData] = useState(null); // State to hold fetched data
//   const [loading, setLoading] = useState(true); // State to manage loading state
//   const [error, setError] = useState(null); // State to manage errors

//   useEffect(() => {
//     const fetchAlertData = async () => {
//       try {
//         const response = await fetch('http://your-flask-api-endpoint/alerts'); // Replace with your Flask API endpoint
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setAlertData(data); // Set the fetched data
//       } catch (error) {
//         setError(error.message); // Set error message if there's an error
//       } finally {
//         setLoading(false); // Set loading to false after data is fetched
//       }
//     };

//     fetchAlertData(); // Call the fetch function
//   }, []); // Empty dependency array to run only once on component mount

//   if (loading) {
//     return <div>Loading...</div>; // Render loading state
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Render error state
//   }

//   return (
//     <div>
//       <Navbar />
//       <h1>Alert Details</h1>
//       {alertData && (
//         <div>
//           <h2>Location: {alertData.location}</h2>
//           <h3>Incident Video:</h3>
//           <video width="600" controls>
//             <source src={alertData.videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AlertDetails;


import React from 'react';
import Navbar from '../Navbar';

function AlertDetails() {
  // Hard-coded data for the UI
  const alertData = {
    location: '123 Main St, Springfield, USA',
    videoUrl: 'https://www.example.com/path/to/video.mp4', // Example video URL
  };

  return (
    <div>
    <Navbar></Navbar>
    <div className="container mt-4">
      <h1 className="mb-4">Alert Details</h1>
      <div className="alert alert-info p-3">
        <h2 className="mb-3">Location: {alertData.location}</h2>
        <h3 className="mb-3">Incident Video:</h3>
        <video className="w-100" controls>
          <source src={alertData.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </div>
  );
}

export default AlertDetails;

