import styled from '@emotion/styled';
import { css } from '@emotion/react';

//Интерфейс для пропсов(тоже объект) стилизованного компонента BoxInfo
interface BoxInfoStyledProps {
  primaryS?: boolean;
}

//шаблоны стилей для переиспользования
const boxBasicStyles = css`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 20px;
`

const boxSecodStyle = css`
 color: white;
`

export const BoxInfo = styled.div<BoxInfoStyledProps>`
//подстановка переменной, которая содержит шаблон стилей
 ${boxBasicStyles}
 ${boxSecodStyle}
 min-width: 300px;
 min-height: 300px;
 border-radius: 20px;
 //Добавление логики, через props, для использования различных значений свойств
 background-color: ${ (props) => props.primaryS ? "rebeccapurple" : "#fff233"};
 /* border: 2px solid purple; */
 border: ${ ({primaryS}) => primaryS ?  "6px solid lightgreen" : "2px dashed blue"};
 
 //пример работы с псевдоклассом
 &:hover{
  background-color: #EC4DFA;
  color: green;
  font-weight: bold;
 }
`;

export const ContentContainer = styled.div`
 ${boxBasicStyles}
 flex-direction: column;
 /* accent-color:  */
 gap: 20px;
 border-color: grey;
 box-shadow: 2px 10px 8px rgba(0,0,0,0.2);
`

export const Image = styled.img`
 width: 150px;
 padding-left: 20px;
`

export const Text = styled.p `
  font-size: 32px;
  color: blue;
  font-weight: bold;
`