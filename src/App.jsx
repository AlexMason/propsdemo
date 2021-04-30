import "./App.css";
import { useState } from "react";
import FizzBuzz from "./components/FizzBuzz.jsx";

function App() {
  let [name, setName] = useState("Alex");
  let [phoneNumber, setPhoneNumber] = useState("3175555555");
  let [address] = useState("123 Main St");
  let [value, setValue] = useState(0);

  return (
    <div className="App">
      <input
        type="number"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />

      <ContactCard name={name} phoneNumber={phoneNumber} address={address} />

      <br />

      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <FizzBuzz value={value} />
    </div>
  );
}

export default App;
