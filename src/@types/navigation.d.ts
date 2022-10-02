export interface MovieParams {
  id: string;
  title: string;
  title_romanised: string;
  plot: string;
  coverURL: string;
  score: number;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      movie: MovieParams;
    }
  }
}
