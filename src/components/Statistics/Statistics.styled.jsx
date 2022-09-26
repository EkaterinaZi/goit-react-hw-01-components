import styled from "styled-components";
//import getRandomHexColor from './components/utils/generateColor'

export const Section = styled.section `min-width: 500px;
margin-top: 20px;
padding: 50px;
background-color: #E8E8E8;
box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;`

export const Item = styled.li `display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
`
export const Title = styled.h2 `display: block;
margin: 0;
padding: 20px;
text-align: center;
text-transform: uppercase;
color: grey;
border-bottom: 1px solid grey;`
export const List = styled.ul `list-style-type: none;
margin: 0;
display: flex;
justify-content: center;`

export const Percentage = styled.span `font-size: 30px;
color: white;`
