import RootStackParamList from "../types/rootStackParamList";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
};
