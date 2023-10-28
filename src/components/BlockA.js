import React from 'react';

const BlockA = ({ navigateTo }) => {
    return (
        <div className="container mt-5">
            <h1>Block A</h1>
            <p>
                Block A is one of the main academic buildings on our campus. It houses various departments, classrooms, and faculty offices.
            </p>

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Faculty</h5>
                            <p className="card-text">Explore faculty members in Block A.</p>
                            <button className="btn btn-primary" onClick={() => navigateTo('faculty')}>
                                View Faculty
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Labs</h5>
                            <p className="card-text">Discover labs and facilities in Block A.</p>
                            <button className="btn btn-primary" onClick={() => navigateTo('lab')}>
                                View Labs
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Classes</h5>
                            <p className="card-text">Explore classes and courses in Block A.</p>
                            <button className="btn btn-primary" onClick={() => navigateTo('class')}>
                                View Classes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockA;
