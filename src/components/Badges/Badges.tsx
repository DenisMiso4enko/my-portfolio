import "./index.scss";
import { FC } from "react";

interface BadgesProps {
  text: string;
}

const Badges: FC<BadgesProps> = ({ text }) => {
  return <div className="badge">{text}</div>;
};

export default Badges;
