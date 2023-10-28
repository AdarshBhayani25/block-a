import React from 'react';

const FacultyDetail = ({ facultyId }) => {
  const facultyDetails = [
    {
      id: 0,
      name: "Prof. Mansukh T. Savaliya",
      department: "Computer Science",
      teaching: "Web Development",
      image: "https://www.vgecg.ac.in/images/faculties/com/mts.png",
      available: true,
      bio: "A brief bio about Prof. Mansukh T. Savaliya...",
    },
    {
      id: 1,
      name: "Prof. Amit H. Rathod",
      department: "Computer Science",
      teaching: "Database Management",
      image: "http://www.vgec.cteguj.in/uploads/faculty/Amit_.jpg",
      available: false,
      bio: "A brief bio about Prof. Amit H. Rathod...",
    },
    {
      id: 2,
      name: "Prof. Nakul R. Dave",
      department: "Computer Science",
      teaching: "Artificial Intelligence",
      image: "https://www.vgecg.ac.in/images/faculties/com/nrd.png",
      available: true,
      bio: "A brief bio about Prof. Nakul R. Dave...",
    },
    {
      id: 3,
      name: "Prof. Uttam Chauhan",
      department: "Computer Science",
      teaching: "Machine Learning",
      image: "https://www.vgecg.ac.in/images/faculties/com/ugc.png",
      available: false,
      bio: "A brief bio about Prof. Uttam Chauhan...",
    },
    
    // Add more faculty details here
  ];

  const facultyDetail = facultyDetails.find((faculty) => faculty.id === facultyId);

  return (
    <div className="container mt-5">
      <div className="card">
        <img
          src={facultyDetail.image}
          alt={facultyDetail.name}
          className="card-img-top"
          style={{ width: '150px', height: '150px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{facultyDetail.name}</h5>
          <p className="card-text">Department: {facultyDetail.department}</p>
          <p className="card-text">Teaching: {facultyDetail.teaching}</p>
          <p className="card-text">
            {facultyDetail.available ? (
              <span className="text-success">Available in Cabin</span>
            ) : (
              <span className="text-danger">Not Available</span>
            )}
          </p>
          <p className="card-text">{facultyDetail.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetail;
