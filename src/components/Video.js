import React from 'react';

const Video = ({ children }) => {
  console.log('Video says hi');
  return (
    <video autoPlay muted loop id="myVideo">
      <source src="/static/promo_bg.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
