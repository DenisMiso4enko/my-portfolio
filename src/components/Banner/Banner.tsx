import { useTranslation } from "react-i18next";
import me from "../../assets/me.png";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import "./index.scss";

const Banner = () => {
  const { t } = useTranslation("home");
  return (
    <main className="banner">
      <div className="banner__wrapper container">
        <motion.div
          animate={{ x: 0, scale: 1 }}
          initial={{ x: -500 }}
          className="banner__content"
        >
          <h1 className="banner__title">{t("приветствие")}</h1>
          <p className="banner__subtitle">{t("сообщение")}</p>
          <a href="../../cv/CV.pdf" download>
            <Button size={"lg"}>{t("скачать")}</Button>
          </a>
        </motion.div>
        <motion.div
          animate={{ x: 0, scale: 1 }}
          initial={{ x: 500 }}
          className="banner__image"
        >
          <img src={me} alt="profile" />
        </motion.div>
      </div>
    </main>
  );
};

export default Banner;
