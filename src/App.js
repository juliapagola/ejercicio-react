
import './App.css';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import Calculation from './Components/Operations/Calculation';
import Result from './Components/Operations/Result';

function App() {
  return (
    <div>
      <Header />
      <Calculation />
      <Result />
      <Footer />
    </div>
  );
}

export default App;
