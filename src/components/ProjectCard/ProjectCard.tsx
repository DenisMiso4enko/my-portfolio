import "./index.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import Git from "../../icons/Git";
import Site from "../../icons/Site";

interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
  code: string;
  desc?: string;
}
const ProjectCard: FC<ProjectCardProps> = ({
  title,
  image,
  link,
  code,
  desc,
}) => {
  const { t } = useTranslation("portfolio");
  return (
    <div className="cards__item">
      <div className="front">
        <img src={image} alt={title} />
        <h3 className="front__title">{title}</h3>
      </div>
      <div className="back">
        <div className="back__links">
          <a href={code} target="_blank">
            <Git />
          </a>
          <a href={link} target="_blank">
            <Site />
          </a>
        </div>
        {desc && <p className="back__desc">{t(desc)}</p>}
      </div>
    </div>
  );
};

export default ProjectCard;
