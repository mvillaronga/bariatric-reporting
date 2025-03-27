import React from 'react';
import PropTypes from 'prop-types';

export default function BodyMassIndex({ weight, height }) {
    // Calculate BMI using the formula: (weight in pounds / (height in inches)^2) * 703
    const bmi = (weight / (height * height)) * 703;

    // Determine BMI classification
    let classification = '';
    if (bmi < 18.5) {
        classification = 'underweight';
    } else if (bmi < 24.9) {
        classification = 'normal weight';
    } else if (bmi < 29.9) {
        classification = 'overweight';
    } else if (bmi < 34.9) {
        classification = 'obese classification, class I';
    } else if (bmi < 39.9) {
        classification = 'obese classification, class II';
    } else {
        classification = 'obese classification, class III';
    }

    return (
        <>
            (BMI = {bmi.toFixed(1)} kg/m², {classification})
        </>
    );
}

BodyMassIndex.propTypes = {
    weight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};
