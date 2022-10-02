import React from "react";
import { View, ViewProps, Text } from "react-native";

import { styles } from "./styles";

interface Props extends ViewProps {
  label: string;
  children: React.ReactNode;
}

export function MovieDetail({ label, children, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}
