import './App.css';
import {useState} from "react"
import {List} from "./components/List"
import {Form} from "./components/Form"
import {TotalMoney} from "./components/TotalMoney"
import {Header} from "./components/Header"

function App() {
  const [listTransactions, setListTransactions] = useState([
  { description: "Salário recebido", type: "entrada", value: 2500 },
  { description: "Conta de luz", type: "saída", value: -150 }
])

  return (
    <div>

      <Header/>
      <div className="Container">
        <div className='leftColumn'>
          <Form/>
          <TotalMoney/>
        </div>
        <List transactions={listTransactions}/>
      </div>
    </div>
  );
}

export default App;
