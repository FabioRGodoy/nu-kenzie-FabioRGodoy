import "./style.css";

function TotalMoney({ listTransactions }) {
  const total = listTransactions.reduce((acc, crr) => {
    let soma = 0;
    if (crr.type === "entrada") {
      soma = acc + +crr.value;
    } else {
      soma = acc - +crr.value;
    }

    return soma;
  }, 0);

  return (
    <div>
      <div className="containerValue">
        <div className="containerFlex">
          <span className="text-1">Valor total:</span>
          <span className="saldo">$ {total}</span>
        </div>
        <span className="text-2">O valor se refere ao saldo.</span>
      </div>
    </div>
  );
}
export default TotalMoney;
