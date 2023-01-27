import { Button } from "react-native-paper";

import styled, { css } from "styled-components/native";

export const Content = styled.View``;

export const Box = styled.View`
  margin-bottom: 20px;
`;

export const ButtonCustom = styled(Button)`
  border-radius: 10px;

  padding: 5px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.INDIGO_700};
  `}
`;
