import { useState } from "react";
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 1600},
    { id: 2, charge: "교통비", amount: 400},
    { id: 3, charge: "식비", amount: 1200}
  ])

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    // console.log(typeof e.target.valueAsNumber)
    setAmount(e.target.valueAsNumber);
  }

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    
    setExpenses(newExpenses);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0) {
      // const newExpense = {id: crypto.randomUUID(), charge: charge, amount: amount};
      const newExpense = {id: crypto.randomUUID(), charge, amount};

      //불변성을 지켜주기 위해서 새로운 expenses를 생성
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setCharge("");
      setAmount(0);

    } else {
      console.log('error');
    }
  }

  return (
    <main className="main-container">
      <h1>예산 계산기</h1>

      <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
        {/* Expense Form */}
        <ExpenseForm
        handleCharge = {handleCharge}
        charge = {charge}
        handleAmount = {handleAmount}
        amount = {amount}
        handleSubmit = {handleSubmit}
        />
      </div>

      <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
        {/* Expense List */}
        <ExpenseList
        initialExpenses={expenses}
        handleDelete={handleDelete}
        />
      </div>

      <div style={{display: 'flex', justifyContent: 'end', marginTop: '1rem'}}>
        <p style={{fontSize: '2rem'}}>
          총지출:
          <span>원</span>
        </p>
      </div>
    </main>
  )
}


export default App;