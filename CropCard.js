// frontend/src/components/CropCard.jsx

import React from "react";

const CropCard = ({ cropName, imageUrl, description }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
      <img src={imageUrl} alt={cropName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-green-700 mb-2">{cropName}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CropCard;
