import logo from "./logo.png";
import { DivRegister, Error, Main, StyledForm, Title } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

const RegisterPage = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Precisa conter 8 caracteres, Uma letra maiúscula, Uma minúscula, Um número e Um símbolo."
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("passoword")], "Deve ser idêntica a senha original")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Precisa conter 8 caracteres, Uma letra maiúscula, Uma minúscula, Um número e Um símbolo."
      ),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Curso obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));

    navigate("/login", { replace: true });
  };

  return (
    <Main>
      <DivRegister>
        <img src={logo} alt="Logo" />
        <button onClick={() => navigate("/login", { replace: true })}>
          Voltar
        </button>
      </DivRegister>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Crie sua conta</h1>
          <Title>Rapido e grátis, vamos nessa</Title>
        </div>
        <span>Nome</span>
        <input placeholder="Digite aqui seu nome" {...register("name")} />
        <Error>{errors.name?.message}</Error>
        <span>Email</span>
        <input placeholder="Digite aqui seu email" {...register("email")} />
        <Error>{errors.email?.message}</Error>
        <span>Senha</span>
        <input
          type="password"
          placeholder="Digite aqui seu senha"
          {...register("password")}
        />
        <Error>{errors.password?.message}</Error>
        <span>Confirme sua senha</span>
        <input type="password" placeholder="Digite aqui seu senha" />
        <Error>{errors.password?.message}</Error>
        <span>Bio</span>
        <input placeholder="Fale mais sobre você" {...register("bio")} />
        <Error>{errors.bio?.message}</Error>
        <span>Contato</span>
        <input placeholder="Opção de contato" {...register("contact")} />
        <Error>{errors.contact?.message}</Error>
        <span>Selecionar módulo</span>
        <input placeholder="Módulo do curso" {...register("course_module")} />
        <Error>{errors.course_module?.message}</Error>
        <button type="submit">Cadastrar</button>
      </StyledForm>
    </Main>
  );
};

export default RegisterPage;
