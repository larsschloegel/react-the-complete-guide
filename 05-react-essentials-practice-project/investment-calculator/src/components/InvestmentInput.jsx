export default function InvestmentInput() {

        return (
                <section id="user-input">
                        <div className="input-group">
                                <p>
                                        <label>Initial Investment</label>
                                        <input type="text"></input>
                                </p>
                                <p>
                                        <label>Annual Investment</label>
                                        <input type="text"></input>
                                </p>
                        </div>
                        <div className="input-group">
                                <p>
                                        <label>Expected return</label>
                                        <input type="text"></input>
                                </p>
                                <p>
                                        <label>Duration</label>
                                        <input type="text"></input>
                                </p>
                        </div>
                </section>
        )
}