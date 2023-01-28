import { createStackNavigator } from "@react-navigation/stack";

import { Profile } from "@screens/Profile";
import { useTheme } from "styled-components/native";

type ProfileRoutesProps = {
  home: undefined;
  favorites: undefined;
  cart: undefined;
  profile: undefined;
};

const Stack = createStackNavigator<ProfileRoutesProps>();

export function ProfileRoutes() {
  const { COLORS } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Profile}
        options={{
          title: "Trocar Senha",
          headerStyle: {
            backgroundColor: `${COLORS.INDIGO_700}`,
          },
          headerTintColor: `${COLORS.WHITE}`,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
