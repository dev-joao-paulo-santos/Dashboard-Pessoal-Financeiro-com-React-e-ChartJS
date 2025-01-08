import React, { useEffect, useState } from "react";
import Aos from "aos";

const AddExpenseForm = ({ onAddExpense, expenseToEdit, onClearEdit }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (expenseToEdit) {
      setName(expenseToEdit.name);
      setCategory(expenseToEdit.category);
      setAmount(expenseToEdit.amount);
    }
  }, [expenseToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return alert("Preencha todos os campos!");
    const expense = {
      name,
      category,
      amount: parseFloat(amount),
      id: expenseToEdit ? expenseToEdit.id : Date.now(),
    };
    onAddExpense(expense);
    setName("");
    setAmount("");
    if (expenseToEdit) onClearEdit()
  };

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <form
      data-aos="fade-left"
      onSubmit={handleSubmit}
      className="mt-10 w-3/6 bg-emerald-500 p-4 rounded-3xl flex flex-col items-center"
    >
      <div className="mb-4 w-5/6">
        <label className="block font-bold mb-1">Nome</label>
        <input
          type="text"
          value={name}
          className="border w-full p-2"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4 w-5/6">
        <label className="block font-bold mb-1">Categoria</label>
        <select
          className="border w-full p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option></option>
          <option>Transporte</option>
          <option>Alimentação</option>
          <option>Outros</option>
        </select>
      </div>
      <div className="mb-4 w-5/6">
        <label className="block font-bold mb-1">Valor</label>
        <input
          type="number"
          value={amount}
          className="border w-full p-2"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-2/6 bg-emerald-300 px-4 py-2 rounded-3xl duration-500 hover:bg-cyan-500"
      >
        {expenseToEdit ? "Atualizar": "Adicionar"}
      </button>
      {expenseToEdit && (
        <button type="button" className="w-2/6 mt-4 px-4 py-2 rounded-3xl bg-red-300 duration-500 hover:bg-red-600">
            Cancelar
        </button>
      )}
    </form>
  );
};

export default AddExpenseForm;
