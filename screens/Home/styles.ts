import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #000;
    justify-content: center;
    align-items: center;
`

export const ArrowButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color:  rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    margin: 0 10px;

`

export const ContainerArrowButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  
    bottom: 0;
    left: 0;
right: 0;
   top: 0;
   z-index: 999999;
   position: absolute;
    background-color: transparent;
`

export const Content = styled.View`
    background-color: #fff;
    width: 100%;
    height: 90%;
    position: absolute;
    margin-top: 190px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const Dot = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #000;
    margin: 0 5px;
`

export const ContainerDot = styled.View`
    bottom: 40px;
    flex-direction: row;
    position: absolute;
    justify-content: center;
    align-items: center ;
    width: 100%; 
`
export const Tab = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
`

export const Title = styled.Text``