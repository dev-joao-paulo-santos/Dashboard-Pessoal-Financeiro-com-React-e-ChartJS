import React, { useEffect } from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import Aos from 'aos'

ChartJS.register(CategoryScale, LinearScale, BarElement)

const ExpenseChart = ({expenses}) => {

    useEffect(()=>{Aos.init({duration: 1000})}, [])

    const categories = ["Transporte", "Alimentação", "Contas", "Outros"];
    const dataByCategory = categories.map((category) => 
    expenses
    .filter((expense) => expense.category === category)
    .reduce((sum, expense) => sum + expense.amount, 0)
);

const data = {
    labels: categories,
    datasets: [
        {
            label: "Gastos por Categoria",
            data: dataByCategory,
            backgroundColor: ["#FF1053", "#27FB6B", "#FAAA65", "#264488"]
        }
    ]
}

  return (
    <div className="mt-6 w-3/6 bg-white p-4 shadow rounded" data-aos='flip-down'>
        <h2 className="text-xl text-center font-bold mb-4">Gráfico de Gastos</h2>
        <Bar data={data}/>
    </div>
  )
}

export default ExpenseChart
