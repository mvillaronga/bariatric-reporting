import React from 'react';
import PropTypes from 'prop-types';
import genderData from '../../data/genderData';

export default function PatientInfo({ patientName, mood, gender }) {
    const { pronoun, objectPronoun, capitalPronoun, capitalObject } = genderData[gender] || genderData["Female"];

    return (
        <p>
            {patientName} was cooperative and friendly throughout the evaluation. Rapport was easily
            established. {patientName} seemed alert and was oriented to person, place, date and situation. {capitalPronoun} speech
            was normal in rate, rhythm and volume. {capitalPronoun} vocabulary and grammatical structure were within
            normal limits. There were no obvious difficulties in receptive language. This patient’s
            autobiographical memory was at least adequate, as {pronoun} seemed to recall relevant personal history
            without apparent difficulty. {capitalPronoun} thought processes were organized and logical. {patientName}’s
            described {objectPronoun} present mood as, “{mood}” {capitalPronoun} verbal affect was consistent with this and
            appropriate to the situation. {capitalPronoun} displayed at least adequate knowledge regarding {objectPronoun} pending
            bariatric surgery and {objectPronoun} responsibilities surrounding {objectPronoun} surgery that predict a successful post-
            operative outcome.
        </p>
    );
}

PatientInfo.propTypes = {
    patientName: PropTypes.string.isRequired,
    mood: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(["Female", "Male", "Other"]).isRequired,
};
