import styled from "styled-components";

interface Props {
  padding?: string;
}

export default styled.div<Props>`
  padding: ${({ padding }) => (padding ? padding : "36px")};
`;
