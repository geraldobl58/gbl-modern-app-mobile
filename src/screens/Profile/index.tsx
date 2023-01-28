import { Text, ScrollView } from "react-native";

import { Search } from "@components/Search";

import { useTheme } from "styled-components/native";
import { StatusBarCustom } from "@components/StatusBar";

export function Profile() {
  const { COLORS } = useTheme();

  return (
    <ScrollView>
      <StatusBarCustom backgroundColor={COLORS.INDIGO_700} />
      <Search />
      <Text>Profile</Text>
    </ScrollView>
  );
}
