import React from 'react';
import PropTypes from 'prop-types';

export default function ReportInfoPanel({ formData, handleChange }) {
  return (
    <fieldset>
      <legend>Report Info</legend>
      <label>
        Report Date:
        <input 
          type="date" 
          name="reportDate" 
          value={formData.reportDate} 
          onChange={handleChange} 
        />
      </label>
    </fieldset>
  );
}

ReportInfoPanel.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
