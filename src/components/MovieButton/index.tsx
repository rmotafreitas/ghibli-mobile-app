import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { THEME } from "../../theme";

interface Props extends TouchableOpacityProps {
  label: string;
  icon?: any;
  handlePress: () => void;
}

export function MovieButton({ label, icon, handlePress, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <MaterialCommunityIcons name={icon} size={24} color={THEME.COLORS.TEXT} />
    </TouchableOpacity>
  );
}
