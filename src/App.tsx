import { useEffect, useState } from "react"
import Card, { type CardType } from "./components/Card"

const App = () => {
  const [cards, setCards] = useState<CardType[]>([])

  useEffect(()=>{
    fetch("cards.json")
    .then(response => response.json())
    .then(data => setCards(data))
  },[])

  return (
    <div>
      <main>
        {cards.map(card => <Card {...card} />)}
      </main>
    </div>
  )
}

export default App