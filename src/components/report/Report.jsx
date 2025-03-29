import React from 'react';
import PropTypes from 'prop-types';
import CoverSheet from './CoverSheet';
import Opening from './Opening';
import PatientInfo from './PatientInfo';
import Evaluation from './Evaluation';
import MedicalStatus from './MedicalStatus';
import Header from './Header';

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
    medications,
    substanceUsage,
    illicitDrugUse,  // new prop
    caffeineUse,
    alcoholUse,
    cannabisUse,
    tobaccoUse,
    reportDate,
    subjectName,
    subjectDOB,
    nap,   // new prop
    excessiveDaytimeSleepiness  // new prop
}) {
    return (
        <div className="report-container">
            <Header 
                reportDate={reportDate} 
                subjectName={subjectName} 
                subjectDOB={subjectDOB} 
            />
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
                currentMedications={currentMedications}
            />
            <MedicalStatus  
                patientName={patientName}
                associatedConditions={associatedConditions}
                sleepHours={sleepHours}
                sleepStatus={sleepStatus}
                medications={medications}
                substanceUsage={substanceUsage}
                illicitDrugUse={illicitDrugUse}
                caffeineUse={caffeineUse}
                alcoholUse={alcoholUse}
                cannabisUse={cannabisUse}
                tobaccoUse={tobaccoUse}
                nap={nap}  // passing the new nap value
                excessiveDaytimeSleepiness={excessiveDaytimeSleepiness}  // passing the new value
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
    medications: PropTypes.string.isRequired,
    substanceUsage: PropTypes.string.isRequired,
    illicitDrugUse: PropTypes.string.isRequired,  // new propType
    caffeineUse: PropTypes.string.isRequired,
    alcoholUse: PropTypes.string.isRequired,
    cannabisUse: PropTypes.string.isRequired,
    tobaccoUse: PropTypes.string.isRequired,
    reportDate: PropTypes.string.isRequired,
    subjectName: PropTypes.string.isRequired,
    subjectDOB: PropTypes.string.isRequired,
    nap: PropTypes.string.isRequired,  // new propType
    excessiveDaytimeSleepiness: PropTypes.bool.isRequired  // new propType
};
