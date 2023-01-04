import { MdDeleteOutline } from "react-icons/md";
import "./style.css";

function Card({ handleTransaction, transaction, index }) {
  return (
    <>
      {transaction.type === "entrada" ? (
        <li key={index} className="transactionEntrada">
          <div className="containerDescription">
            <h2 className="text-1">{transaction.description}</h2>
            <p className="text-2">entrada</p>
          </div>
          <div className="containerValueAndBtn">
            <span className="text-3">R${transaction.value}</span>
            <button onClick={() => handleTransaction(transaction)}>
              <MdDeleteOutline size={20} />
            </button>
          </div>
        </li>
      ) : (
        <li key={index} className="transactionSaida">
          <div className="containerDescription">
            <h2 className="text-1">{transaction.description}</h2>
            <p className="text-2">saída</p>
          </div>
          <div className="containerValueAndBtn">
            <span className="text-3">R${transaction.value}</span>
            <button onClick={() => handleTransaction(transaction)}>
              <MdDeleteOutline size={20} />
            </button>
          </div>
        </li>
      )}
    </>
  );
}
export default Card;
