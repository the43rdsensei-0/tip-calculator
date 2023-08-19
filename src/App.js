import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      >
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Button onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        placeholder="Bill value"
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSetPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatified (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Button({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
