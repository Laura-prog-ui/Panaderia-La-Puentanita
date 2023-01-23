import { useState } from 'react'
import Description from './components/Description';
import Products from './components/Products';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [count, setCount] = useState(null)

  return (
    <div>
      <Navigation/>
      <Description/>
      <div className='App'>
        <Cards/>
      </div>
      <Products/>
      <Contact/>
    </div>
  )
}

export default App;
