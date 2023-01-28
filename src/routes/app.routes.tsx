import { NavigationContainer } from "@react-navigation/native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Home } from "@screens/Home";
import { Favorites } from "@screens/Favorites";
import { Cart } from "@screens/Cart";
import { Profile } from "@screens/Profile";

type AppRoutesProps = {
  home: undefined;
  favorites: undefined;
  cart: undefined;
  profile: undefined;
};

const Tab = createMaterialBottomTabNavigator<AppRoutesProps>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} options={{ title: "Home" }} />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{ title: "Carrinho" }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{ title: "Perfil" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
