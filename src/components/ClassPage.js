import React from 'react';

const ClassPage = () => {
    const classes = [
        {
            name: "Classroom 101",
            capacity: "50 students",
            type: "Lecture",
            image: "https://images.shiksha.com/mediadata/images/1554112836phpCNw70P.jpeg", // Add your image URL
        },
        {
            name: "Classroom 201",
            capacity: "30 students",
            type: "Lab",
            image: "https://www.vgecg.ac.in/images/event_photo/123.png", // Add your image URL
        },
        // Add more classes here
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center">Classes Information</h2>
            <div className="row">
                {classes.map((classroom, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img
                                src={classroom.image}
                                alt={classroom.name}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{classroom.name}</h5>
                                <p className="card-text">Capacity: {classroom.capacity}</p>
                                <p className="card-text">Class Type: {classroom.type}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassPage;
