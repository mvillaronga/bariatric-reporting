import React from 'react';
import PropTypes from 'prop-types';
import ConditionalTextArea from './ConditionalTextArea';

export default function MedicalStatusPanel({ formData, handleChange }) { // updated component name
    return (
        <fieldset>
            <legend>Medical Status</legend> {/* updated legend */}
            <label>
                Associated Conditions:
                <textarea name="associatedConditions" value={formData.associatedConditions} onChange={handleChange} />
            </label>
            {/* --- Moved Total Sleep Time field above Excessive Daytime Sleepiness --- */}
            <label>
                Total Sleep Time:
                <input 
                  type="text" 
                  name="totalSleepTime" 
                  value={formData.totalSleepTime} 
                  onChange={handleChange} 
                />
            </label>
            {/* Added Excessive Daytime Sleepiness checkbox */}
            <label>
                Excessive Daytime Sleepiness:
                <input 
                  type="checkbox" 
                  name="excessiveDaytimeSleepiness" 
                  checked={formData.excessiveDaytimeSleepiness} 
                  onChange={handleChange} 
                />
            </label>
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
            {/* New checkbox fields for Sleep Apnea and CPAP */}
            <label>
                Sleep Apnea:
                <input 
                  type="checkbox" 
                  name="sleepApnea" 
                  checked={formData.sleepApnea} 
                  onChange={handleChange} 
                />
            </label>
            <label>
                CPAP:
                <input 
                  type="checkbox" 
                  name="cpap" 
                  checked={formData.cpap} 
                  disabled={!formData.sleepApnea} 
                  onChange={handleChange}
                />
            </label>
        </fieldset>
    );
}

MedicalStatusPanel.propTypes = {
    formData: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
};
