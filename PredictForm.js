import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// Fix default Marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const PredictForm = () => {
  const [formData, setFormData] = useState({
    Rainfall: '',
    Area: '',
    District_Name: '',
    Season_Encoded: '',
    Soil_Quality_Encoded: '',
    Crop: '',
  });

  const [result, setResult] = useState(null);
  const [graphData, setGraphData] = useState([]);
  const resultRef = useRef(null);

  const [mapInfo, setMapInfo] = useState({
    center: [19.7515, 75.7139],
    zoom: 7,
    markers: []
  });

  const districtCoordinates = {
    Ahmednagar: [19.0948, 74.7477], Akola: [20.7096, 77.0085], Amravati: [20.9374, 77.7796],
    Aurangabad: [19.8762, 75.3433], Beed: [18.9891, 75.7601], Bhandara: [21.1667, 79.65],
    Buldhana: [20.5293, 76.1804], Chandrapur: [19.9615, 79.2961], Dhule: [20.9042, 74.7749],
    Gadchiroli: [20.1926, 80.0035], Gondia: [21.4602, 80.192], Hingoli: [19.719, 77.1474],
    Jalgaon: [21.0077, 75.5626], Jalna: [19.841, 75.8864], Kolhapur: [16.705, 74.2433],
    Latur: [18.4088, 76.5604], Mumbai: [19.076, 72.8777], Nagpur: [21.1458, 79.0882],
    Nanded: [19.1383, 77.321], Nandurbar: [21.3662, 74.239], Nashik: [20.0059, 73.791],
    Osmanabad: [18.186, 76.0419], Parbhani: [19.2704, 76.7601], Pune: [18.5204, 73.8567],
    Raigad: [18.5236, 73.2896], Ratnagiri: [16.9902, 73.312], Sangli: [16.8544, 74.5815],
    Satara: [17.6805, 74.0183], Sindhudurg: [16.1236, 73.691], Solapur: [17.6599, 75.9064],
    Thane: [19.2183, 72.9781], Wardha: [20.7381, 78.5967], Washim: [20.1114, 77.1334],
    Yavatmal: [20.3893, 78.1306]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));

    if (name === 'District_Name' && districtCoordinates[value]) {
      setMapInfo({
        center: districtCoordinates[value],
        zoom: 10,
        markers: [{ position: districtCoordinates[value], label: value }]
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setResult(data.predicted_production);

      const area = parseFloat(formData.Area);
      const production = parseFloat(data.predicted_production);
      const yieldPerHectare = production / area;

      setGraphData([
        { name: 'Area (Ha)', value: area },
        { name: 'Production (Qtls)', value: production },
        { name: 'Yield (Qtls/Ha)', value: parseFloat(yieldPerHectare.toFixed(2)) },
      ]);

      setTimeout(() => {
        if (resultRef.current) {
          resultRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const ChangeMapCenter = ({ center }) => {
    const map = useMap();
    map.setView(center);
    return null;
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Enter Details to Predict Crop Yield</h2>

      {/* Flexbox Layout */}
      <div className="d-flex flex-wrap justify-content-between">

        {/* Left Side - Form */}
        <div className="flex-grow-1 me-4" style={{ minWidth: '300px', maxWidth: '500px' }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Rainfall (mm):</label>
              <input type="number" className="form-control" name="Rainfall" value={formData.Rainfall} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Area (in Hectare):</label>
              <input type="number" className="form-control" name="Area" value={formData.Area} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">District Name:</label>
              <select className="form-control" name="District_Name" value={formData.District_Name} onChange={handleChange} required>
                <option value="">Select District</option>
                {Object.keys(districtCoordinates).map((district, index) => (
                  <option key={index} value={district}>{district}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Season:</label>
              <select className="form-control" name="Season_Encoded" value={formData.Season_Encoded} onChange={handleChange} required>
                <option value="">Select Season</option>
                <option value="Rabi">Rabi</option>
                <option value="Kharif">Kharif</option>
                <option value="Whole Year">Whole Year</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Soil Quality:</label>
              <select className="form-control" name="Soil_Quality_Encoded" value={formData.Soil_Quality_Encoded} onChange={handleChange} required>
                <option value="">Select Soil Quality</option>
                <option value="Poor">Poor</option>
                <option value="Moderate">Moderate</option>
                <option value="Good">Good</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Crop:</label>
              <select className="form-control" name="Crop" value={formData.Crop} onChange={handleChange} required>
                <option value="">Select Crop</option>
                <option value="Groundnut">Groundnut</option>
                <option value="Cotton">Cotton</option>
                <option value="Rice">Rice</option>
                <option value="Barley">Barley</option>
                <option value="Gram">Gram</option>
                <option value="Maize">Maize</option>
                <option value="Mustard">Mustard</option>
                <option value="Peas">Peas</option>
                <option value="Pulses">Pulses</option>
                <option value="Soybean">Soybean</option>
                <option value="Sugarcane">Sugarcane</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>

        {/* Right Side - Graph */}
        {graphData.length > 0 && (
          <div className="flex-grow-1" style={{ minWidth: '300px', maxWidth: '600px' }}>
            <h4 className="text-center mb-4">Crop Production Analysis</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={graphData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
                <Bar dataKey="value" fill="url(#colorValue)" animationDuration={1500} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

      </div>

      {/* Map Section */}
      <div className="mt-5">
        <h4 className="text-center mb-3">Selected District Location</h4>
        <MapContainer center={mapInfo.center} zoom={mapInfo.zoom} style={{ height: '400px', width: '100%' }}>
          <ChangeMapCenter center={mapInfo.center} />
          <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {mapInfo.markers.map((marker, idx) => (
            <Marker key={idx} position={marker.position}>
              <Popup>{marker.label}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Result Section */}
      {result && (
        <div ref={resultRef} className="mt-4 d-flex justify-content-center">
          <div className="card" style={{ width: '20rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="card-body">
              <h5 className="card-title text-center" style={{ fontWeight: 'bold', color: '#007bff' }}>Total Production</h5>
              <p className="card-text text-center" style={{ fontSize: '1.5rem', fontWeight: '500' }}>
  {(result / parseFloat(formData.Area || 1)).toFixed(3)} Quintals/Ha
</p>              <h5 className="card-title text-center mt-4" style={{ fontWeight: 'bold', color: '#007bff' }}>Crop Yield</h5>
              <p className="card-text text-center" style={{ fontSize: '1.5rem', fontWeight: '500' }}>{(result / parseFloat(formData.Area || 1)).toFixed(3)} Quintals/Ha</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PredictForm;
