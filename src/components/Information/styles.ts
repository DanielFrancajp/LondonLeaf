import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    height: 70px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

`
export const ContentIcons = styled.TouchableOpacity`
flex:1;
flex-direction: row;

`;

export const Title = styled.Text`
    color: #000000;
    font-weight: bold;
    font-size: 16px;
`;

export const ContentNews = styled.TouchableOpacity`
`;

