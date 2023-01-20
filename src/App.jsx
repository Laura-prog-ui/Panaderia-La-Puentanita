import { useState } from 'react'
import Description from './components/Description';
import Products from './components/Products';
import Card from './components/Card';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [count, setCount] = useState(null)

  return (
    <div>
      <Navigation/>
      <Description/>
      <Card/>
      <Products/>
      <Contact/>
    </div>
  )
}

export default App;
