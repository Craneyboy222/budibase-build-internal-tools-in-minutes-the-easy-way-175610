import React from 'react';
import PropTypes from 'prop-types';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  className?: string;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, zoom = 10, className = '' }) => {
  return (
    <div className={`w-full h-64 ${className}`} role="application" aria-label="map">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`}
        allowFullScreen
        aria-hidden="false"
      ></iframe>
    </div>
  );
};

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number,
  className: PropTypes.string
};

export default Map;
