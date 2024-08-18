import './App.css';
import Intro from './components/Intro';
import FinancialSupport from './screens/FinancialSupport';
import OurServices from './screens/OurServices';
import Navbar from './screens/Navbar';
import Landing from './screens/Landing';
import Footer from './screens/Footer';
import OurWork from './screens/OurWork';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Intro />
      <OurServices />
      <FinancialSupport />
      <OurWork />
      <Footer />
    </div>
  );
}

export default App;
