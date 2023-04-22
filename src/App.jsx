import { useState } from 'react'
import viteLogo from '/vite.svg'
import { potionAttributes } from './arrs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const getRandomValue = (value) => {
    return value[value.length * Math.random() | 0]
  }
//<img src={viteLogo} className="logo react" alt="React logo" />
  return (
    <>
      <div className='bgSimple'>
        <span>Dingus presents</span>
        <h1 className='colorChange' style={{marginTop: 0}}>
          Potion Maker
        </h1>
        <div>
          <h3 style={{marginBottom: 0}} className="inlineBlock">This is a,&nbsp;</h3><h2 style={{marginTop: 0}} className="inlineBlock" >{getRandomValue(potionAttributes.potionType)}</h2>
        </div>
        <div>
          <h3 style={{marginBottom: 0}} className="inlineBlock">The potions main effect is,&nbsp;</h3><h2 style={{marginTop: 0}} className="inlineBlock">{getRandomValue(potionAttributes.potionMainEffect)}</h2>
        </div>
        <div>
          <h3 style={{marginBottom: 0}} className="inlineBlock">The potions strength is,&nbsp;</h3><h2 style={{marginTop: 0}}  className="inlineBlock">{getRandomValue(potionAttributes.potionStrenght)}</h2>
        </div>
        <div>
          <h3 style={{marginBottom: 0}} className="inlineBlock">The potion also causes (usually) temporary,&nbsp;</h3><h2 style={{marginTop: 0}}  className="inlineBlock">{getRandomValue(potionAttributes.potioonSideEffect)}</h2>
        </div>
        <div>
          <h3 style={{marginBottom: 0}} className="inlineBlock">The potion is in a,&nbsp;</h3><h2 style={{marginTop: 0}}  className="inlineBlock">{getRandomValue(potionAttributes.potionContainer)}</h2>
        </div>
        <div>
          <h3 style={{marginBottom: 0}} className="inlineBlock">The potion looks,&nbsp;</h3><h2 style={{marginTop: 0}}  className="inlineBlock">{getRandomValue(potionAttributes.potionAppearance)}</h2>
        </div>
        <div>
          <h3 style={{marginBottom: 0}} className="inlineBlock">With,&nbsp;</h3><h2 style={{marginTop: 0}}  className="inlineBlock">{getRandomValue(potionAttributes.potionSecondAppearance)}</h2>
        </div>
        <div>
          <h3 style={{marginBottom: 0}} className="inlineBlock">The potion is,&nbsp;</h3><h2 style={{marginTop: 0}}  className="inlineBlock">{getRandomValue(potionAttributes.potionTexture)}</h2>
        </div>
        <div>
          <h3 style={{marginBottom: 0}} className="inlineBlock">The potion smells like,&nbsp;</h3><h2 style={{marginTop: 0}}  className="inlineBlock">{getRandomValue(potionAttributes.potionSmellAndTaste)}</h2>
        </div>
        <div>
          <h3 style={{marginBottom: 0}} className="inlineBlock">but tastes like,&nbsp;</h3><h2 style={{marginTop: 0}}  className="inlineBlock">{getRandomValue(potionAttributes.potionSmellAndTaste)}</h2>
        </div>
        <div>
          <h3 style={{marginBottom: 0}} className="inlineBlock">The potion has a label showing,&nbsp;</h3><h2 style={{marginTop: 0}}  className="inlineBlock">{getRandomValue(potionAttributes.potionLabel)}</h2>
        </div>
        
      </div>
    </>
  )
}

export default App
