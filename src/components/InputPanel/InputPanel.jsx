import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputPanel.css';

export default function InputPanel({ onUpdate }) {
    const [isVisible, setIsVisible] = useState(true);
    const [formData, setFormData] = useState({
        patientName: '',
        patientAge: '',
        gender: 'Female',
        mood: '',
        currentWeight: '',
        targetWeight: '',
        height: '',
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
    });

    const togglePanel = () => setIsVisible(!isVisible);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        onUpdate(formData);
        setFormData({
            patientName: '',
            patientAge: '',
            gender: 'Female',
            mood: '',
            currentWeight: '',
            targetWeight: '',
            height: '',
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
        });
        togglePanel();
    };

    return (
        <div className={`input-panel ${isVisible ? 'visible' : ''}`}>
            <button className="toggle-button" onClick={togglePanel}>
                {isVisible ? 'Close' : 'Open'} Panel
            </button>
            {isVisible && (
                <div className="panel-content">
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
                        Height (in inches):
                        <input type="number" name="height" value={formData.height} onChange={handleChange} />
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
                    <label>
                        Substance Usage:
                        <textarea name="substanceUsage" value={formData.substanceUsage} onChange={handleChange}></textarea>
                    </label>
                    <button onClick={handleSubmit}>Update Report</button>
                </div>
            )}
        </div>
    );
}

InputPanel.propTypes = {
    onUpdate: PropTypes.func.isRequired,
};
