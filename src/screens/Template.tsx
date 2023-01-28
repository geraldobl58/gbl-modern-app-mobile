import { Text, StyleSheet, View } from "react-native";

import { userAuth } from "@hooks/useAuth";

import { Auth } from "./Auth";

import { AppRoutes } from "@routes/app.routes";

export function Template() {
  const { auth, logout } = userAuth();

  return <>{auth ? <AppRoutes /> : <Auth />}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
