import Wrapper from './components/Wrapper';
import MyComponent from './components/MyComponent';
import './styles.scss';
import Alert from './components/Alert';
import { useState } from 'react';

const food = ['Pizza', 'Hamburger', 'Coke'];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <Wrapper className="flex">
        <MyComponent title="It Works" />
        <ul>
          {food.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Alert
          setInputValue={setInputValue}
          inputValue={inputValue}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
        <p>{inputValue}</p>
      </Wrapper>
    </div>
  );
}
export default App;
