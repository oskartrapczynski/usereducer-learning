import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ addHandler }) => {
  const [input, setInput] = useState('');

  const handleOnClick = () => {
    const course = {
      id: uuidv4(),
      title: input,
    };

    addHandler({
      course,
      type: 'ADD',
    });
    setInput('');
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      {/* <div>{console.log(state)}</div> */}
      <input type="text" value={input} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Dodaj</button>
    </div>
  );
};

export default Form;
