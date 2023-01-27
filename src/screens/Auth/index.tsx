import { useState } from "react";

import { KeyboardAvoidingView, Platform, Text } from "react-native";

import { Container } from "@components/Container";

import { Register } from "../Auth/components/Register";

import logoImg from "@assets/logo.png";

import { Logo } from "./styles";

export function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  const changeScreen = () => setShowLogin(!showLogin);

  return (
    <Container>
      <Logo source={logoImg} resizeMode="contain" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {showLogin ? (
          <Text>Login</Text>
        ) : (
          <Register changeScreen={changeScreen} />
        )}
      </KeyboardAvoidingView>
    </Container>
  );
}
