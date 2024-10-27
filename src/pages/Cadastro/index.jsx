import Button from "../../components/Button";
import Heather from "../../components/Heather";
import { Column, Container, CriarText, Row, SubTitleLogin, TextContent, Title, TitleLogin, Wrapper} from "./styles";
import Input from "../../components/Input";
import {MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

const schema = yup.object({
    nome: yup.string().min(12, "No minimo 12 caracteres").required("Nome é obrigatorio"),
    email: yup.string().email("Email invalido").required("Campo obrigatorio"),
    password: yup.string().min(3, "No minimo 3 caracteres").required("Campo obrigatorio"),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();

    const {control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: onchange

    });
    const onRegister = async formData => {
        try {
            //verifica se o email ja existe
            const { data } = await api.get(`users?email=${formData.email}`);
            if(data.length > 0){
                alert("Email já cadastrado")
            }else {
                //realiza o caadastro de usuario
                const response = await api.post("users", {
                    nome: formData.nome,
                    email: formData.email,
                    senha: formData.password
                });

                if (response.status === 201) {
                    alert("Castro Realizado com sucesso!");
                    navigate("/login");
                } else {
                    alert("Erro ao cadastra!");
                }
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
                    <form onSubmit={handleSubmit(onRegister)}>
                        <Input name="nome" errorMensage={errors.nome?.message} control={control} placeholder="Nome Completo" leftIcon={<MdPerson />}/>
                        <Input name="email" errorMensage={errors.email?.message} control={control} placeholder="email" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMensage={errors.password?.message} control={control} placeholder="senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta gratis" variant="secundary" type="submit"/>
                    </form>
                    <Row>
                        <TextContent>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TextContent>
                    </Row>
                    <TextContent>Já tenho conta. <CriarText href="/login">Fazer Login</CriarText></TextContent>
                </Wrapper>
                
            </Column>
        </Container>
    </>);
}

export default Cadastro;