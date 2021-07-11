import logo from "../../../logo.svg";
import "./Header.css";
export const Header = () => (
  <div className="header">
    <img className="image" src={logo} alt="Queueify"></img>
    <div className="brand">Queueify</div>
  </div>
);
