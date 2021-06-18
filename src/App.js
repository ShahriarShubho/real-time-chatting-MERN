import logo from './logo.svg';
import './App.css';
import ExoloreRef from './Components/ExoloreRef';
import ReducerCount from './Components/ReducerCount';
import ReducerPatientCount from './Components/ReducerPatientCount';

function App() {
  return (
    <div className="App">
      <ExoloreRef/>
      <ReducerCount/>
      <ReducerPatientCount/>
    </div>
  );
}

export default App;
