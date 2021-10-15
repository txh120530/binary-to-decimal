

function DecimalInput(props) {

  return (
    <div className="decimalInput">
          <label className="block" htmlFor="input__decimal">Decimal Output</label>
      <input
      	 value={props.decimalValue}
         id="input__decimal" 
      	 className="border"
         type="text"
         disabled
       />
    </div>
  );
}

export default DecimalInput;
