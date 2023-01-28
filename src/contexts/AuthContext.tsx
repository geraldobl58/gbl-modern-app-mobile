import { createContext, useEffect, useMemo, useState } from "react";

import { getToken, setToken } from "@utils/tokenHandle";

import jwtToken from "jwt-decode";

type AuthContextDataProps = {
  auth: any;
  login: (user: any) => any;
  logout: () => null;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [auth, setAuth] = useState<any>(undefined);

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

  useEffect(() => {
    tokenAuth();
  }, []);

  const login = (userData: any) => {
    setToken(userData.jwt);
    setAuth({
      token: userData.jwt,
      idUser: userData.user.id,
    });
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout: () => null,
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
