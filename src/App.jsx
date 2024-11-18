import { useState } from 'react'
import { Parent } from './Components_Ex2/Parent';
import { Title } from './components/Title'
import { Paragraph } from './components/Paragraph'
import { Image } from './components/Image'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Title />
        <Paragraph />
        <Image />
          <h1>Exercice avec un composant Parent et un Enfant</h1>
          <Parent />
      </div>
    </>
  )
}

export default App
