import AsyncStorage from "@react-native-async-storage/async-storage";

import { AUTH_TOKEN_STORAGE } from "./tokenConfig";

export async function setToken(token: string) {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, token);
    return true;
  } catch (error) {
    console.log(error);
  }
}
