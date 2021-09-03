import './App.css';
import { useState } from 'react';
import FruitList from './compenents/FruitList'

function App() {
  const [fruits, setFruits] = useState([
    {name: 'banana', color: 'yellow', price: 2},
    {name:'cherry', color:'red', price: 3},
    {name:'strawberry', color: 'red', price: 4},
  ])

  const totalPrice = fruits.reduce(function(soma, fruit){
    return soma + fruit.price
  }, 0)

  function filterRedFruits(){
    setFruits(
      fruits.filter((fruit) => fruit.color === 'red')
    )
  }

  return (
    <div className="App">
      <header className="App-header">
      <p>Preço total = {totalPrice}</p>
      <ul>
        <FruitList fruits={fruits}/>
      </ul>
        <button onClick={() => filterRedFruits()}>Mostrar frutas vermelhas</button>
      </header>
    </div>
  )
}

export default App;
