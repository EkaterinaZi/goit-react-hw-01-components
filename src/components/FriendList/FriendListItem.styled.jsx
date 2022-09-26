import styled from "styled-components";
export const Item = styled.li `display: flex;
width: 200px;
height: 70px;
align-items: center;
margin-bottom: 15px;
box-shadow: 10px 5px 5px ${(props) => (props.status ? 'green' : 'red')};
`
export const Span = styled.span `width: 15px;
height: 15px;
background-color: ${(props) => (props.status ? 'green' : 'red')};
border-radius: 50%;
margin-left: 5px;
margin-right: 25px;`

export const Img = styled.img `display: block;
width: 50px;
height: 50px;`
export const Text = styled.p `display: block;
margin-left: 10px;
font-weight: bold;`