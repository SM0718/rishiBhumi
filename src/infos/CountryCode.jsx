import React, { useState, useEffect } from 'react';

const LocationDetector = () => {
  const [countryCode, setCountryCode] = useState(null);

  useEffect(() => {
    // Request permission to access user's location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // Use a reverse geocoding service to get location details
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );

        const data = await response.json();

        // Extract the country code
        const countryCode = data.countryCode;
        if(data && countryCode){ console.log(countryCode, data)}
        setCountryCode(countryCode);
      },
      (error) => {
        console.error('Error getting location:', error.message);
      }
    );
  }, []);

  return (
    <div>
      {countryCode ? (
        <p>User's Country Code: {countryCode}</p>
      ) : (
        <p>Fetching user's location...</p>
      )}
    </div>
  );
};

export default LocationDetector;
