import Button from "../../components/Button";
import Heather from "../../components/Heather";
import { Container, TextContent, Title, TitleHighlight } from "./styles";
import Banner from "../../assets/banner.png"
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const handleClickSigning = () => {
        navigate("/login");
    };
    return (<>
        <Heather />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br />
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras DO MUNDO!
                </TextContent>
                <Button title="Começar agora" variant="secundary" onClick={handleClickSigning}/>
            </div>
            <div>
                <img src={Banner} alt="Imagem Principal" />
            </div>
        </Container>
    </>);
}

export default Home;