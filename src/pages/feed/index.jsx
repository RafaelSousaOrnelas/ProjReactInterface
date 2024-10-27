import Heather from "../../components/Heather";
import { Column, Container, Title, TitleHighlight } from "./styles";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";


const Feed = () => {
    return (<>
        <Heather autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>  
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># Haking Top 5</TitleHighlight>
                <UserInfo percentual={100} nome="Rafa" image="https://avatars.githubusercontent.com/u/157997366?s=400&v=4"/>
                <UserInfo percentual={95} nome="Rafa" image="https://avatars.githubusercontent.com/u/157997366?s=400&v=4"/>
                <UserInfo percentual={70} nome="Rafa" image="https://avatars.githubusercontent.com/u/157997366?s=400&v=4"/>
                <UserInfo percentual={35} nome="Rafa" image="https://avatars.githubusercontent.com/u/157997366?s=400&v=4"/>
                <UserInfo percentual={35} nome="Rafa" image="https://avatars.githubusercontent.com/u/157997366?s=400&v=4"/>
            </Column>
            
        </Container>
    </>);
}

export default Feed;