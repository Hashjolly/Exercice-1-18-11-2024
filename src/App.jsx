import { useState } from 'react'
import { Title } from './components/Title';
import { Paragraph } from './components/Paragraph';
import { Image } from './components/Image';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="components-section">
        <Title />
        <Paragraph />
        <Image />
      </div>
    </>
  )
}

export default App
