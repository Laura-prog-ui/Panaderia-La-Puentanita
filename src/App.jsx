import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Description from './components/Description';
import Header from './components/Header'
import Productos from './components/Productos';


function App() {
  const [count, setCount] = useState(null)

  return (
    <Header></Header>,
    <Productos></Productos>,
    <Description></Description>
  );
}

export default App;
