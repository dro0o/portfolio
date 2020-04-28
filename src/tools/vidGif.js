import React from 'react'
// transforms a reference to an mp4 into an html5 video
// that looks and behaves like a gif
const vidGif = ({ src, poster }) => (
  <video
    autoPlay
    loop
    muted
    playsInline
    poster={poster}
    style={{ height: '100%', width: '100%' }}
  >
    <source src={src} type='video/mp4' />
    Your browser does not support html5 video.
  </video>
)

export default vidGif
