import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Wrapper = styled.View``;

export const Heading = styled.Text`
  font-size: 24px;
  font-family: roboto_700;
`;

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 8px 0 24px;
`;

export const Container = styled.TouchableOpacity`
  width: 280px;
  height: 220px;
  margin: auto 20px;
  border-radius: 15px;
  margin-top: 120px;
  background-color: ${colors.white};
`;
  
export const Thumbnail = styled.View`
  position: absolute;
  top: -100px;
  width: 280px;
`;
  
export const Picture = styled.Image`
  width: 220px;
  height: 220px;
  border-radius: 300px;
  margin: auto;
`;
  
export const Details = styled.View`
  margin-top: 120px;
  padding: 15px 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: roboto_400;
  line-height: 30px;
`;