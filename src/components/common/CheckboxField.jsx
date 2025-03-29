import React from 'react';
import PropTypes from 'prop-types';

export default function CheckboxField({ name, checked, onChange, label, disabled }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ flexShrink: 0 }}
      />
      <span style={{ marginLeft: '0.5rem' }}>{label}</span>
    </div>
  );
}

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

CheckboxField.defaultProps = {
  disabled: false,
};
