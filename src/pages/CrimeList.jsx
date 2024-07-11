import React from 'react';

const mockCrimes = [
  { id: 1, type: 'Theft', location: '123 Main St', date: '2023-01-01' },
  { id: 2, type: 'Assault', location: '456 Elm St', date: '2023-01-02' },
  { id: 3, type: 'Burglary', location: '789 Oak St', date: '2023-01-03' },
];

const CrimeList = () => {
  return (
    <div>
      <h1>Crime List</h1>
      <ul>
        {mockCrimes.map(crime => (
          <li key={crime.id}>
            <p>Type: {crime.type}</p>
            <p>Location: {crime.location}</p>
            <p>Date: {crime.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrimeList;