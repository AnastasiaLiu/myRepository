import { useState } from 'react';
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

import Second from "./Second";
import Third from "./Third";
import Forth from "./Forth";
import Dashboard from "./Dashboard";

const Welcome = () => {
    const [currentStep, setCurrentStep] = useState('welcome');
    
    return (
        <div className="d-flex justify-content-center align-items-center container">
            {currentStep === 'welcome' &&
                <div>
                    <div className="mt-4 p-5 text-white rounded welcome-div ">
                        <h3 className="my-first-header">Welcome to OHSU</h3>
                        <button className="mybtn btn btn-success" onClick={() => setCurrentStep('second')}>Click to check-in</button>
                    </div>
                </div>}
            {currentStep === 'second' && <Second goNext={setCurrentStep} />}
            {currentStep === 'third' && <Third goNext={setCurrentStep} />}
            {currentStep === 'forth' && <Forth goNext={setCurrentStep} />}
            {currentStep === 'dash' && <Dashboard goNext={setCurrentStep} />}

        </div>
    );

}

export default Welcome;
