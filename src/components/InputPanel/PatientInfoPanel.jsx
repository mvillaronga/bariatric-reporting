import React from 'react';
import PropTypes from 'prop-types';
import HeightInput from './HeightInput';

export default function PatientInfoPanel({ formData, handleChange, setFormData }) {
  return (
    <fieldset>
      <legend>Patient Info</legend>
      <label>
        Patient Name:
        <input 
          type="text" 
          name="patientName" 
          value={formData.patientName} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Non-Binary">Non-Binary</option>
        </select>
      </label>
      <label>
        Date of Birth:
        <input 
          type="date" 
          name="dateOfBirth" 
          value={formData.dateOfBirth} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Current Weight:
        <input 
          type="number" 
          name="currentWeight" 
          value={formData.currentWeight} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Height:
        <HeightInput 
          value={parseInt(formData.height, 10) || 0} 
          onChange={(newHeight) => setFormData({ ...formData, height: newHeight })}
        />
      </label>
      <label>
        Mood:
        <input 
          type="text" 
          name="mood" 
          value={formData.mood} 
          onChange={handleChange} 
        />
      </label>
    </fieldset>
  );
}

PatientInfoPanel.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
};
