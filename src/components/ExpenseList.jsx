import React, { useEffect } from 'react'
import Aos from 'aos';

const ExpenseList = ({expenses, onEditExpense}) => {
    useEffect(()=>{Aos.init({duration:750})},[])
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <div className="mt-6 w-3/6">
        <h2 className="text-xl font-bold text-white mb-4 text-center"data-aos='fade-left'>Gastos mensais</h2>
        <ul data-aos='fade-right' className="bg-white w-full p-4 shadow rounded-t-2xl">
            {expenses.map((expense) => (
                <li key={expense.id} className="flex justify-evenly items-center border-b py-2">
                    <div className='flex flex-col items-center'>
                    <span className='block'>{expense.name}</span>
                    <span className="text-gray-500 text-center">{expense.category}</span>
                    </div>
                    <div className="w-2/6 flex items-center justify-between gap-4">
                    <span className="text-green-600 font-bold">R$ {expense.amount.toFixed(2)}</span>
                    <button onClick={()=>onEditExpense(expense)} className='text-blue-700 cursor-pointer'>Editar</button>
                    </div>
                </li>
            ))}
        </ul>
        <div data-aos='fade-right' className="bg-gray-300 text-center h-6 rounded-b-2xl">
            <strong>Total: R$ {total.toFixed(2)}</strong>
        </div>
    </div>
  )
}

export default ExpenseList;