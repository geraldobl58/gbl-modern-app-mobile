import styled, { css } from "styled-components/native";

export const Content = styled.View`
  padding: 10px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.INDIGO_700};
  `}
`;
