import { useState } from "react";
import Header from "./components/Header"
import InvestmentInput from "./components/InvestmentInput"
import Results from "./components/Results"

function App() {
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
    <>
      <Header />
      <InvestmentInput onChange={handleChange} investmentInput={investmentInput}/>
      <Results investmentInput={investmentInput}/>
    </>
  )
}

export default App