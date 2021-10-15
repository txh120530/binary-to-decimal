import {useState, useEffect} from 'react';


function BinaryInput(props) {
  
  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);  
  };

     useEffect(() => {
		if (value.match(/^[0-1]+$/g) === null) {
	      props.handleError("Enter either 0 or 1 and No more than 8 digits");
	  	} else{
	      props.handleError('');
	  	}
	  	props.handleBinary(value);
	}, [value]);



  return (
    <div className="binaryInput">
      <label  className="block" htmlFor="input__binary">Binary</label>
      <input 
      	value={value} 
      	onChange={onChange} 
      	id="input__binary" 
      	className="border"
      	type="text"
      	maxLength="8"
      />
    </div>
  );
}

export default BinaryInput;
