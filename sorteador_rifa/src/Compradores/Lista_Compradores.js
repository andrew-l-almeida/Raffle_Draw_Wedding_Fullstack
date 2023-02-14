import api from '../services/api'
import './Lista_Compradores.css'
import { useState } from 'react'
const Lista_Compradores = (props) => {
    const [buyers, setBuyers] = useState([])


    api.get('/getBuyers').then(result => {
        const resultTransformed = result.data.map(buyer => {
            return {nome: buyer.name, numeros: buyer.buyerNumbers.map(buyerNumber => {
                return buyerNumber.number
            })}
        })
        setBuyers(resultTransformed)
    })
    return (
        <table className='lista_compradores'>
            <tr>
                <td className='td__title'>Nome</td>
                <td className='td__title'>Numeros</td>
            </tr>
            {buyers.map((obj, i) => {
                return (    
                    <tr key={i}>
                        <td>{obj.nome}</td>
                        <td>{obj.numeros.map(numero => {
                            return(numero + '     ')
                        })}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default Lista_Compradores