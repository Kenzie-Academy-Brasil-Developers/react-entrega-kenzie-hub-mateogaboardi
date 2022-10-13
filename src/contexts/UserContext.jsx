import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tech, setTech] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@context-kenziehub:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const login = async (data) => {
    const response = await api.post("/sessions", data);
    const { user: userResponse, token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUser(userResponse);
    localStorage.setItem("@context-kenziehub:token", token);

    navigate("/dashboard", { replace: true });
  };

  const registerFunc = async (data) => {
    await api.post("/users", data);

    navigate("/login", { replace: true });
  };

  return (
    <UserContext.Provider
      value={{ user, login, registerFunc, loading, tech, setTech }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
