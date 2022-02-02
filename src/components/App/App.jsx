import './App.css';
import { useState } from 'react';
import Container from '../Container';
import Input from '../Input';
import List from '../List';
import SortSelect from '../SortSelect';
import defineValue from '../../utils/defineValue';
import addElement from '../../utils/addElement';

function App() {
  const [sortIndex, setSortIndex] = useState(0);

  const [stringArr, setStringArr] = useState([]);
  const [numberArr, setNumberArr] = useState([]);
  const [combinedArr, setCombinedArr] = useState([]);

  const handleInputStateLift = (value) => {
    const isSomething = defineValue(value);

    switch (isSomething) {
      case 'isString':
        setStringArr((state) => addElement(state, value));
        break;
      case 'isNumber':
        setNumberArr((state) => addElement(state, value));
        break;
      case 'isCombined':
        setCombinedArr((state) => addElement(state, value));
        break;
      default:
        return null;
    }
  };

  return (
    <section className="app">
      <div className="app__select-wrapper">
        <SortSelect setSortIndex={setSortIndex} sortIndex={sortIndex} />
      </div>
      <Container>
        <Input handleInputStateLift={handleInputStateLift} />
      </Container>
      <Container color="peach">
        <List sortIndex={sortIndex} items={stringArr} />
      </Container>
      <Container color="violet">
        <List sortIndex={sortIndex} items={numberArr} theme="light" />
      </Container>
      <Container color="black">
        <List sortIndex={sortIndex} items={combinedArr} theme="light" />
      </Container>
    </section>
  );
}

export default App;
