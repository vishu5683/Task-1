
import React, { useEffect, useState } from 'react';

const GetCurrentAddress = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then(res => res.json())
        .then(data => setAddress(data.address));
    });
  }, []);

  return (
    <div className="current-address">
      <h2>Your Current Address:</h2>
      <p>Road: {address.road}</p>
      <p>City: {address.city}</p>
      <p>Country: {address.country}</p>
    </div>
  );
}

export default GetCurrentAddress;
