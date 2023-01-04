import "./style.css";

function Button({ children, Start }) {
  return (
    <div>
      <button onClick={Start} className="btnIniciar">
        {children}
      </button>
    </div>
  );
}
export default Button;
