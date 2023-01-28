import { useState } from "react";

import { Text } from "react-native";

import { Provider as PaperProvider } from "react-native-paper";

import { ThemeProvider } from "styled-components";

import { ToastProvider } from "react-native-toast-notifications";

import { Auth } from "@screens/Auth";

import { AuthContextProvider } from "@contexts/AuthContext";

import theme from "./src/theme";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  return (
    <AuthContextProvider>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider
            duration={5000}
            animationDuration={250}
            successColor="#000"
            dangerColor="red"
            warningColor="orange"
            normalColor="gray"
            textStyle={{ fontSize: 16 }}
            offset={50}
            offsetTop={30}
            offsetBottom={40}
            swipeEnabled={true}
          >
            {auth ? <Text>Usuário logado</Text> : <Auth />}
          </ToastProvider>
        </ThemeProvider>
      </PaperProvider>
    </AuthContextProvider>
  );
}
