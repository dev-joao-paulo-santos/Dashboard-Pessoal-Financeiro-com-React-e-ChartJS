import { useEffect, useState } from "react"
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import Aos from "aos";
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    Aos.init({duration: 600})
  }, [])
  const [expenses, setExpenses] = useState([]);
  const [expenseToEdit, setExpenseToEdit] = useState(null)

  useEffect(()=>{
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"))||[];
    setExpenses(storedExpenses)
  }, [])

  const addExpense = (expense) => {
    let updatedExpenses;

    if(expenseToEdit){
      updatedExpenses = expenses.map((exp) =>
      exp.id === expense.id ? expense : exp
      );
    } else {
      updatedExpenses = [...expenses, expense]
    }

    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    setExpenseToEdit(null)
  }

  const editExpense = (expense) => {
    setExpenseToEdit(expense);
  }

  const clearEdit = () => {
    setExpenseToEdit(null);
  }


  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-950 to-cyan-700 p-4 flex flex-col items-center">
      <h1 className='text-2xl text-white font-bold text-center' data-aos='fade-down'>Calculadora financeira</h1>
      <AddExpenseForm onAddExpense={addExpense} expenseToEdit={expenseToEdit} onClearEdit={clearEdit}/>
      <ExpenseList expenses={expenses} onEditExpense={editExpense} data-aos="fade-up"/>
      <ExpenseChart expenses={expenses} />
    </div>
  )
}

export default App;
