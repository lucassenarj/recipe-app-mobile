import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Wrapper = styled.View`
  background-color: ${colors.primary};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  position: relative;
  margin-top: -30px;
`;

export const Container = styled.View`
  margin: auto 20px;
  border-radius: 15px;
  margin-top: 120px;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
  
export const Thumbnail = styled.View`
  margin-top: -250px;
  justify-content: center;
  align-items: center;
`;
  
export const Picture = styled.Image`
  width: 320px;
  height: 320px;
  border-radius: 160px;
`;
  
export const Details = styled.View`
  padding: 15px 20px;
`;

export const Heading = styled.Text`
  font-size: 32px;
  font-family: roboto_700;
  margin-bottom: 20px;
`;

export const Description = styled.Text`
  font-size: 20px;
  font-family: roboto_400;
  line-height: 30px;
`;