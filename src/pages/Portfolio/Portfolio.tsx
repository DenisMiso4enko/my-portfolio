import "./index.scss";
import { useTranslation } from "react-i18next";
import { data, filters } from "../../../data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [tab, setTab] = useState("All");
  const { t } = useTranslation("portfolio");
  return (
    <motion.div
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="portfolio__wrapper container">
        <h2 className="page-title">{t("страница портфолио")}</h2>
        <div className="portfolio__filters">
          {filters.map((item) => (
            <Button
              key={item}
              className={"btn-tab"}
              onClick={() => setTab(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="portfolio__cards">
          {data
            .filter((item) => {
              if (tab === "All") return item;
              return item.tag === tab;
            })
            .map((item) => (
              <ProjectCard key={item.id} {...item} />
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
