import { ImageBackground } from "react-native";
import { styles } from "./styles";

import backgroundImg from "../../assets/background-ghibli.png";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      defaultSource={backgroundImg}
      source={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
