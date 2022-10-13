import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledLi } from "./styles";

const ListItem = ({ title, status, techId }) => {
  const { deleteTech } = useContext(TechContext);

  return (
    <StyledLi>
      <h3>{title}</h3>
      <div>
        <p>{status}</p>
        <button onClick={() => deleteTech(techId)}>Excluir</button>
      </div>
    </StyledLi>
  );
};

export default ListItem;
