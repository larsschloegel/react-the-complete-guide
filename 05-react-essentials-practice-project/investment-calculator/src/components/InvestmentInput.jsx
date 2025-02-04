export default function InvestmentInput({onChange, investmentInputs}) {
        return (
                <section id="user-input">
                        <div className="input-group">
                                <p>
                                        <label>Initial Investment</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => onChange('initialInvestment', e.target.value)} 
                                        value={investmentInputs.initialInvestment} />
                                </p>
                                <p>
                                        <label>Annual Investment</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => onChange('annualInvestment', e.target.value)} 
                                        value={investmentInputs.annualInvestment} />
                                </p>
                        </div>
                        <div className="input-group">
                                <p>
                                        <label>Expected return</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => onChange('expectedReturn', e.target.value)} 
                                        value={investmentInputs.expectedReturn} />
                                </p>
                                <p>
                                        <label>Duration</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => onChange('duration', e.target.value)} 
                                        value={investmentInputs.duration} />
                                </p>
                        </div>
                </section>
        )
}