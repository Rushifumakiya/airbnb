import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import HostPage from './Components/Host/HostPage';
import TryHosting from './Components/TryHosting/TryHosting';
import LetsGo from './Components/LetsGo/LetsGo';
import Flat from './Components/Flat/Flat';
import RentalUnit from './Components/Rental/RentalUnit';
import CardDetails from './Components/CardDetails/CardDetails';
import Maldives from './Components/Maldives-Image/Maldives';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/HostPage' element={<HostPage/>} />
          <Route path='/tryhosting' element={<TryHosting/>} />
          <Route path='/go' element={<LetsGo/>} />
          <Route path='/flat' element={<Flat/>} />
          <Route path='/rent' element={<RentalUnit/>} />
          <Route path='/card-det' element={<CardDetails/>} />
          <Route path='/Maldives' element={<Maldives />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
