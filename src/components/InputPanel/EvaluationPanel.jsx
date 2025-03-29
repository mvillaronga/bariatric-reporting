import React from 'react';
import PropTypes from 'prop-types';

export default function EvaluationPanel({ formData, handleChange }) {
  return (
    <fieldset>
      <legend>Evaluation</legend>
      <label>
        Target Weight:
        <input 
          type="number" 
          name="targetWeight" 
          value={formData.targetWeight} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Current Challenges:
        <textarea 
          name="currentChallenges" 
          value={formData.currentChallenges} 
          onChange={handleChange}>
        </textarea>
      </label>
      <label>
        Reasons:
        <textarea 
          name="reasons" 
          value={formData.reasons} 
          onChange={handleChange}>
        </textarea>
      </label>
      <label>
        Previous Diagnosis:
        <textarea 
          name="previousDiagnosis" 
          value={formData.previousDiagnosis} 
          onChange={handleChange}>
        </textarea>
      </label>
      <label>
        Goals:
        <textarea 
          name="goals" 
          value={formData.goals} 
          onChange={handleChange}>
        </textarea>
      </label>
      <label>
        Current Medications:
        <textarea 
          name="currentMedications" 
          value={formData.currentMedications} 
          onChange={handleChange}>
        </textarea>
      </label>
    </fieldset>
  );
}

EvaluationPanel.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
