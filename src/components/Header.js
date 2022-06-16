import styled from "styled-components";
import Nav from "./Nav";
import Container from "./Container.styles";

const StyledHeader = styled.header`
  background-color: #fff;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav />
      </Container>
    </StyledHeader>
  );
};

export default Header;
