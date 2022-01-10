import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform } from "react-native";
import colors from "../../styles/colors";

const statusBarHeight = Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.black};
  padding-top: ${statusBarHeight + "px"};
  margin-bottom: 100px;
  flex: 1;
`;

export const Container = styled.ScrollView`
  flex: 1;
`;
  
export const Main = styled.View`
`;