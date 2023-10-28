import React from 'react';

const HomePage = ({ navigateTo }) => {
  return (
    <div className="container mt-5">
      <h1>Welcome to My College</h1>
      
      <section className="mt-5">
        <h2>Faculty Information</h2>
        <p>
          Our college is proud to have a dedicated and experienced faculty
          team. Learn more about our esteemed professors and instructors.
        </p>
        <button
          className="btn btn-primary"
          onClick={() => navigateTo('faculty')}
        >
          Explore Faculty
        </button>
      </section>

      <section className="mt-5">
        <h2>Lab Information</h2>
        <p>
          Discover our state-of-the-art laboratories equipped with the latest
          technology and equipment for hands-on learning.
        </p>
        <button
          className="btn btn-success"
          onClick={() => navigateTo('lab')}
        >
          Explore Labs
        </button>
      </section>

      <section className="mt-5">
        <h2>Classes Information</h2>
        <p>
          Explore our diverse range of classes and courses designed to provide
          a comprehensive educational experience.
        </p>
        <button
          className="btn btn-info"
          onClick={() => navigateTo('class')}
        >
          Explore Classes
        </button>
      </section>
    </div>
  );
};

export default HomePage;
