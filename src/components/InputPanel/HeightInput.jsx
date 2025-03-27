import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function HeightInput({ value, onChange }) {
  const initialFeet = Math.floor(value / 12) || 0;
  const initialInches = value % 12 || 0;
  const [feet, setFeet] = useState(initialFeet);
  const [inches, setInches] = useState(initialInches);
  const lastEdited = useRef(null);

  useEffect(() => {
    if (lastEdited.current === null) {
      setFeet(Math.floor(value / 12));
      setInches(value % 12);
    }
  }, [value]);

  const handleFeetChange = (e) => {
    lastEdited.current = "feet";
    let newFeet = parseInt(e.target.value, 10) || 0;
    newFeet = Math.max(0, Math.min(newFeet, 10)); // validate feet between 0 and 10
    setFeet(newFeet);
    onChange(newFeet * 12 + inches);
  };

  const handleInchesChange = (e) => {
    lastEdited.current = "inches";
    let newInches = parseInt(e.target.value, 10) || 0;
    // Validate inches to be between 0 and 11
    newInches = Math.max(0, Math.min(newInches, 11));
    setInches(newInches);
    onChange(feet * 12 + newInches);
  };

  const handleBlur = () => {
    lastEdited.current = null;
    // Resync state from parent on blur
    setFeet(Math.floor(value / 12));
    setInches(value % 12);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        Feet:
        <input 
          type="number" 
          min="0" 
          max="10" 
          value={feet} 
          onChange={handleFeetChange}
          onBlur={handleBlur}
        />
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        Inches:
        <input 
          type="number" 
          min="0" 
          max="11"  // updated max attribute
          value={inches} 
          onChange={handleInchesChange}
          onBlur={handleBlur}
        />
      </label>
    </div>
  );
}

HeightInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
