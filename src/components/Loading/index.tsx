import { ActivityIndicator, SafeAreaView } from "react-native";

import { Container } from "@components/Container";

import { Content, Title } from "./styles";

type LoadingProps = {
  title?: string;
  size?: number;
  color?: string;
};

export function Loading({
  title = "Por favor aguarde...",
  size = 30,
  color = "#4300af",
}: LoadingProps) {
  return (
    <Container>
      <SafeAreaView>
        <Content>
          <ActivityIndicator size={size} color={color} />
          <Title>{title}</Title>
        </Content>
      </SafeAreaView>
    </Container>
  );
}
