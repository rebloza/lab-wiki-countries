import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <div id="countries">
        <Navbar />

        <div className="contry-info">
        
            <CountriesList />
        
          <Routes>
            <Route path="/countries-details/:countries" element={<CountryDetails />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
