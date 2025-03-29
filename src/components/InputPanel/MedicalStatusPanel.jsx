import React from 'react';
import PropTypes from 'prop-types';
import ConditionalTextArea from './ConditionalTextArea';
import CheckboxField from '../common/CheckboxField'; // new import

export default function MedicalStatusPanel({ formData, handleChange }) { // updated component name and checkbox layout
    return (
        <fieldset>
            <legend>Medical Status</legend> {/* updated legend */}
            <label>
                Medical Concerns:
                <textarea name="medicalConcerns" rows="4" value={formData.medicalConcerns} onChange={handleChange} />
            </label>
            {/* Added Medical History conditional text area */}
            <ConditionalTextArea 
                label="Medical History" 
                defaultValue="" 
                onValueChange={(value) => handleChange({ target: { name: 'medicalHistory', value } })}
            />
            {/* NEW: Pain Complaint field */}
            <ConditionalTextArea 
                label="Pain Complaint" 
                defaultValue=""
                onValueChange={(value) => handleChange({ target: { name: 'painComplaint', value } })}
            />
            {/* Replace inline checkbox fields with CheckboxField component */}
            <CheckboxField 
                name="sleepSatisfaction"
                label="Sleep Satisfaction"
                checked={formData.sleepSatisfaction}
                onChange={handleChange}
            />
            <CheckboxField 
                name="sleepApnea"
                label="Sleep Apnea"
                checked={formData.sleepApnea}
                onChange={handleChange}
            />
            <CheckboxField 
                name="cpap"
                label="CPAP"
                checked={formData.cpap}
                disabled={!formData.sleepApnea}
                onChange={handleChange}
            />
            <label>
                Total Sleep Time:
                <input 
                  type="text" 
                  name="totalSleepTime" 
                  value={formData.totalSleepTime} 
                  onChange={handleChange} 
                />
            </label>
            <CheckboxField 
                name="excessiveDaytimeSleepiness"
                label="Excessive Daytime Sleepiness"
                checked={formData.excessiveDaytimeSleepiness}
                onChange={handleChange}
            />
            {/* Added Nap entry field */}
            <ConditionalTextArea 
                label="Nap" 
                defaultValue=""
                onValueChange={(value) => handleChange({ target: { name: 'nap', value } })}
            />
            {/* Change Legal Drug Use to Medications */}
            <label>
                Medications:
                <textarea name="medications" rows="4" value={formData.medications} onChange={handleChange} />
            </label>
            {/* New Entry Fields in new order */}
            <ConditionalTextArea 
                label="Tobacco Use" 
                defaultValue="No current tobacco use" 
                onValueChange={(value) => handleChange({ target: { name: 'tobaccoUse', value } })}
            />
            <ConditionalTextArea 
                label="Cannabis Use" 
                defaultValue="No current cannabis use" 
                onValueChange={(value) => handleChange({ target: { name: 'cannabisUse', value } })}
            />
            <ConditionalTextArea 
                label="Alcohol Use" 
                defaultValue="No current alcohol use" 
                onValueChange={(value) => handleChange({ target: { name: 'alcoholUse', value } })}
            />
            <ConditionalTextArea 
                label="Caffeine Use" 
                defaultValue="No current caffeine use" 
                onValueChange={(value) => handleChange({ target: { name: 'caffeineUse', value } })}
            />
            <ConditionalTextArea 
                label="Illicit Drug Use" 
                defaultValue="No current illicit drug use" 
                onValueChange={(value) => handleChange({ target: { name: 'illicitDrugUse', value } })}
            />
            <ConditionalTextArea 
                label="Has Addiction History" 
                defaultValue={`${(formData.gender === "Female" ? "she" : formData.gender === "Male" ? "he" : "they")} denies any history of heavy or problematic substance abuse`} 
            />
        </fieldset>
    );
}

MedicalStatusPanel.propTypes = {
    formData: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
};
