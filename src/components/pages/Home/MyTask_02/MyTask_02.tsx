import {
  TaskWrapper,
  MainTitle,
  CarTaskBox,
  TaskBox,
  SecondMainTitle,
  ThirdMainTitle,
  SimpleText,
  ListItem,
} from "./styles";

function MyTask_02() {
  // crete User interface
  //   interface User {
  //     name: string;
  //     age: number;
  //     isActive: boolean;
  //   }

  //   const user: User = {
  //     name: "Alice",
  //     age: 25,
  //     isActive: true,
  //   };

  //   const user1: User = {
  //     name: "Bwb",
  //     age: 33,
  //     isActive: false,
  //   };

  // crete Car interface
  interface Car {
    brand: string;
    model: string;
    year: number;
    startEngine: () => void;
  }

  const myCar: Car = {
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    startEngine: () => {
      console.log("Engine started!");
    },
  };

  myCar.startEngine();

  return (
    <TaskWrapper>
      <TaskBox>
        <MainTitle>Hi! interfaces </MainTitle>
        <SimpleText>
          Інтерфейси в TypeScript використовуються для опису структури об'єкта,
          його типів та властивостей. Це дуже корисно, щоб гарантувати, що
          об'єкти мають певну форму та типи.
        </SimpleText>
        <SecondMainTitle>1. Що таке інтерфейс у TypeScript?</SecondMainTitle>
        <SimpleText>
          Інтерфейс в TypeScript описує структуру об'єкта. У випадку
          React-компонентів, він використовується для опису, які пропси
          (параметри) приймає компонент.
        </SimpleText>
        <SecondMainTitle>2. Що таке пропси в React?</SecondMainTitle>
        <SimpleText>
          Пропси (props) — це параметри, які передаються від батьківського
          компонента до дочірнього. Пропси дозволяють компонентові бути гнучким
          і змінюватися залежно від переданих значень.
        </SimpleText>
        <SecondMainTitle>
          3. Що таке стилізований компонент (styled component)?
        </SecondMainTitle>
        <SimpleText>
          Стилізовані компоненти (наприклад, через @emotion/styled) дозволяють
          створювати компоненти з динамічними стилями. Вони також можуть
          приймати пропси й змінювати свій стиль залежно від їх значень.
        </SimpleText>
        <SecondMainTitle>4. Як це все пов'язано?</SecondMainTitle>
        <CarTaskBox>
          <strong>Інтерфейс (interface):</strong> Використовується для
          визначення, які пропси приймає компонент. Наприклад, AnimalCardProps
          описує, які дані можна передати в AnimalCard.
        </CarTaskBox>
        <CarTaskBox>
          <strong>Пропси (props):</strong> Це параметри, які передаються від
          батьківського компонента до дочірнього. Наприклад, ти передаєш
          highlighted у AnimalCard.
        </CarTaskBox>
        <CarTaskBox>
          <strong>Стилізований компонент:</strong> Якщо стилізований компонент
          залежить від пропсів (наприклад, highlighted), потрібно передати їх
          через компонент у стилізований компонент:
        </CarTaskBox>
      </TaskBox>
      <TaskBox>
        <SecondMainTitle>My future car: </SecondMainTitle>
        <CarTaskBox>
          <ListItem>Brand: {myCar.brand}</ListItem>
          <ListItem>Model: {myCar.model}</ListItem>
          <ListItem>Year: {myCar.year}</ListItem>
        </CarTaskBox>
        {/* Завдання:
        Створи свій власний стиль списку, який використовує замість цифр символи "✔" та "✘".
        */}
        <TaskBox>
          <SecondMainTitle>My future skills: </SecondMainTitle>
          <ThirdMainTitle>
            *1000 M, 500 D, 100 C, 50 L, 10 X, 5 V, 1 I*
          </ThirdMainTitle>
          <CarTaskBox>
            <ListItem>CSS</ListItem>
            <ListItem>HTML</ListItem>
            <ListItem>JS</ListItem>
            <ListItem>React</ListItem>
            <ListItem>TS</ListItem>
            <ListItem>GitHub</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>C#</ListItem>
            <ListItem>Python</ListItem>
          </CarTaskBox>
        </TaskBox>
      </TaskBox>
    </TaskWrapper>
  );
}

export default MyTask_02;
