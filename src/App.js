import styled from "styled-components/";

const Title = styled.h1`
  font-size: 3em;
  text-align : center;
  color: palevioletred;
`;

const Wrapper = styled.section`
    padding : 4rem;
    background-color : papayawhip;
`;

function App() {
  return (
    <Wrapper>
      <Title>
      <h1>Imalsha</h1>
    </Title>
    </Wrapper>
    
    
  );
}

export default App;
