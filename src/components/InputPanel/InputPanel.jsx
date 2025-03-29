import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputPanel.css';
import HeightInput from './HeightInput';
import ConditionalTextArea from './ConditionalTextArea';
import genderData from '../../data/genderData';
import ReportInfoPanel from './ReportInfoPanel';
import PatientInfoPanel from './PatientInfoPanel';
import EvaluationPanel from './EvaluationPanel';
import MedicalStatusPanel from './MedicalStatusPanel';

export default function InputPanel({ onUpdate }) {
    const initialState = {
        reportDate: new Date().toISOString().substring(0,10),
        patientName: '',
        dateOfBirth: '',
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
        // Rename legalDrugUse to medications:
        medications: '',
        substanceUsage: '',
        illicitDrugUse: 'No current illicit drug use',  // new field
        caffeineUse: 'No current caffeine use',
        alcoholUse: 'No current alcohol use',
        cannabisUse: 'No current cannabis use',
        tobaccoUse: 'No current tobacco use',
        nap: '',  // new field for Nap
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
    };

    return (
        <div className="input-panel">
            <h2>Input Panel</h2>
            <ReportInfoPanel formData={formData} handleChange={handleChange} />
            <PatientInfoPanel formData={formData} handleChange={handleChange} setFormData={setFormData} />
            <EvaluationPanel formData={formData} handleChange={handleChange} />
            {/* Removed fields for associatedConditions, sleepHours, sleepStatus, currentMedications, medications, and ConditionalTextArea */}
            <MedicalStatusPanel formData={formData} handleChange={handleChange} />
            <button onClick={handleSubmit}>Update Report</button>
        </div>
    );
}

InputPanel.propTypes = {
    onUpdate: PropTypes.func.isRequired,
};
