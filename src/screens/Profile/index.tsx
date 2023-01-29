import { useCallback, useState } from "react";
import { Text, ScrollView } from "react-native";

import { useFocusEffect } from "@react-navigation/native";

import { useTheme } from "styled-components/native";

import { Search } from "@components/Search";
import { StatusBarCustom } from "@components/StatusBar";
import { Loading } from "@components/Loading";

import { userMe } from "@services/user";

import { userAuth } from "@hooks/useAuth";

export function Profile() {
  const [user, setUser] = useState(null);

  const { COLORS } = useTheme();

  const { auth } = userAuth();

  const getMeUser = async () => {
    const response = await userMe(auth.token);
    setUser(response.data);
  };

  useFocusEffect(
    useCallback(() => {
      getMeUser();
    }, [])
  );

  return (
    <ScrollView>
      <StatusBarCustom backgroundColor={COLORS.INDIGO_700} />
      {!user ? (
        <Loading />
      ) : (
        <>
          <Search />
          <Text>Profile</Text>
        </>
      )}
    </ScrollView>
  );
}
