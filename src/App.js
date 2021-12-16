import './App.css';
import HelloBar from './components/HelloBar';
import HelloBeam from './components/HelloBeam';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="pt-12 bg-sky-50">
      <HelloBar />
      <div className="flex justify-around items-start">
        <HelloBeam />
        <NavBar />
        <HelloBeam />
      </div>
    </div>
  );
}

export default App;
