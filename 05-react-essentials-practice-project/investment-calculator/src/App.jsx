import { useState } from "react";
import Header from "./components/Header"
import InvestmentInput from "./components/InvestmentInput"
import Results from "./components/Results"

function App() {
  const [investmentInputs, setInvestmentInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = investmentInputs.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setInvestmentInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue
      };
    });
  }
  return (
    <>
      <Header />
      <InvestmentInput onChange={handleChange} investmentInputs={investmentInputs} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results investmentInputs={investmentInputs} />}
    </>
  )
}

export default App