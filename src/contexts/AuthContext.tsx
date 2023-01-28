import { createContext, useEffect, useMemo, useState } from "react";

import { setToken } from "@utils/tokenHandle";

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

  useEffect(() => {
    setAuth(null as any);
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
