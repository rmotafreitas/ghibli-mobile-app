import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";

import { MovieParams } from "../../@types/navigation";
import { useRoute, useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { Background } from "../../components/Background";
import { SafeAreaView } from "react-native-safe-area-context";

import { MovieButton } from "../../components/MovieButton/index";
import { MovieDetail } from "../../components/MovieDetail";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { THEME } from "../../theme";

import logoImg from "../../assets/logo-ghibli.png";

export function Movie() {
  const route = useRoute();
  const navigation = useNavigation();
  const movie = route.params as MovieParams;

  function starWriter(score: number): React.ReactNode {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (Math.floor(score) >= i) {
        stars.push(
          <MaterialCommunityIcons key={i} name="star" size={24} color="black" />
        );
        if ((score % 1) * 10 >= 5 && Math.floor(score) === i) {
          i++;
          stars.push(
            <MaterialCommunityIcons
              key={i}
              name="star-half-full"
              size={24}
              color="black"
            />
          );
        }
      } else {
        stars.push(
          <MaterialCommunityIcons
            key={i}
            name="star-outline"
            size={24}
            color="black"
          />
        );
      }
    }
    return stars;
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <Entypo
                name="chevron-thin-left"
                color={THEME.COLORS.TEXT}
                size={20}
              />
            </TouchableOpacity>
            <Image style={styles.logo} source={logoImg} />
            <View style={styles.right} />
          </View>
          <Text style={styles.title}>{movie.title}</Text>
          <ImageBackground
            source={{ uri: movie.coverURL }}
            style={styles.cover}
          />
          <MovieDetail label="Title Romanised">
            <Text style={styles.detail}>{movie.title_romanised}</Text>
          </MovieDetail>
          <MovieDetail label="Stars">
            <Text style={styles.detail}>{starWriter(movie.score * 0.05)}</Text>
          </MovieDetail>
          <MovieDetail label="Plot">
            <Text style={styles.detail}>{movie.plot}</Text>
          </MovieDetail>
          <View style={styles.buttonSection}>
            <MovieButton
              handlePress={() => {}}
              icon="play-outline"
              label="Play"
            />
            <MovieButton
              handlePress={() => {}}
              icon="image-multiple-outline"
              label="Gallery"
            />
            <MovieButton
              handlePress={() => {}}
              icon="cards-heart-outline"
              label="Like"
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </Background>
  );
}
