import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import genderData from '../../data/genderData';
import BodyMassIndex from './BodyMassIndex'; // Updated import to BodyMassIndex

export default function Evaluation({ gender, currentWeight, targetWeight, height, currentChallenges, reasons, previoiusDiagnosis, goals, currentMedications }) { // Added currentChallenges, goals, and currentMedications as props
    const genderInfo = genderData[gender] || genderData["Female"]; // Default to Female if gender is not provided

    return (
        <>
            <p>
                The following section regarding this patient’s presenting concerns and relevant history are based
                solely on {genderInfo.capitalObject} verbal self-report. 

                No other sources of information (e.g. medical records,verbal or written reports from other parties) were available, nor were they requested for this evaluation.
            </p>

            <p>
                {genderInfo.capitalPronoun} states that {genderInfo.pronoun} is pursuing bariatric surgery for multiple reasons. 
                
                First, {genderInfo.pronoun} is dissatisfied with {genderInfo.objectPronoun} current weight of {currentWeight} lbs. <BodyMassIndex weight={currentWeight} height={height} />
                and has struggled to sustain weight loss despite dietary and exercise efforts. 
                
                {genderInfo.capitalPronoun} reports first being concerned about {genderInfo.objectPronoun} weight about 25 years ago and {genderInfo.pronoun} has made a number of weight loss
                attempts since that time, including engaging in physical activity, following a low-fat diet, and using over-the-counter weight loss supplements. 
                
                {genderInfo.capitalPronoun} is currently taking {currentMedications}. 
                
                {genderInfo.capitalPronoun} denies any history of purging behaviors. 
                {genderInfo.capitalPronoun} notes that the following behavioral and emotional factors have historically contributed to {genderInfo.objectPronoun}
                challenges maintaining a healthy body weight: {currentChallenges}.

                In addition to weight concerns, {genderInfo.pronoun} is motivated to pursue surgery due to health issues. {reasons} {previoiusDiagnosis}. {goals}.  
                
                {genderInfo.capitalPronoun} is confident that bariatric surgery will help {genderInfo.objectPronoun}
                achieve {genderInfo.objectPronoun} target weight of {targetWeight} lbs. <BodyMassIndex weight={targetWeight} height={height} />.
                </p>
            </>
    );
}

Evaluation.propTypes = {
    gender: PropTypes.string.isRequired,
    currentWeight: PropTypes.number.isRequired,
    targetWeight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    currentChallenges: PropTypes.string.isRequired,
    reasons: PropTypes.string.isRequired,
    previoiusDiagnosis: PropTypes.string.isRequired,
    goals: PropTypes.string.isRequired, // Added goals to propTypes
    currentMedications: PropTypes.string.isRequired, // Added currentMedications to propTypes
};