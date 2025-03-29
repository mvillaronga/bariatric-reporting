import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

export default function ConditionalTextArea({ label, defaultValue, onValueChange }) { // added onValueChange prop
  const [isChecked, setIsChecked] = useState(false);
  const [textValue, setTextValue] = useState(defaultValue);
  const textareaRef = useRef(null); // added ref

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    setTextValue(''); // clear the text area
    if (checked && textareaRef.current) {
      textareaRef.current.focus(); // set focus to the textarea
    }
    if (onValueChange) {
      onValueChange(''); // update with empty string when checkbox is toggled
    }
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
    if (onValueChange) {
      onValueChange(e.target.value);
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
