import "./styles.css"
import {useState} from "react"

export const Card = ({transaction}) => {
    console.log(transaction)
    return(
        <div>
            <p>{transaction.description}</p>
            <p>{transaction.value}</p>
            <button>icon</button>
            <p>{transaction.type}</p>
        </div>
    )
}
