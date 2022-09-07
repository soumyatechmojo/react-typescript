import Greet from "./component/Greet"

import './App.css';

function App() {
  
  return (
    <div>
      <Greet name = 'Soumyadeep' season = {35} isLoggedin = {false} />
    </div>
  );
}

export default App;