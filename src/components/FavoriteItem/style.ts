import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  background: ${colors.white};
  border-radius: 10px;
  flex-direction: row;
  margin-top: 30px;
`;

export const Avatar = styled.View`
  width: 80px;
`;

export const Picture = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin: auto;
`;

export const Details = styled.View`
  margin-left: 15px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
`;