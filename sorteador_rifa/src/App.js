import './App.css'
import Sorteador from './Sorteador/Sorteador';
import Lista_Compradores from './Compradores/Lista_Compradores';
import api from './services/api';

function App() {
const SeachWinner = async (number) => {
    let winner;
    const data = await api.get('/getBuyers') 

    data.data.filter(buyers => {
      buyers.buyerNumbers.filter(num => {
        if(num.number === number) {
          winner = buyers
        }
      })
    })
    return winner;
}
  return (
    <div>
      <div className='expenses'>
        <Sorteador getWinnerr={SeachWinner}/>
      </div>
      <div className='expenses'>
        <Lista_Compradores /> 
      </div>
    </div>
  )
}

export default App;
