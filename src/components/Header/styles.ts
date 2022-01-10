import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 300px;
  padding: 30px 14px 14px;
  background-color: ${colors.black};
`;

export const Navigation = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${colors.gray};
  color: ${colors.white};
  justify-content: center;
  align-items: center;
`;
  
  export const User = styled.TouchableOpacity`
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  width: 48px;
  height: 48px;
`;
  
export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;