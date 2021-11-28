import styled from "styled-components";
import { ListComponent } from "./List/List";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
`;

function App() {
  return (
    <MainContainer>
      <ListComponent />
    </MainContainer>
  );
}

export default App;
