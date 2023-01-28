import { useState } from "react";

import { KeyboardAvoidingView, Platform } from "react-native";

import { Container } from "@components/Container";

import { Login } from "./components/Login";
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
          <Login changeScreen={changeScreen} />
        ) : (
          <Register changeScreen={changeScreen} />
        )}
      </KeyboardAvoidingView>
    </Container>
  );
}
