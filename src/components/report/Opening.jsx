import React from 'react';
import PropTypes from 'prop-types';
import genderData from '../../data/genderData';

export default function Opening({ 
    gender, 
    patientName, 
    patientAge, 
    visitDate 
}) {
    const genderInfo = genderData[gender] || genderData["Female"]; // Default to Female if gender is not provided

    return (
        <p>
            It is my understanding that {patientName}, a {patientAge}-year-old obese {genderInfo.sex.toLowerCase()}, is a candidate for bariatric
            surgery. It was my pleasure to conduct a presurgical psychological evaluation with this patient
            on {visitDate}. This was a telehealth evaluation and the risks and benefits of telehealth
            were reviewed and consented to by this patient.  The evaluation was comprised of a clinical
            interview, including pertinent questions from the Weight and Lifestyle Inventory, as well as the
            administration of a pair of psychological self-report inventories – the Patient Health
            Questionnaire (PHQ-9) and the Generalized Anxiety Disorder Questionnaire (GAD-7).
        </p>
    );
}

Opening.propTypes = {
    gender: PropTypes.string.isRequired,
    patientName: PropTypes.string.isRequired,
    patientAge: PropTypes.number.isRequired,
    visitDate: PropTypes.string.isRequired,
};
