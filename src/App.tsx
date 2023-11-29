import './App.css';
//import { Cards } from './components/Cards';
import { Card } from './components/Card';


const cardFirst = {
  title: 'Card title',
  text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
  btnText: 'Go somewhere' 
}

const cardSecond = {
  title: 'Special title treatment',
  text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
  btnText: 'Go somewhere' 
}

function App() {
  return (
    <>
      <Card {...cardFirst}>
        <img src="https://images.unsplash.com/photo-1699723529092-87a9aa8c71da?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top"/>
      </Card>
      <Card {...cardSecond}/>
    </>
  )
}

export default App