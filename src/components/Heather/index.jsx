import Button from "../Button";
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Warpper } from "./styles";
import Logo from "../../assets/Logo-Dio.png"

const Heather = ({autenticado}) => {
    return (
        <Warpper>
            <Container>
                <Row>
                    <img src={Logo} alt="Logo Dio" width={65} height={32} />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ): null}
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..." />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/157997366?s=400&v=4"/>
                    ): (
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar"/>
                            <Button title="Cadastrar"/>
                        </>
                    )}
                    
                </Row>
            </Container>
        </Warpper>
    );
};

export default Heather;