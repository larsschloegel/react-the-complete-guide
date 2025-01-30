export default function InvestmentInput({onChange, investmentInput}) {
        return (
                <section id="user-input">
                        <div className="input-group">
                                <p>
                                        <label>Initial Investment</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => onChange('initialInvestement', e.target.value)} 
                                        value={investmentInput.initialInvestement} />
                                </p>
                                <p>
                                        <label>Annual Investment</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => onChange('annualInvestment', e.target.value)} 
                                        value={investmentInput.annualInvestment} />
                                </p>
                        </div>
                        <div className="input-group">
                                <p>
                                        <label>Expected return</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => onChange('expectedReturn', e.target.value)} 
                                        value={investmentInput.expectedReturn} />
                                </p>
                                <p>
                                        <label>Duration</label>
                                        <input 
                                        type="number" 
                                        required 
                                        onChange={(e) => onChange('duration', e.target.value)} 
                                        value={investmentInput.duration} />
                                </p>
                        </div>
                </section>
        )
}