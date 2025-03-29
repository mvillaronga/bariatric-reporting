import './App.css';
import Report from './components/report/Report';
import InputPanel from './components/InputPanel/InputPanel';
import { useState } from 'react';

function App() {
    const [reportData, setReportData] = useState({
        gender: "Female",
        patientName: "Ms. Doe",
        patientAge: 43,
        visitDate: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }),
        mood: "Pretty Good.",
        currentWeight: 201,
        targetWeight: 160,
        height: 65,
        currentChallenges: "overeating at meals/large portion sizes, eating rapidly, overeating when feeling emotionally overwhelmed or down, eating late in the evening, and unhealthy snacking between meals.",
        reasons: "She expressed a desire to improve her overall health and longevity, particularly for the sake of her grandchildren.",
        previousDiagnosis: "She has been diagnosed with sleep apnea, hypertension, and hypercholesterolemia, and she hopes that weight loss will help her to better manage these conditions. Additionally, she experiences chronic back pain and believes that reducing her weight may alleviate some of her discomfort.",
        goals: "She also aims to enhance her physical fitness and energy levels.",
        associatedConditions: "chronic back pain, hypertension, hypercholesterolemia and sleep apnea",
        sleepHours: "eight",
        sleepStatus: "rested",
        currentMedications: "losartan, phentermine, liraglutide, and fluconazole",
        medications: "She does not use any tobacco or cannabis products, nor does she drink any caffeinated beverages. She rarely drinks alcohol.",
        substanceUsage: "She denies use of other substances and has no history of heavy or problematic substance use.",
        illicitDrugUse: "No current illicit drug use",
        caffeineUse: "No current caffeine use",
        alcoholUse: "No current alcohol use",
        cannabisUse: "No current cannabis use",
        tobaccoUse: "No current tobacco use",
        reportDate: "March 14, 2025",
        subjectName: "Mary Doe",
        subjectDOB: "04/08/1981",
        nap: "",  // new initial nap value
        excessiveDaytimeSleepiness: false,  // new field for checkbox value
    });

    const handleUpdate = (data) => {
        setReportData((prevData) => ({
            ...prevData,
            ...data,
            visitDate: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
        }));
    };

    return (
        <div className="app-container">
            <InputPanel onUpdate={handleUpdate} />
            <Report {...reportData} />
        </div>
    );
}

export default App;
