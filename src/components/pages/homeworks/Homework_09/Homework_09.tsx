import { HwWrapper } from "./styles.ts";
import Input from "../../../Input/Input.tsx";
import Button from "../../../Button/Button.tsx";

function Homework_09() {
  return (
      <>
      <HwWrapper>
        <div>Hi hm 9</div>
        <Input 
            name="input"
            type="text"
            placeholder="Write smth here"
        />
        <Button 
            name="Click me!"
        />
      </HwWrapper>
      </>
  );
}

export default Homework_09;

// Каждый из инпутов должен быть котролируемым компонентом
// При нажатии на кнопку значения из полей должны быть выведены на экран в двух блоках
// сделайте Pull request и сбросьте мне ссылку на него в слаке
// P.S. Повторите тему по работе с отправкой запросов (fetch) из базового курса Frontend
