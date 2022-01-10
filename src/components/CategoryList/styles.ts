import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Wrapper = styled.View``;

export const Heading = styled.Text`
  font-size: 36px;
  font-family: roboto_700;
`;

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 8px 0 24px;
`;

export const Container = styled.TouchableOpacity`
  margin: 30px 10px;
  justify-content: center;
  align-items: center;
`;
  
export const Thumbnail = styled.View`
  width: 90px;
  height: 90px;
  padding: 5px
  border-radius: 10px;
  background-color: ${props => props.isActive ? colors.black : colors.white};
  justify-content: center;
  align-items: center;


`;
  
export const Picture = styled.Image`
  width: 60px;
  height: 60px;
`;
  
export const Details = styled.View`
  
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-family: roboto_400;
`;