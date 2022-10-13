import { useState } from "react";
import ListItem from "../ListItem";
import { StyledTechList } from "./styles";

const TechList = ({ user }) => {
  const [techs, setTechs] = useState(user.techs);
  return (
    <StyledTechList>
      {techs.map((tech, index) => (
        <ListItem
          key={index}
          title={tech.title}
          status={tech.status}
          techId={tech.id}
        />
      ))}
    </StyledTechList>
  );
};

export default TechList;
