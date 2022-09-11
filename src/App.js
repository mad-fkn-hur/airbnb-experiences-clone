import Card from "./Components/Card"
import data from "./Components/Data"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"
import './App.css';

export default function App() {
  const cards = data.map(item=>{
    return(
      <Card 
      key={item.id}
      item={item}/>
    )
  })
  return(<div className="appclass">
    <Navbar/>
    <Main/>
    <section className="card--list">
      {cards}
    </section>
  </div> );
}


