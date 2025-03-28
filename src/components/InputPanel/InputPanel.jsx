import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputPanel.css';
import HeightInput from './HeightInput';
import ConditionalTextArea from './ConditionalTextArea'; // updated import
import genderData from '../../data/genderData'; // added import
import ReportInfoPanel from './ReportInfoPanel'; // added import
import PatientInfoPanel from './PatientInfoPanel'; // added import

export default function InputPanel({ onUpdate }) {
    const initialState = {
        reportDate: new Date().toISOString().substring(0,10), // default to current date (yyyy-mm-dd)
        patientName: '',
        // patientAge removed; will be calculated from dateOfBirth
        dateOfBirth: '', // added new field
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

    const computeAge = (dob) => {
        if (!dob) return '';
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleSubmit = () => {
        const computedAge = computeAge(formData.dateOfBirth);
        onUpdate({ ...formData, patientAge: computedAge });
        setFormData(initialState);
    };

    return (
        <div className="input-panel">
            <h2>Input Panel</h2>
            <ReportInfoPanel formData={formData} handleChange={handleChange} /> {/* Added Report Info panel on top */}
            <PatientInfoPanel formData={formData} handleChange={handleChange} setFormData={setFormData} /> {/* Added Patient Info panel below Report Info panel */}
            {/* Removed duplicate PatientInfoPanel fields: Patient Name, Patient Age, Gender, Current Weight, and Height */}
            {/* Removed mood label from here */}
            <label>
                Target Weight:
                <input type="number" name="targetWeight" value={formData.targetWeight} onChange={handleChange} />
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
