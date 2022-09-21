import './App.css';
import Districts from './components/District/Districts';

function App() {
  return (
    <div className="App">
     {/* Component */}
     <Districts name="Kurigram" speciality="District"></Districts>
     <Districts name="Rangpur" speciality="Division"></Districts>
     <Districts name="Dhaka" speciality="Capital"></Districts>
    </div>
  );
}

export default App;
