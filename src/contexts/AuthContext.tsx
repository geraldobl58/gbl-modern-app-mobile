import { createContext, useEffect, useMemo, useState } from "react";

import jwtToken from "jwt-decode";

import { getToken, removeToken, setToken } from "@utils/tokenHandle";

type AuthContextDataProps = {
  auth: undefined;
  login: (user: string) => void;
  logout: () => void;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [auth, setAuth] = useState<any>(undefined);

  useEffect(() => {
    tokenAuth();
  }, []);

  const tokenAuth = async () => {
    const token = await getToken();

    if (token) {
      setAuth({
        token,
        idUser: jwtToken(token),
      });
    } else {
      setAuth(null);
    }
  };

  const login = (userData: any) => {
    setToken(userData.jwt);
    setAuth({
      token: userData.jwt,
      idUser: userData.user.id,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

  if (auth === undefined) {
    return null;
  }

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
