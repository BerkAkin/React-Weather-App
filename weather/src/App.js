import { useEffect, useState } from "react"
import Container from "./components/Container";
import './style.css'
function App() {

  const [weather,setWeather] = useState({})

 
  return (
    <>
      <Container/>
    </>
  );
}

export default App;
