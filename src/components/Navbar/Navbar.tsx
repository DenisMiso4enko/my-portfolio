import "./index.scss";
import { linksData } from "./linksData";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {linksData.map((link) => (
          <li className="navbar__item" key={link.name}>
            <NavLink to={link.path}>{t(link.name)}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
