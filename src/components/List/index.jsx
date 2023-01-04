import Card from "../Card";
import "./style.css";
// import emptyImage from "../../assets/img/empty.jpg";

function List({ handleTransaction, filteredTransactions, listTransactions }) {
  return (
    <ul className="containerLista">
      {filteredTransactions.length <= 0
        ? listTransactions.map((transaction, index) => {
            return (
              <Card
                handleTransaction={handleTransaction}
                transaction={transaction}
                key={index}
              />
            );
          })
        : filteredTransactions.map((transaction, index) => {
            return (
              <Card
                listTransactions={listTransactions}
                handleTransaction={handleTransaction}
                transaction={transaction}
                key={index}
              />
            );
          })}
    </ul>
  );
}
export default List;

// filteredTransactions === "empty" ? (
//   <div>
//     <img className="emptyImg" src={emptyImage} alt="" />
//   </div>
// ) :
