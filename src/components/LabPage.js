import React from 'react';

const LabPage = () => {
  const labs = [
    {
      name: "Computer Science Lab",
      specialization: "DS",
      equipment: "Computers, Servers",
      image: "https://www.vgecg.ac.in/images/central_facility/cc.jpg", // Add your image URL
    },
    {
      name: "Computer Science Lab",
      specialization: "Web devlopment",
      equipment: "Computers, Servers",
      image: "https://www.vgecg.ac.in/images/facilities/it/b104.jpg", // Add your image URL
    },
    // Add more labs here
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Lab Information</h2>
      <div className="row">
        {labs.map((lab, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={lab.image} alt={lab.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{lab.name}</h5>
                <p className="card-text">Specialization: {lab.specialization}</p>
                <p className="card-text">Equipment: {lab.equipment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabPage;
