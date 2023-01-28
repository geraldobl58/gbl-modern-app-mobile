import { createContext, useEffect, useMemo, useState } from "react";

type AuthContextDataProps = {
  auth: undefined;
  login: () => null;
  logout: () => null;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    setAuth(null as any);
  }, []);

  const authData = useMemo(
    () => ({
      auth,
      login: () => null,
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
