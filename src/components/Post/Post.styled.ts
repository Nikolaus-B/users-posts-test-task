import styled from "styled-components";

export const PostStyled = styled.li`
  width: 450px;
  padding: 20px 30px;

  border: 1px solid ${(p) => p.theme.colors.mainWhite};
  border-radius: ${(p) => p.theme.radius.sm};
`;
