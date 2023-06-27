import { useTranslation } from "react-i18next";
import me from "../../assets/me.png";
import "./index.scss";
import Button from "../Button/Button";

const Banner = () => {
  const { t } = useTranslation("home");
  return (
    <main className="banner">
      <div className="banner__wrapper container">
        <div className="banner__content">
          <h1 className="banner__title">{t("приветствие")}</h1>
          <p className="banner__subtitle">{t("сообщение")}</p>
          <Button className={"banner__btn"}>{t("скачать")}</Button>
        </div>
        <div className="banner__image">
          <img src={me} alt="profile" />
        </div>
      </div>
    </main>
  );
};

export default Banner;
