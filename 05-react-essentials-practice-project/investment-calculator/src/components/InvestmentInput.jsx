import { useState } from "react"

export default function InvestmentInput() {

        const [investmentInput, setInvestmentInput] = useState({
                initialInvestement: 10000,
                annualInvestment: 1200,
                expectedReturn: 6,
                duration: 10
        });

        function handleChange(inputIdentifier, newValue) {
                setInvestmentInput(prevInput => {
                        return {
                                ...prevInput,
                                [inputIdentifier]: newValue
                        };
                });
        }

        return (
                <section id="user-input">
                        <div className="input-group">
                                <p>
                                        <label>Initial Investment</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => handleChange('initialInvestement', e.target.value)} 
                                        value={investmentInput.initialInvestement} />
                                </p>
                                <p>
                                        <label>Annual Investment</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => handleChange('annualInvestment', e.target.value)} 
                                        value={investmentInput.annualInvestment} />
                                </p>
                        </div>
                        <div className="input-group">
                                <p>
                                        <label>Expected return</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => handleChange('expectedReturn', e.target.value)} 
                                        value={investmentInput.expectedReturn} />
                                </p>
                                <p>
                                        <label>Duration</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => handleChange('duration', e.target.value)} 
                                        value={investmentInput.duration} />
                                </p>
                        </div>
                </section>
        )
}