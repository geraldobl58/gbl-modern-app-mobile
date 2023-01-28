import { NavigationContainer } from "@react-navigation/native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import { Home } from "@screens/Home";
import { Favorites } from "@screens/Favorites";
import { Cart } from "@screens/Cart";
import { Profile } from "@screens/Profile";

import { useTheme } from "styled-components/native";

type AppRoutesProps = {
  home: undefined;
  favorites: undefined;
  cart: undefined;
  profile: undefined;
};

const Tab = createMaterialBottomTabNavigator<AppRoutesProps>();

function setIcon(route: any, routeStatus: any) {
  let iconName = "";

  switch (route.name) {
    case "home":
      iconName = "home";
      break;
    case "favorites":
      iconName = "heart";
      break;
    case "cart":
      iconName = "shopping-cart";
      break;
    case "profile":
      iconName = "user";
      break;
    default:
      break;
  }

  return <FontAwesomeIcon name={iconName} style={{ fontSize: 20 }} />;
}

export function AppRoutes() {
  const { COLORS } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: (routeStatus) => {
            return setIcon(route, routeStatus);
          },
        })}
      >
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
