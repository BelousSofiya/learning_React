import { useState } from 'react';
import generateRandomNum from '../utils/generateRandomNum';

function RandomNumber(props) {
  const [randnum, setRandnum] = useState(generateRandomNum(props.maxnum));
  //console.log(randnum);
  const btnRandomNumberClick = () => {
    setRandnum(generateRandomNum(props.maxnum));
  };
  return (
    <div>
      <h1>{randnum}</h1>
      <button onClick={btnRandomNumberClick}>Generate random number</button>
    </div>
  );
}

export default RandomNumber;
