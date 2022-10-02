import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
  ImageBackground,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";
export interface MovieCardProps {
  id: string;
  title: string;
  original_title: string;
  title_romanised: string;
  plot: string;
  coverURL: string;
  score: number;
}

interface Props extends TouchableOpacityProps {
  data: MovieCardProps;
}

export function MovieCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <ImageBackground source={{ uri: data.coverURL }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.original_title}>{data.original_title}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
