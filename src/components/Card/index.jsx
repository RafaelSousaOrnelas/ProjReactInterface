import { FiThumbsUp } from "react-icons/fi";
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles";

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/157997366?s=400&v=4"/>
                    <div>
                        <h4>Rafael</h4>
                        <p>8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto html</h4>
                    <p>Projeto feito curso react <strong>saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#Html, #Css e #Js</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
};

export default Card;