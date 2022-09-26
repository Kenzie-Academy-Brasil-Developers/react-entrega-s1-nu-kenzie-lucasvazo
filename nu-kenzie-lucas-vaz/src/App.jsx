import { useState } from "react";
import "./App.css";
import HomeDescription from "./components/HomeDescription";
import HomeIllustration from "./components/HomeIllustration";
import Header from "./components/Header";
import InsertForm from "./components/InsertForm";
import Transactions from "./components/Transactions";

const App = () => {
  const [isLanding, setLanding] = useState(true);
  const [transactions, setTransactions] = useState([]);
  // const [filters, setFilters] = useState("Todos");

  const removeItem = (i) => {
    setTransactions(transactions.filter((t, index) => t.i !== index));
  };

  return isLanding ? (
    <div className="App">
      <section className="landingPage">
        <HomeDescription isLanding={isLanding} setLanding={setLanding} />
        <HomeIllustration />
      </section>
    </div>
  ) : (
    <section className="dashboard">
      <Header isLanding={isLanding} setLanding={setLanding}></Header>
      <main className="mainContainer">
        <InsertForm
          transactions={transactions}
          setTransactions={setTransactions}
        />
        <Transactions transactions={transactions} removeItem={removeItem} />
      </main>
    </section>
  );
};

export default App;
