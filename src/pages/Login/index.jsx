import logo from "./logo.png";
import { StyledFormLogin, StyledMain, RegisterContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";

const LoginPage = ({ setAuthentication }) => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        console.log(response);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
        setAuthentication(true);
      })
      .catch((err) => console.log(err));

    navigate("/dashboard", { replace: true });
  };

  return (
    <StyledMain>
      <img src={logo} alt="Logo" />
      <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Login</h1>
        </div>
        <span>Email</span>
        <input placeholder="Digite seu email aqui" {...register("email")} />
        <h4>{errors.email?.message}</h4>
        <span>Senha</span>
        <input
          placeholder="Digite sua senha aqui"
          type="password"
          {...register("password")}
        />
        <h4>{errors.password?.message}</h4>
        <button type="submit">Entrar</button>
      </StyledFormLogin>
      <RegisterContainer>
        <p>Ainda não possui uma conta?</p>
        <button onClick={() => navigate("/register", { replace: true })}>
          Cadastre-se
        </button>
      </RegisterContainer>
    </StyledMain>
  );
};

export default LoginPage;
