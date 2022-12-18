import './color.css';
import React from 'react';

const Color = ({ title }) => (
  <div className="color" style={{ background: title }}>
    <p>{title}</p>
  </div>
);

export default Color;
