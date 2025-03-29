import React from 'react';
import PropTypes from 'prop-types';

export default function MedicalHistory({
    patientName,
    associatedConditions,
    sleepHours,
    sleepStatus,
    legalDrugUse,
    substanceUsage
}) {
    return (
        <p>
            <span>{patientName}</span>’s medical history is remarkable for a number of conditions other than morbid obesity.
            As stated above, she has <span>{associatedConditions}</span>. She is satisfied with her sleep quality and quantity. She estimates a typical total sleep
            time of <span>{sleepHours}</span> hours a night and feels <span>{sleepStatus}</span> during the day. <span>{patientName}</span> takes medications as prescribed. 
            <span>{legalDrugUse}</span>  
            <span>{substanceUsage}</span>
        </p>
    );
}

MedicalHistory.propTypes = {
    patientName: PropTypes.string.isRequired,
    associatedConditions: PropTypes.string.isRequired,
    sleepHours: PropTypes.string.isRequired,
    sleepStatus: PropTypes.string.isRequired,
    legalDrugUse: PropTypes.string.isRequired,
    substanceUsage: PropTypes.string.isRequired,
};
