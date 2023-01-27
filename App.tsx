import { useState } from "react";

import { Text } from "react-native";

import { Provider as PaperProvider } from "react-native-paper";

import { ThemeProvider } from "styled-components";

import { Auth } from "@screens/Auth";

import theme from "./src/theme";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  return (
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
  );
}
