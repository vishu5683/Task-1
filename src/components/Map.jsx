import React, { useEffect } from 'react';

const Map = ({ center, zoom }) => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center,
      zoom,
    });
    new window.google.maps.Marker({ position: center, map });
  }, [center, zoom]);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default Map;
