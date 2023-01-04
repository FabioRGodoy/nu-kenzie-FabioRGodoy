import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import image from "./assets/img/illustration.png";
import logo from "./assets/img/NuKenzie1.png";

import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const [listTransactions, setListTransactions] = useState([]);

  function Start() {
    setIsLoggedIn(true);
  }

  function BackToHome() {
    setIsLoggedIn(false);
  }

  function handleFilterEntradas() {
    const haveEntries = listTransactions.some(
      (item) => item.type === "entrada"
    );
    console.log(haveEntries);

    if (haveEntries) {
      let filtroEntradas = listTransactions.filter((item) => {
        return item.type === "entrada";
      });
      setFilteredTransactions(filtroEntradas);
      console.log(filtroEntradas);
    } else {
      toast.error("Você não possui entradas");
    }
  }

  function handleFilterSaidas() {
    const haveExits = listTransactions.some((item) => item.type === "saida");
    console.log(haveExits);

    if (listTransactions.length) {
      let filtroSaidas = listTransactions.filter((item) => {
        return item.type === "saida";
      });
      setFilteredTransactions(filtroSaidas);
    } else {
      toast.error("Você não possui saidas");
    }
  }

  function handleFilterTodos() {
    if (listTransactions.length) {
      setFilteredTransactions([]);
    }
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Header BackToHome={BackToHome} />
          <main>
            <div className="containerFormTotal">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <div className="containerFinancialSummary">
              <div className="containerFiltro">
                <span className="text-1">Resumo financeiro</span>
                <div className="containerBtnFiltro">
                  <button
                    onClick={() => handleFilterTodos()}
                    className="btnFilter"
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => handleFilterEntradas()}
                    className="btnFilter"
                  >
                    Entradas
                  </button>
                  <button
                    onClick={() => handleFilterSaidas()}
                    className="btnFilter"
                  >
                    Despesas
                  </button>
                </div>
              </div>
              <List
                filteredTransactions={filteredTransactions}
                setListTransactions={setListTransactions}
                listTransactions={listTransactions}
              />
            </div>
          </main>
        </>
      ) : (
        <div className="background">
          <div className="containerHome">
            <div className="contentContainer">
              <img className="imgLogo" src={logo} alt="" />
              <p className="paragraphHome">
                Centralize o controle das suas finanças
              </p>
              <span className="spanSmall">de forma rápida e segura</span>
              <Button Start={Start}>Iniciar</Button>
            </div>
            <div className="containerImageHome">
              <img className="mainImageHome" src={image} alt="imagem" />
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
