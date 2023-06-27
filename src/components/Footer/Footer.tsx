import "./index.scss";
import { footerData } from "./footerData";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__links">
          {footerData.map((link) => (
            <a href={link.path} target="_blank" key={link.name}>
              {<link.icon />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
