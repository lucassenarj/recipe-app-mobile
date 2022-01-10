import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform } from "react-native";
import colors from "../../styles/colors";

const statusBarHeight = Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + "px"};
  margin-bottom: 100px;
`;

export const Container = styled.View`
  padding-left: 14px;
  padding-right: 14px;
`;

export const Main = styled.View`
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;