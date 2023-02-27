import { Kbd, Wrap } from '@chakra-ui/react';
import './App.css';
import DayNight from './Components/Day-Night';
import ToDo from './Components/ToDo';

function App() {
  return (
    <div className="App">
      <Wrap mt={'1%'}>
  <Kbd alignSelf={'self-start'} >React-Redux Project</Kbd>
      </Wrap>
      <DayNight/>
      <ToDo/>
    </div>
  );
}

export default App;
