import { useState} from "react"
import './Sorteador.css'
const Sorteador = (props) => {
    const [numero, setNumero] = useState(0)
    const [nome, setNome] = useState('')

    const sortear = () => {
        sorteioLogic()
    }
    const sortearNumero = () => {
        let number = Math.ceil(Math.random() * (100 - 1) + 1)
        return number
    }
    const getWinner = (number) => {
        return props.getWinnerr(number)
    }
    const sorteioLogic = () => {
        const interval = setInterval(async () => {
            let number = sortearNumero()
            let winner = await getWinner(number)
            setNome(winner.name)
            setNumero(number)
        },20)
        setTimeout(() => {
            clearInterval(interval)
        }, 10000)
    }
    return(
        <div className="expense-item">
            <img src="Logo_Rifa.png" className="logo"></img>
            <h1 className="title">Sorteador</h1>
            <div className="expense-date">
                <div className="expense-date__month">{nome}</div>
                <div className="expense-date__day">{numero}</div>
            </div>
                <button onClick={sortear} className='new-expense'>Sortear</button>
        </div>
    )
}
export default Sorteador