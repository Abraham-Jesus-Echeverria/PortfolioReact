import "./jumbotron.css";
import logo from "../../../assets/images/AE-LOGO-NONEBACKGROUND.png";
import Button from "../../Button";

export default function Jumbotrom({ modalActive }) {
  return (
    <>
      <div className="jumbotronContainer">
        <div className="imageContainer">
        </div>
        <div className="textContainer">
          <h1 className="titleStyle">
            ¡Hola! me llamo Abraham Echeverria y soy web developer 
            <div className="buttonContainerJumbotrom">
              <Button styles="buttonGlobal" handleButton={modalActive}>
                ¡Contactame ya!
              </Button>
            </div>
          </h1>
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
