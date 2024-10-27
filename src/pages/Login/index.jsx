import Button from "../../components/Button";
import Heather from "../../components/Heather";
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from "./styles";
import Input from "../../components/Input";
import {MdEmail, MdLock} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

const schema = yup.object({
    email: yup.string().email("Email invalido").required("Campo obrigatorio"),
    password: yup.string().min(3, "No minimo 3 caracteres").required("Campo obrigatorio"),
}).required();

const Login = () => {
    const navigate = useNavigate();

    const {control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: onchange

    });
    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha${formData.password}`);
            if(data.length === 1){
                navigate("/feed");
            }else {
                alert("Email ou senha invalido!")
            }
        } catch {
            alert("Ops tente novamente")
        }
    }; //pega a oque foi enviado

    return (<>
        <Heather />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu Login</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMensage={errors.email?.message} control={control} placeholder="email" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMensage={errors.password?.message} control={control} placeholder="senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant="secundary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
                
            </Column>
        </Container>
    </>);
}

export default Login;