import './App.css';
import Header from './components/header/Header'
import Card from './components/card/Card';
import data from './data';

function App() {
  const cards = data.map(card => {
    return (
      <Card
        key={card.id}
        {...card}
      />
    )
  })
  return (
    <div className='main_card'>
      <Header />
      <div className='destinations_container'>
        {cards}
      </div>
    </div>    
  );
}

export default App;
