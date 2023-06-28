import { skillsData } from "./skillsData";
import "./index.scss";
import Badges from "../Badges/Badges";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      animate={{ y: 0, scale: 1 }}
      initial={{ y: 100 }}
      className="skills"
    >
      <div className="skills__wrapper container">
        {Object.entries(skillsData).map((el, index) => (
          <div key={index} className="skills__front">
            <h3 className="skills__title">{el[0]}</h3>
            <div className="skills__list">
              {el[1].map((el) => (
                <Badges key={el} text={el} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
