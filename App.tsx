import { Provider as PaperProvider } from "react-native-paper";

import { ThemeProvider } from "styled-components";

import { ToastProvider } from "react-native-toast-notifications";

import { Template } from "@screens/Template";

import { AuthContextProvider } from "@contexts/AuthContext";

import theme from "./src/theme";

export default function App() {
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
            <Template />
          </ToastProvider>
        </ThemeProvider>
      </PaperProvider>
    </AuthContextProvider>
  );
}
