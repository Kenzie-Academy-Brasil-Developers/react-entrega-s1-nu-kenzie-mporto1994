import "./styles.css"
import {useState} from "react"
import {Card} from "../Card"

export const List = ({transactions}) => {
    console.log(transactions)
    return(
        <div className="list">
            <header>
                <h2>Resumo Financeiro</h2>
                <div>
                    <button>Todos</button>
                    <button>Entradas</button>
                    <button>Saidas</button>
                </div>
            </header>
            {transactions.map((transaction)=>(
                <Card transaction={transaction}/>
            ))}
        </div>
    )
}
