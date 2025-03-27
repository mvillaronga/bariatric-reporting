import React from 'react';
import PropTypes from 'prop-types';
import CoverSheet from './CoverSheet';
import Opening from './Opening';
import PatientInfo from './PatientInfo';
import Evaluation from './Evaluation';
import MedicalHistory from './MedicalHistory';

export default function Report({
    gender,
    patientName,
    patientAge,
    visitDate,
    mood,
    currentWeight,
    targetWeight,
    height,
    currentChallenges,
    reasons,
    previousDiagnosis,
    goals,
    associatedConditions,
    sleepHours,
    sleepStatus,
    currentMedications,
    legalDrugUse,
    substanceUsage
}) {
    return (
        <div>
            <CoverSheet />
            <Opening 
                gender={gender} 
                patientName={patientName} 
                patientAge={patientAge} 
                visitDate={visitDate} 
            />
            <PatientInfo 
                patientName={patientName} 
                mood={mood} 
                gender={gender} 
            />
            <Evaluation 
                gender={gender}
                currentWeight={currentWeight}
                targetWeight={targetWeight}
                height={height}
                currentChallenges={currentChallenges}
                reasons={reasons}
                previoiusDiagnosis={previousDiagnosis}
                goals={goals}
            />
            <MedicalHistory 
                patientName={patientName}
                associatedConditions={associatedConditions}
                sleepHours={sleepHours}
                sleepStatus={sleepStatus}
                currentMedications={currentMedications}
                legalDrugUse={legalDrugUse}
                substanceUsage={substanceUsage}
            />
        </div>
    );
}

Report.propTypes = {
    gender: PropTypes.string.isRequired,
    patientName: PropTypes.string.isRequired,
    patientAge: PropTypes.number.isRequired,
    visitDate: PropTypes.string.isRequired,
    mood: PropTypes.string.isRequired,
    currentWeight: PropTypes.number.isRequired,
    targetWeight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    currentChallenges: PropTypes.string.isRequired,
    reasons: PropTypes.string.isRequired,
    previousDiagnosis: PropTypes.string.isRequired,
    goals: PropTypes.string.isRequired,
    associatedConditions: PropTypes.string.isRequired,
    sleepHours: PropTypes.string.isRequired,
    sleepStatus: PropTypes.string.isRequired,
    currentMedications: PropTypes.string.isRequired,
    legalDrugUse: PropTypes.string.isRequired,
    substanceUsage: PropTypes.string.isRequired
};
