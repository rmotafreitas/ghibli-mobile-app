import React, { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import logoImg from "../../assets/logo-ghibli.png";
import { Background } from "../../components/Background";
import { MovieCard, MovieCardProps } from "../../components/MovieCard";
import { API, ResponseAllMoviesObject } from "../../api";
import { Heading } from "../../components/Heading";

import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const movieLimit: number = 10;

  function handleMovieClick({
    id,
    title,
    plot,
    coverURL,
    score,
    title_romanised,
  }: MovieCardProps) {
    navigation.navigate("movie", {
      id,
      title,
      plot,
      coverURL,
      score,
      title_romanised,
    });
  }

  useEffect(() => {
    fetch(`${API.FILMS}?limit=${movieLimit}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(
          data.map((movie: ResponseAllMoviesObject) => {
            return {
              id: movie.id,
              title: movie.title,
              original_title: movie.original_title,
              plot: movie.description,
              coverURL: movie.image,
              score: movie.rt_score,
              title_romanised: movie.original_title_romanised,
            };
          })
        );
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading title="Ghibli Studio Movies" subtitle="Watch now!" />
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item: movie }) => {
            return (
              <MovieCard
                onPress={() => {
                  handleMovieClick(movie);
                }}
                data={movie}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
