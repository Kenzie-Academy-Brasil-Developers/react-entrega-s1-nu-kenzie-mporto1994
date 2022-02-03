import "./styles.css"
import {useState} from "react"

export const Form = () => {

    return(
        <form>
            <label>Descrição<input placeholder="Digite sua descrição"/><p>Ex:Compra de roupas</p></label>
            <div>
                <label>Valor<input placeholder="  1                       R$"/></label>
                <label>Tipo de valor
                    <select>
                        <option value="income" selected>Entrada</option>
                        <option value="expenses">Saída</option>
                    </select>
                </label>
            </div>
            
            <button>Inserir Valor</button>
        </form>
    )
}
