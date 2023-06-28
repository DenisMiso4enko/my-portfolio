import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content container">
        <div className="header__logo">
          <Link to={"/"}>
            D.<span>M</span>
          </Link>
        </div>
        <div className="header__right">
          <Navbar />
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
