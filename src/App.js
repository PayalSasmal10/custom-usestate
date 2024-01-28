import './App.css';

const useCustState = (defaultValue) => {
  const setDefaultValue = (newValue) => {
    // do something
    defaultValue = newValue;
    console.log(defaultValue);

  };
  console.log("outside", defaultValue);
  const state = [defaultValue, setDefaultValue];
  return state;
}

function App() {
  const [count, setCounter] = useCustState(4);

  const onIncrementButtonHandler = () =>{
    setCounter(count+1);
  }

  const onDecrementButtonHandler = () => {
    setCounter(count-1);
  };

  return (
    <div className="App">
      <button className="button" onClick={onDecrementButtonHandler}>-</button>
      <span>{count}</span>
      <button className="button" onClick={onIncrementButtonHandler}>+</button>
    </div>
  );
}

export default App;
