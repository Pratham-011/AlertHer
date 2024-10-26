import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';

const heatMapData = [
  [51.505, -0.09, 0.5],
  [51.51, -0.1, 0.6],
  [51.51, -0.12, 0.8],
  [51.49, -0.08, 0.7],
  [51.49, -0.1, 0.9],
];

function About() {
  useEffect(() => {
    const map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    // Initialize the heatmap layer
    const heatLayer = L.heatLayer(heatMapData, {
      radius: 20,
      blur: 15,
      maxZoom: 13,
    }).addTo(map);

    // Cleanup on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Risk Areas Heat Map</h1>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
}

export default About;






//When we will fetch the data from the backend flask 
// const fetchHeatMapData = async () => {
//     const response = await fetch('http://your-flask-api-endpoint/heatmap');
//     const data = await response.json();
//     // Assume the data is in the correct format
//     // e.g., [[latitude, longitude, intensity], ...]
//     L.heatLayer(data, { radius: 20, blur: 15 }).addTo(map);
//   };
  
//   // Call the function inside useEffect
//   useEffect(() => {
//     // Initialize map...
//     fetchHeatMapData(); // Fetch data from API
//   }, []);






// const [heatMapData, setHeatMapData] = useState([]);

// // Fetch heatmap data from the API
// const fetchHeatMapData = async () => {
//   try {
//     const response = await fetch('http://your-flask-api-endpoint/api/heatmap'); // Replace with your API endpoint
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     setHeatMapData(data); // Assuming the API returns data in the required format
//   } catch (error) {
//     console.error('Error fetching heatmap data:', error);
//   }
// };

// useEffect(() => {
//   fetchHeatMapData(); // Fetch the heatmap data on component mount

//   const map = L.map('map', {
//     center: [51.505, -0.09],
//     zoom: 13,
//     layers: [
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }),
//     ],
//   });

//   // Add heatmap layer
//   const heatLayer = L.heatLayer(heatMapData, {
//     radius: 20,
//     blur: 15,
//     maxZoom: 13,
//   }).addTo(map);

//   // Cleanup on component unmount
//   return () => {
//     map.remove();
//   };
// }, [heatMapData]); // Re-run effect when heatMapData changes