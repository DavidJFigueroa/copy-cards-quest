import Reacht from 'react';
import styled from 'styled-components';

const Card = styled.div`
display: flex;
flex-direction: column;
border: 1px solid darkgrey;
width: 400px;
font-family: Arial, Helvetica, sans-serif;
border-radius: 5px;
box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
padding-bottom: 20px;
`;

const Image = styled.img`
src: "https://images.ctfassets.net/s5n2t79q9icq/01EdQaTKvAI6CwhQHgVsy/c5a2d68a1aa4bdc4149b5d5f4680bb01/EN_Kamigawa_Header.jpg"; `;

const Textdiv = styled.div` 
margin-left: 20px;`;

const Title = styled.h1`
color: black`;

const Stars = styled.span`
color: red;
margin-right: 10px;`;


const SecondaryText = styled.p`  
color: black;
font-weight: bold;`
;

const Text = styled.p`
color: grey;`;


const Line = styled.div`
background-color: lightgrey;
width: 90%;
height: 2px;`;

const Subtitle = styled.h2`
font-weight: bold;`;

const ItemContainer = styled.div`
display: flex`
;

const Button = styled.div`
margin: 10px;
background-color: lightgrey;
font-size: 13px;
font-weight: bold;
border: 1px solid lightgrey;
border-radius: 25px;
padding: 10px; 
`
;

const Action = styled.h2`
color: purple;`
;



function App () {
    return (
    <Card>
        <Image src="https://images.ctfassets.net/s5n2t79q9icq/01EdQaTKvAI6CwhQHgVsy/c5a2d68a1aa4bdc4149b5d5f4680bb01/EN_Kamigawa_Header.jpg"/>
        <Textdiv>
        <Title>Title</Title>
        <Text><Stars>&#9733; &#9733; &#9733; &#9733; &#9734; </Stars> 4.0 (888) </Text>

        <SecondaryText>Secondary Text</SecondaryText>
        <Text>Lorem and bla bla. Lorem and bla bla.</Text>
        <Line/>
        <Subtitle>Subtitle</Subtitle>
        <ItemContainer>
            <Button>Item 1  </Button>
            <Button>Item 2  </Button>
            <Button>Item 3  </Button>
            <Button>Item 4  </Button>
        </ItemContainer>
        <Action>Action</Action>
        </Textdiv>
        </Card>
);
}

export default App;