import image from "../../assets/img/NuKenzie2.png";
import ButtonHeader from "../ButtonHeader";

import "./style.css";

function Header({ BackToHome }) {
  return (
    <header>
      <div className="containerHeader">
        <img className="logo" src={image} alt="" />
        <ButtonHeader BackToHome={BackToHome}>Inicio</ButtonHeader>
      </div>
    </header>
  );
}
export default Header;
