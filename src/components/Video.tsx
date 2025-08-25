import React from 'react';
import PropTypes from 'prop-types';

interface VideoProps {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
}

const Video: React.FC<VideoProps> = ({ src, className = '', controls = true, autoPlay = false }) => {
  return (
    <video src={src} className={`w-full ${className}`} controls={controls} autoPlay={autoPlay} aria-label="video content">
      Your browser does not support the video tag.
    </video>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool
};

export default Video;
