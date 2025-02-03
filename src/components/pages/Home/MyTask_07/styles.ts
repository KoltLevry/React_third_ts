import styled from '@emotion/styled';

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
`
export const Article = styled.article`
flex: 1 200px;
/* flex: 1; */

&:nth-of-type(3) {
    flex: 2 200px;
    /* flex: 3; */
}
`
