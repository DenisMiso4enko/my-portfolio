import { useTranslation } from "react-i18next";
import "./index.scss";

const Contacts = () => {
  const { t } = useTranslation("contacts");
  return (
    <div className="contacts">
      <div className="container">
        <h2 className="page-title">{t("страница контактов")}</h2>
        <div className="contacts__info">
          <div className="info__item">
            <h3 className="info__title">{t("локация")}</h3>
            <p>{t("локация-инфо")}</p>
          </div>

          <div className="info__item">
            <h3 className="info__title">Telegram/Viber</h3>
            <a href="tel:+375298378081">+ (375) 29 837-80-81</a>
          </div>

          <div className="info__item">
            <h3 className="info__title">Email</h3>
            <a href="mailto:denrrmisochenko17@gmail.com">
              denrrmisochenko17@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
