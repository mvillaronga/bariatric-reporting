import React from 'react';
import PropTypes from 'prop-types';
import genderData from '../../data/genderData';

export default function MedicalStatus({
    patientName,
    medicalConcerns,
    medications,
    substanceUsage,
    illicitDrugUse,
    caffeineUse,
    alcoholUse,
    cannabisUse,
    tobaccoUse,
    nap,
    gender,
    excessiveDaytimeSleepiness,
    totalSleepTime,
    sleepApnea,   
    cpap,        
    sleepSatisfaction,  // new prop
    medicalHistory      // new prop
}) {
    const { pronoun, objectPronoun, capitalPronoun } = genderData[gender] || genderData["Female"];
    const displaySleepTime = totalSleepTime.trim() ? totalSleepTime : "Sleeping like a baby 8 hours per day";
    
    const sleepApneaMessage = !sleepApnea
        ? `${capitalPronoun} reports no sleep apnea.`
        : sleepApnea && !cpap
            ? `${capitalPronoun} reports sleep apnea and does not use a CPAP device.`
            : `${capitalPronoun} reports sleep apnea and regularly uses a CPAP device.`;
    
    const sleepSatisfactionMessage = `The patient is ${sleepSatisfaction ? "satisfied" : "dissatisfied"} with ${objectPronoun} overall sleep quality and quantity.`;

    return (
        <p>
            {patientName}’s medical status is remarkable for a number of conditions other than morbid obesity.
            
            As stated above, {pronoun} has {medicalConcerns}. 
            
            {medicalHistory && (
                <div>
                    <strong>Medical History: </strong>{medicalHistory}
                </div>
            )}

            {sleepSatisfactionMessage}
            {sleepApneaMessage}
            {excessiveDaytimeSleepiness
                ? `${capitalPronoun} claims excessive daytime sleepiness.`
                : `${capitalPronoun} denies excessive daytime sleepiness.`}
            &nbsp;&nbsp;{nap}&nbsp;&nbsp;
            {displaySleepTime}&nbsp;&nbsp;
            {medications}&nbsp;&nbsp;
            {tobaccoUse}&nbsp;&nbsp;
            {cannabisUse}&nbsp;&nbsp;
            {alcoholUse}&nbsp;&nbsp;
            {caffeineUse}&nbsp;&nbsp;
            {illicitDrugUse}&nbsp;&nbsp;
            {substanceUsage}&nbsp;&nbsp;
        </p>
    );
}

MedicalStatus.propTypes = {
    patientName: PropTypes.string.isRequired,
    medicalConcerns: PropTypes.string.isRequired,
    medications: PropTypes.string.isRequired,
    substanceUsage: PropTypes.string.isRequired,
    illicitDrugUse: PropTypes.string.isRequired,
    caffeineUse: PropTypes.string.isRequired,
    alcoholUse: PropTypes.string.isRequired,
    cannabisUse: PropTypes.string.isRequired,
    tobaccoUse: PropTypes.string.isRequired,
    nap: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    excessiveDaytimeSleepiness: PropTypes.bool.isRequired,
    totalSleepTime: PropTypes.string.isRequired,
    sleepApnea: PropTypes.bool.isRequired,
    cpap: PropTypes.bool.isRequired,
    sleepSatisfaction: PropTypes.bool.isRequired,  // new propType
    medicalHistory: PropTypes.string.isRequired      // new propType
};