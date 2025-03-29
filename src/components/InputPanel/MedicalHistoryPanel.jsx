import React from 'react';
import PropTypes from 'prop-types';
import ConditionalTextArea from './ConditionalTextArea';

export default function MedicalHistoryPanel({ formData, handleChange }) {
    return (
        <fieldset>
            <legend>Medical History</legend>
            <label>
                Associated Conditions:
                <textarea name="associatedConditions" value={formData.associatedConditions} onChange={handleChange} />
            </label>
            <label>
                Sleep Hours:
                <input type="text" name="sleepHours" value={formData.sleepHours} onChange={handleChange} />
            </label>
            <label>
                Sleep Status:
                <input type="text" name="sleepStatus" value={formData.sleepStatus} onChange={handleChange} />
            </label>
            <label>
                Legal Drug Use:
                <textarea name="legalDrugUse" value={formData.legalDrugUse} onChange={handleChange} />
            </label>
            <ConditionalTextArea 
                label="Has Addiction History" 
                defaultValue={`${(formData.gender === "Female" ? "she" : formData.gender === "Male" ? "he" : "they")} denies any history of heavy or problematic substance abuse`} 
            />
        </fieldset>
    );
}

MedicalHistoryPanel.propTypes = {
    formData: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
};
