import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Results from './Components/Results/Results';
import requests from './requests';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className="App">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
