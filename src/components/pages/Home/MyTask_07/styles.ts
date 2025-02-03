import styled from '@emotion/styled';
import { FaStar } from 'react-icons/fa';

export const MyTaskWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

export const FloatSection = styled.div`
/* display: flex;
flex-direction: column;
gap: 20px; */
`
// first section
export const Title = styled.h1` text-align: center;`

export const FloatBox = styled.div`
float: left;
margin-right: 15px;
margin: 15px;

width: 150px;
height: 100px;
border-radius: 5px;
padding: 1em;
background-color: rgba(207,232,220);

`
export const Text = styled.p``

export const SpecialText = styled.p`
background-color: rgba(148, 255, 173);
padding: 10px;
color: purple;
`

export const FloatBoxSecond = styled.div `
float: right;
margin-right: 15px;
margin: 15px;

width: 150px;
height: 150px;
border-radius: 5px;
padding: 1em;
background-color: rgba(135,232,220);
`

export const TextSecond = styled.p`
background-color: rgba(130, 199, 239);
padding: 10px;
color: white;

display: flow-root;
`
// second section
export const PositionSection = styled.div``

export const PositionedText = styled.div`
position: sticky;
top: 30px;
left: 40px;

width: 250px;
padding: 10px;
background-color: lightgoldenrodyellow;
border: 2px solid red;
`

export const TextWithSticky = styled.p`
height: 150px;
overflow-y: scroll;
`

export const DefinitionList = styled.dl``
export const DefinitionTerm = styled.dt`
color: lightblue;
font-weight: bold;

background-color: black;
padding: 10px;
position: sticky;
top: 0;
left: 0;
margin: 1em 0;
`
export const DefinitionDescription = styled.dd``

// third new section
export const FlexBoxSection = styled.div`
`

export const FlexBoxWrapper = styled.div`
height: 500px;
border: 2px solid black;
padding: 30px;

overflow-y: scroll;

display: flex;
gap: 50px;
flex-wrap: wrap;
flex: 200px;
`
export const BoxBlock = styled.div`
height: 400px;
width: 400px;
border: 2px solid black;
background-color: lightgreen;
`

// articleSection
export const ArticleSection = styled.div`
display: flex;


/* @media screen and (min-width: 768px){
    flex-direction: column;
} */

/* Або можна взагалі прибрати screen, бо він за замовчуванням використовується для медіа-запитів: */
    @media (min-width: 768px){
    flex-direction: column;
}
`
export const Article = styled.article`
flex: 1 200px;
/* flex: 1; */

&:nth-of-type(3) {
    flex: 2 200px;
    /* flex: 3; */
}
`
// grid box

export const GridBoxWrapper = styled.div`
height: 300px;
border: 2px solid black;
padding: 30px;

overflow-y: scroll;

display: grid;
grid-template-columns: 2fr 1fr 1fr;
gap: 20px;
`

export const BoxBlockGrid = styled.div`
background-color: lightgoldenrodyellow;
border: 1px solid black;
text-align: center;
padding: 20px;
`

export const GridBoxWrapperPepeat = styled.div`
height: 300px;
border: 2px solid black;
padding: 30px;

overflow-y: scroll;

display: grid;
/* grid-template-columns: repeat(3, 1fr); */
grid-template-columns: repeat(auto-fit, minmax(200px, 3fr));
grid-auto-rows: minmax(200px, auto);
gap: 20px;
`

// viewport 
export const ViewportBox = styled.div``

export const ElementViewport = styled.p`
/* font-size: calc(1rem + 2vw); */
/* font-size: calc(1em + 1vw); */

/* font-size: 10vh;  - розмір тексту не змінюжться при zoom сторінки*/

/* font-size: min(3vw, 20px);  */
/* Не більше 20px */

font-size: clamp(14px, 2vw, 24px);
/* шрифт не буде меншим за 14px, буде змінюватись за 2vw, але не перевищить 24px. */
/*  clamp(мінімальне, бажане, максимальне). -  Заміняє медіа-запити для розмірів шрифтів, padding, margin тощо.*/

`