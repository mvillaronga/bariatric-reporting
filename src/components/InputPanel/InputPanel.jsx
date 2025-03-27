import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputPanel.css';
import HeightInput from './HeightInput';
import ConditionalTextArea from './ConditionalTextArea'; // updated import
import genderData from '../../data/genderData'; // added import

export default function InputPanel({ onUpdate }) {
    const initialState = {
        patientName: '',
        patientAge: '',
        gender: 'Female',
        mood: '',
        currentWeight: '',
        targetWeight: '',
        height: 0,
        currentChallenges: '',
        reasons: '',
        previousDiagnosis: '',
        goals: '',
        associatedConditions: '',
        sleepHours: '',
        sleepStatus: '',
        currentMedications: '',
        legalDrugUse: '',
        substanceUsage: '',
    };
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        onUpdate(formData);
        setFormData(initialState);
    };

    return (
        <div className="input-panel">
            <h2>Input Panel</h2>
            <label>
                Patient Name:
                <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} />
            </label>
            <label>
                Patient Age:
                <input type="number" name="patientAge" value={formData.patientAge} onChange={handleChange} />
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
                Mood:
                <input type="text" name="mood" value={formData.mood} onChange={handleChange} />
            </label>
            <label>
                Current Weight:
                <input type="number" name="currentWeight" value={formData.currentWeight} onChange={handleChange} />
            </label>
            <label>
                Target Weight:
                <input type="number" name="targetWeight" value={formData.targetWeight} onChange={handleChange} />
            </label>
            <label>
                Height:
                <HeightInput 
                  value={parseInt(formData.height, 10) || 0} 
                  onChange={(newHeight) => setFormData({ ...formData, height: newHeight })}
                />
            </label>
            <label>
                Current Challenges:
                <textarea name="currentChallenges" value={formData.currentChallenges} onChange={handleChange}></textarea>
            </label>
            <label>
                Reasons:
                <textarea name="reasons" value={formData.reasons} onChange={handleChange}></textarea>
            </label>
            <label>
                Previous Diagnosis:
                <textarea name="previousDiagnosis" value={formData.previousDiagnosis} onChange={handleChange}></textarea>
            </label>
            <label>
                Goals:
                <textarea name="goals" value={formData.goals} onChange={handleChange}></textarea>
            </label>
            <label>
                Associated Conditions:
                <textarea name="associatedConditions" value={formData.associatedConditions} onChange={handleChange}></textarea>
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
                Current Medications:
                <textarea name="currentMedications" value={formData.currentMedications} onChange={handleChange}></textarea>
            </label>
            <label>
                Legal Drug Use:
                <textarea name="legalDrugUse" value={formData.legalDrugUse} onChange={handleChange}></textarea>
            </label>
            {/* Removed the existing Substance Usage textarea */}
            <ConditionalTextArea 
                label="Has Addiction HIstory" 
                defaultValue={`${(genderData[formData.gender] || genderData['Female']).pronoun} denies any history of heavy or problemactic substance abuse`} 
            />
            <button onClick={handleSubmit}>Update Report</button>
        </div>
    );
}

InputPanel.propTypes = {
    onUpdate: PropTypes.func.isRequired,
};
