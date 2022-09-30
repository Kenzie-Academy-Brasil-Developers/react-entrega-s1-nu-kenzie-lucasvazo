import "./index.css";
import { IoMdTrash } from "react-icons/io";

const Transactions = ({
  transactions,
  setTransactions,
  filters,
  setFilters,
}) => {
  const removeItem = (i) => {
    setTransactions(transactions.filter((t, index) => index !== i));
  };

  return (
    <section className="transactions">
      <div className="filtersHeader">
        <h3>Resumo Financeiro</h3>
        <div className="filtersButtons">
          <button
            onClick={(event) => setFilters(event.target.value)}
            value="Todos"
            type="button"
            autoFocus
          >
            Todos
          </button>
          <button
            onClick={(event) => setFilters(event.target.value)}
            value="Entradas"
            type="button"
          >
            Entradas
          </button>
          <button
            onClick={(event) => setFilters(event.target.value)}
            value="Despesas"
            type="button"
          >
            Despesas
          </button>
        </div>
      </div>
      <ul className="transactionsUl">
        {transactions.map((t, index) => {
          if (filters === "Todos" || t.typeIncome === filters) {

            return (t.typeIncome === 'Entradas') ?
            (
              <li key={index} className="entradaTransaction">
                <div>
                  <p>{t.description}</p>
                  <span>{`R$ ${t.ammount}`}</span>
                  <button onClick={() => removeItem(index)}>
                    <IoMdTrash />
                  </button>
                </div>
                <small>Entrada</small>
              </li>
            ) :
            (
              <li key={index} className="saidaTransaction">
                <div>
                  <p>{t.description}</p>
                  <span>{`R$ ${t.ammount}`}</span>
                  <button onClick={() => removeItem(index)}>
                    <IoMdTrash />
                  </button>
                </div>
                <small>Despesa</small>
              </li>
            );    
          }
        })}
      </ul>
    </section>
  );
};

export default Transactions;
