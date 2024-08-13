import './App.css';
import Intro from './components/Intro';
import FinancialSupport from './screens/FinancialSupport';
import OurServices from './screens/OurServices';
import Navbar from './screens/Navbar';
import Landing from './screens/Landing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Intro />
      <FinancialSupport />
      <OurServices />
    </div>
  );
}

export default App;
