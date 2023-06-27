import "./index.scss";
import { useTranslation } from "react-i18next";
import { data } from "../../../data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Portfolio = () => {
  const { t } = useTranslation("portfolio");
  return (
    <div className="portfolio">
      <div className="portfolio__wrapper container">
        <h2 className="page-title">{t("страница портфолио")}</h2>
        <div className="portfolio__cards">
          {data.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
