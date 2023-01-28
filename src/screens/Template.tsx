import { Text } from "react-native";

import { userAuth } from "@hooks/useAuth";

import { Auth } from "./Auth";

export function Template() {
  const { auth } = userAuth();

  return <>{auth ? <Text>Usuário logado</Text> : <Auth />}</>;
}
