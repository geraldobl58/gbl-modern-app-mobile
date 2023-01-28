import { StatusBar, SafeAreaView } from "react-native";

type StatusBarProps = {
  backgroundColor: string;
};

export function StatusBarCustom({ backgroundColor, ...rest }: StatusBarProps) {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundColor}
        {...rest}
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: backgroundColor }} />
    </>
  );
}
