import styled from 'styled-components'

export const SearchContainer = styled.div`
    background: grey;
    height: 80px;
    width: 400px;
    top: 0;
    position: absolute;
    // display: flex;
    color: blue;
    // justify-content: center;
    top: 20px;
    z-index: 10;
`;

export const SearchWrap = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    color: grey;
    width: 100%;
    height: 100%;
    border-radius: 15px
`;

export const SearchH1 = styled.h1`
    color: #fff;
    font-size: 20px;
    text-align: center;
`;

export const SearchMenu = styled.ul`
    display: flex;
    
`;

export const SearchItems = styled.li`
    display: flex;
`;

export const InputLat = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const InputLong = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;