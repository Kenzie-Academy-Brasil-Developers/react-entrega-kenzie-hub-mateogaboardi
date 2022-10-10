import {
  Container,
  ContainerInfo,
  ContainerModules,
  StyledHeader,
  StyledMain,
} from "./styles";
import logo from "./logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = ({ setAuthentication }) => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("authToken");

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const data = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("https://kenziehub.herokuapp.com/profile", data)
      .then((response) => setProfile(response.data))
      .catch((err) => console.log(err));
  }, [token]);

  function logout() {
    navigate("/login", { replace: true });
    window.localStorage.clear();
    setAuthentication(false);
  }

  console.log(profile);

  return (
    <>
      <StyledHeader>
        <Container>
          <img src={logo} alt="Logo" />
          <button onClick={logout}>Logout</button>
        </Container>
      </StyledHeader>
      <StyledMain>
        <ContainerInfo>
          <div>
            <h1>Olá, {profile.name}</h1>
            <p>{profile.course_module}</p>
          </div>
        </ContainerInfo>
        <ContainerModules>
          <div>
            <h2>Que pena! Estamos em desenvolvimento :&#10088;</h2>
            <h3>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades.
            </h3>
          </div>
        </ContainerModules>
      </StyledMain>
    </>
  );
};

export default Dashboard;
