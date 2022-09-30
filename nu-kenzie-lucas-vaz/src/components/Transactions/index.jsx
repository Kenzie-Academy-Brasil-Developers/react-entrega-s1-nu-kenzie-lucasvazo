import "./index.css";
import { IoMdTrash } from "react-icons/io";

const Transactions = ({ transactions, setTransactions }) => {
  const removeItem = (i) => {
    setTransactions(transactions.filter((t, index) => index !== i));
  };

  return (
    <section className="transactions">
      <div className="filtersHeader">
        <h3>Resumo Financeiro</h3>
        <div className="filtersButtons">
          <button type="button">Todos</button>
          <button type="button">Entradas</button>
          <button type="button">Despesas</button>
        </div>
      </div>
      <ul className="transactionsUl">
        {transactions.map((t, index) => (
          <li key={index}>
            <div>
              <p>{t.description}</p>
              <span>{`R$ ${t.ammount}`}</span>
              <button onClick={() => removeItem(index)}>
                <IoMdTrash />
              </button>
            </div>
            <small>Entrada</small>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Transactions;
