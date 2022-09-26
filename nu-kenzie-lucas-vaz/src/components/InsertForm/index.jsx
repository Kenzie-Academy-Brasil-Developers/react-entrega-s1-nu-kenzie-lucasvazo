import { useState } from "react";
import "./index.css";

const InsertForm = ({ transactions, setTransactions }) => {
  const [description, setDescription] = useState("");
  const [ammount, setAmmount] = useState(0);
  const [typeIncome, setTypeIncome] = useState("Entrada");

  const handleSubmit = (event) => {
    event.preventDefault();

    setTransactions([...transactions, { description, ammount, typeIncome }]);

    setDescription("");
    setAmmount(0);
    setTypeIncome("Entrada");

    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="insertForm">
        <h4>Descrição</h4>
        <input
          className="generalInputs"
          type="text"
          name="descriptionInput"
          id="descriptionId"
          required="yes"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <small>Ex. Compra de Roupas</small>
        <div>
          <fieldset>
            <h4>Valor</h4>
            <div className="inputValueDiv">
              <input
                type="number"
                required="yes"
                name="valueInput"
                id="valueId"
                placeholder="1"
                onChange={(event) => setAmmount(event.target.value)}
              />
              <p>R$</p>
            </div>
          </fieldset>
          <fieldset className="selectType">
            <h4>Tipo de valor</h4>
            <select
              name="valueTypeInput"
              required="yes"
              id="valueTypeId"
              onChange={(event) => setTypeIncome(event.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </fieldset>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
    </>
  );
};

export default InsertForm;
