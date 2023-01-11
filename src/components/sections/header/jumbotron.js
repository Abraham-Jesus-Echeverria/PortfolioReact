import "./jumbotron.css";
import Computadora from "../../../assets/images/computadora1.jpg";
import logo from "../../../assets/images/AE-LOGO-NONEBACKGROUND.png";
import Button from "../../Button";

export default function Jumbotrom({ modalActive }) {
  return (
    <>
      <div className="jumbotronContainer">
        <div className="imageContainer">
          <img src={Computadora} alt="imagen computadora1"className="imageStyle"/>
        </div>
        <div className="textContainer">
          <h1 className="titleStyle">
            ¡Hola! me llamo Abraham Echeverria y soy web developer
          </h1>
        </div>
        <div className="buttonContainerJumbotrom">
          <Button styles="buttonJumbotronStyle" handleButton={modalActive}>
            ¡Contactame ya!
          </Button>
        </div>
        <div className="logoJumbotromContainer">
          <div className="alignLogo">
            <img src={logo} alt="logitpo-AE" />
          </div>
        </div>
      </div>
    </>
  );
}
