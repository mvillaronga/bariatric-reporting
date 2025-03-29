import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

export default function ConditionalTextArea({ label, defaultValue, onValueChange }) { // added onValueChange prop
  const [isChecked, setIsChecked] = useState(false);
  const [textValue, setTextValue] = useState(defaultValue);
  const [savedValue, setSavedValue] = useState(defaultValue); // new state variable
  const textareaRef = useRef(null); // added ref

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (!checked) {
      if (textValue !== defaultValue) {
        setSavedValue(textValue);
      }
      // Directly use defaultValue without modifying it
      setTextValue(defaultValue);
      if (onValueChange) {
        onValueChange(defaultValue);
      }
    } else {
      // When rechecked, if savedValue is default then use empty string; otherwise, use savedValue
      const newVal = savedValue === defaultValue ? "" : savedValue;
      setTextValue(newVal);
      if (onValueChange) {
        onValueChange(newVal);
      }
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  };

  const handleTextChange = (e) => {
    // Removed period suffix application
    const newVal = e.target.value;
    setTextValue(newVal);
    if (isChecked) {
      setSavedValue(newVal);
    }
    if (onValueChange) {
      onValueChange(newVal);
    }
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        {label}
      </label>
      <textarea
        ref={textareaRef}  // assign ref here
        value={textValue}
        onChange={handleTextChange}
        disabled={!isChecked}
        style={{ display: 'block', marginTop: '0.5rem', width: '100%', minHeight: '80px' }}
      />
    </div>
  );
}

ConditionalTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onValueChange: PropTypes.func, // new propType
};

ConditionalTextArea.defaultProps = {
  defaultValue: '',
};
