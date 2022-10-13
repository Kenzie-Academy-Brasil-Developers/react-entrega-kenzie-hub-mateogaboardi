import { createContext } from "react";
import api from "../services/api";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const createTech = async (data) => {
    const response = await api.post("/users/techs", data);
    const { token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;
    window.location.reload(true);
  };

  const deleteTech = async (id) => {
    const response = await api.delete(`/users/techs/${id}`);
    const { token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;
    window.location.reload(true);
  };

  return (
    <TechContext.Provider value={{ createTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
