import { skillsData } from "./skillsData";
import "./index.scss";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__wrapper container">
        {Object.entries(skillsData).map((el, index) => (
          <div key={index} className="skills__front">
            <h3 className="skills__title">{el[0]}</h3>
            <div className="skills__list">
              {el[1].map((el) => (
                <p key={el}>{el}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
