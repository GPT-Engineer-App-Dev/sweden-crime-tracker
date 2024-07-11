import React from 'react';
import PropTypes from 'prop-types';
import './CrimeCard.css'; // Assuming you have some basic styles for the card

const CrimeCard = ({ crime }) => {
  return (
    <div className="crime-card">
      <h2 className="crime-title">{crime.title}</h2>
      <p className="crime-date">{new Date(crime.date).toLocaleDateString()}</p>
      <p className="crime-description">{crime.description}</p>
      <p className="crime-location">{crime.location}</p>
    </div>
  );
};

CrimeCard.propTypes = {
  crime: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default CrimeCard;