import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ reportDate, subjectName, subjectDOB }) {
    return (
        <div>
            <div>Date: {reportDate}</div>
            <address>
                Virginia Mason Franciscan Center for Weight Management<br />
                34503 Ninth Ave. S., Suite 220<br />
                Federal Way, WA 98003
            </address>

            <div><strong>RE:</strong> {subjectName}; DOB: {subjectDOB}</div>

            <p>To Whom It May Concern,</p>
        </div>
    );
}

Header.propTypes = {
    reportDate: PropTypes.string.isRequired,
    subjectName: PropTypes.string.isRequired,
    subjectDOB: PropTypes.string.isRequired,
};
