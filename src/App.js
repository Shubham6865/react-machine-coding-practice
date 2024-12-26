
import Counter from './Counter/Counter';
import ToDo from './ToDo/ToDo';
import './app.css'
function App() {
  return (
    <>
      <h1 className='title'>React Machine Coding Quetions</h1>
      <div className='mainContainer'>

        <Counter />
        <ToDo />
        <ToDo />
        <Counter />
        <Counter />
      </div>
    </>
  );
}

export default App;
