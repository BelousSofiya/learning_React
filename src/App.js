import './App.css';
import { useState } from 'react';
import MyComponent from './components/MyComponent';
import OtherComponent from './components/OtherComponent';
import PetInfo from './components/PetInfo';
import RandomNumber from './components/RandomNumber';
import Counter from './components/Counter';
import Button from './components/Button';

function App() {
  const [clickCounter, setClickCounter] = useState(0);
  const btnClickCounter = () => {
    setClickCounter(clickCounter + 1);
  };
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <PetInfo animal="cat" age="2" hasPet />
      <PetInfo animal="dog" age="3" />
      <RandomNumber maxnum={1000} />
      <Counter clickCounter={clickCounter} />
      {['Click me', 'Push me', 'Increase counter', '+ 1'].map((el, index) => {
        return (
          <Button onClickCounter={btnClickCounter} text={el} key={index} />
        );
      })}
      {/* <Button onClickCounter={btnClickCounter} />
      <Button onClickCounter={btnClickCounter} />
      <Button onClickCounter={btnClickCounter} />
      <Button onClickCounter={btnClickCounter} /> */}
    </div>
  );
}

export default App;
