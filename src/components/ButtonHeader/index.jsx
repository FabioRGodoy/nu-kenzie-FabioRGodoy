import "./style.css";

function ButtonHeader({ children, BackToHome }) {
  return (
    <div>
      <button onClick={BackToHome} className="btnBack">
        {children}
      </button>
    </div>
  );
}
export default ButtonHeader;
