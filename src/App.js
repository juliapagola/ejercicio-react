
import './App.css';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import Calculation from './Components/Operations/Calculation';
import Result from './Components/Operations/Result';
import { useState } from "react";

function App() {

  const [result, setResult] = useState(0);

  const calculate = (result) => {
    setResult(result);
    alert(result);
    console.log(result);
  }


  return (
    <div>
      <Header />
      <Calculation calculate={calculate} result = {result}/>
      <Result />
      <Footer />
    </div>
  );
}

export default App;
