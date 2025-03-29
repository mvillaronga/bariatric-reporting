import React from 'react';
import PropTypes from 'prop-types';
import genderData from '../../data/genderData';

export default function MedicalStatus({
    patientName,
    associatedConditions,
    sleepHours,
    sleepStatus,
    medications,
    substanceUsage,
    illicitDrugUse,
    caffeineUse,
    alcoholUse,
    cannabisUse,
    tobaccoUse,
    nap,
    gender,
    excessiveDaytimeSleepiness  // new prop
}) {
    const { pronoun, objectPronoun, capitalPronoun } = genderData[gender] || genderData["Female"];

    return (
        <p>
            {patientName}’s medical status is remarkable for a number of conditions other than morbid obesity.

            As stated above, {pronoun} has {associatedConditions}. 

            {capitalPronoun} is satisfied with {objectPronoun} sleep quality and quantity. 

            {capitalPronoun} estimates a typical total sleep time of {sleepHours} hours a night and feels {sleepStatus} during the day.

            {excessiveDaytimeSleepiness
                ? `${capitalPronoun} claims excessive daytime sleepiness.`
                : `${capitalPronoun} denies excessive daytime sleepiness.`}
            &nbsp;&nbsp;

            {nap}&nbsp;&nbsp;

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
    associatedConditions: PropTypes.string.isRequired,
    sleepHours: PropTypes.string.isRequired,
    sleepStatus: PropTypes.string.isRequired,
    medications: PropTypes.string.isRequired,
    substanceUsage: PropTypes.string.isRequired,
    illicitDrugUse: PropTypes.string.isRequired, // new propType
    caffeineUse: PropTypes.string.isRequired,
    alcoholUse: PropTypes.string.isRequired,
    cannabisUse: PropTypes.string.isRequired,
    tobaccoUse: PropTypes.string.isRequired,
    nap: PropTypes.string.isRequired,  // new propType
    gender: PropTypes.string.isRequired,  // new propType
    excessiveDaytimeSleepiness: PropTypes.bool.isRequired,  // new propType
};