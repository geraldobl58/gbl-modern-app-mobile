import { Text, StyleSheet, View } from "react-native";

import { Button } from "react-native-paper";

import { userAuth } from "@hooks/useAuth";

import { Auth } from "./Auth";

export function Template() {
  const { auth, logout } = userAuth();

  return (
    <>
      {auth ? (
        <View style={styles.container}>
          <Text>Usuário logado</Text>
          <Button mode="contained" onPress={logout}>
            Sair
          </Button>
        </View>
      ) : (
        <Auth />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
