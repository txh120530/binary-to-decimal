import {useState} from 'react';

import DecimalInput from './components/DecimalInput';
import BinaryInput from './components/BinaryInput';


function App() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const handleError(data) {
  //   console.log(data);
  // }

  const handleError = (index) => {
    console.log(index);
    setErrorMessage(index);
  };

  const handleBinary = (value) => {
    const decimal = parseInt(value, 2);
    setBinary(value);
    setDecimal(decimal);
  };



  return (
    <div className="App">
      <h1 className="text-center">Binary-Decimal Converter</h1>
      <div className="error text-center h-2 block">{errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}</div>

      <div className="block md:flex justify-around items-center border p-12 max-w-3xl mx-auto">

      <BinaryInput handleBinary={handleBinary} handleError={handleError} />
      <DecimalInput decimalValue={decimal} />
      </div>

    </div>
  );
}

export default App;
