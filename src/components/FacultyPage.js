import React from 'react';

const FacultyPage = ({ navigateTo }) => {
  const facultyMembers = [
    {
      id: 0,
      name: "Prof. Mansukh T. Savaliya",
      department: "Computer Science",
      teaching: "Web Development",
      image: "https://www.vgecg.ac.in/images/faculties/com/mts.png",
      available: true,
    },
    {
      id: 1,
      name: "Prof. Amit H. Rathod",
      department: "Computer Science",
      teaching: "Database Management",
      image: "http://www.vgec.cteguj.in/uploads/faculty/Amit_.jpg",
      available: false,
    },
    {
      id: 2,
      name: "Prof. Nakul R. Dave",
      department: "Computer Science",
      teaching: "Artificial Intelligence",
      image: "https://www.vgecg.ac.in/images/faculties/com/nrd.png",
      available: true,
    },
    {
      id: 3,
      name: "Prof. Uttam Chauhan",
      department: "Computer Science",
      teaching: "Machine Learning",
      image: "https://www.vgecg.ac.in/images/faculties/com/ugc.png",
      available: false,
    },
    
    // Add more faculty details here
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Faculty Information</h2>
      <div className="row">
        {facultyMembers.map((faculty, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className={`card ${faculty.available ? 'bg-success' : 'bg-danger'}`}>
              <img
                src={faculty.image}
                alt={faculty.name}
                className="card-img-top"
                style={{ width: '150px', height: '150px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{faculty.name}</h5>
                <p className="card-text">Department: {faculty.department}</p>
                <p className="card-text">Teaching: {faculty.teaching}</p>
                <p className="card-text">
                  {faculty.available ? (
                    <span className="text-white">Available in Cabin</span>
                  ) : (
                    <span className="text-white">Not Available</span>
                  )}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigateTo('facultyDetail', faculty.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;
