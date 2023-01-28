import { Searchbar } from "react-native-paper";

import { Content } from "./styles";

export function Search() {
  return (
    <Content>
      <Searchbar placeholder="Pesquisar produto..." value="" />
    </Content>
  );
}
