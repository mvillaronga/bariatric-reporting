import React from 'react';
import PropTypes from 'prop-types';

export default function MedicalStatus({
    patientName,
    associatedConditions,
    sleepHours,
    sleepStatus,
    legalDrugUse,
    substanceUsage,
    illicitDrugUse  // new prop
}) {
    return (
        <p>
            {patientName}’s medical status is remarkable for a number of conditions other than morbid obesity.
            
            As stated above, she has {associatedConditions}. 
            
            She is satisfied with her sleep quality and quantity.  She estimates a typical total sleep time of {sleepHours} hours a night and feels {sleepStatus} during the day.
            
            {patientName} takes medications as prescribed.
            
            {legalDrugUse}

            {illicitDrugUse} 
                        
            {substanceUsage}
  {/* new field */}
        </p>
    );
}

MedicalStatus.propTypes = {
    patientName: PropTypes.string.isRequired,
    associatedConditions: PropTypes.string.isRequired,
    sleepHours: PropTypes.string.isRequired,
    sleepStatus: PropTypes.string.isRequired,
    legalDrugUse: PropTypes.string.isRequired,
    substanceUsage: PropTypes.string.isRequired,
    illicitDrugUse: PropTypes.string.isRequired, // new propType
};