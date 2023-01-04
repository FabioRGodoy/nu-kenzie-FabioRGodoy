import { useState } from "react";
import { toast } from "react-toastify";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (description === "" || value === "") {
      toast.error("Insira as informaçoes da transação");
    } else {
      setListTransactions([...listTransactions, { description, value, type }]);
    }

    setDescription("");
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="containerDescription">
        <label className="text-2">Descrição</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-default"
          placeholder="Digite aqui sua descrição"
          type="text"
        />
        <span className="text-2">Ex: Compra de roupas</span>
      </div>
      <div className="containerValueAndType">
        <div className="valueContainer">
          <label className="text-2">Valor</label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ex: 1500"
            className="input-default"
            type="text"
          />
        </div>
        <div className="typeContainer">
          <label className="text-2">Tipo de valor</label>
          <select
            onChange={(e) => setType(e.target.value)}
            className="input-default"
            name=""
            id=""
          >
            <option value="">Selecione o tipo</option>
            <option value="entrada">entrada</option>
            <option value="saida">saida</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btnIserir">
        Inserir Valor
      </button>
    </form>
  );
}
export default Form;
