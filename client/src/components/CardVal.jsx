import React from 'react';

const CardVal = (props) => {
  const cropname = props.data.result.Name;
  const confidenceScore = props.data.score;
  const description = props.data.result["Description "];
  const precautions = [props.data.result["Precaution-1"], props.data.result["Precaution-2"], props.data.result["Precaution-3"]];
  const pesticides = [props.data.result["Pesticide-1"], props.data.result["Pesticide-2"], props.data.result["Pesticide-3"]];

  return (
    <div className="flex justify-center bg-transparent">
      <div className=" shadow-md rounded-lg p-6 w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3">
        <h2 className="text-xl font-bold mb-4">{cropname}</h2>
        <h3 className="text-xl font-bold mb-4">Confidence Score: <span className='text-red-400'>{confidenceScore}</span></h3>
        <p className="text-gray-600 mb-4">{description}</p>
      
        <h3 className="font-semibold mb-2">Precautions:</h3>
        <ul className="list-disc ml-6 mb-4">
          {precautions.map((precaution, index) => (
            <li key={index}>{precaution}</li>
          ))}
        </ul>
      
        <h3 className="font-semibold mb-2">Pesticides:</h3>
        <ul className="list-disc ml-6">
          {pesticides.map((pesticide, index) => (
            <li key={index}>{pesticide}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardVal;
