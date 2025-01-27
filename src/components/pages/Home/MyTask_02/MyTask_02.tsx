import "./MyTask_02.css";

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
  }

  myCar.startEngine();
  
    // crete Product interface
  
  return (
    <div className="mytask_02-wrapper">
      <div className="intro-box">
          <h1 className="element">Hi! interfaces </h1>
          <p>
            Інтерфейси в TypeScript використовуються для опису структури об'єкта,
            його типів та властивостей. Це дуже корисно, щоб гарантувати, що об'єкти
            мають певну форму та типи. 
          </p>
          <button className="element_2-0">Click me! Рьь</button>
      </div>
      <div tasks-box>
        <div className="myCar_Task-box">
          <h2>My future car: </h2>
          <ul>
            <li>Brand: {myCar.brand}</li>
            <li>Model: {myCar.model}</li>
            <li>Year: {myCar.year}</li>
          </ul>
        </div>
        {/* 
        Завдання:
Створи свій власний стиль списку, який використовує замість цифр символи "✔" та "✘".
        */}
        <div className="mySkills_Task-box">
          <h2>My future skills: </h2>
          <h3>*1000 M, 500 D, 100 C, 50 L, 10 X, 5 V, 1 I*</h3>
          <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>JS</li>
            <li>React</li>
            <li>TS</li>
            <li>GitHub</li>
            <li>Java</li>
            <li>C#</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyTask_02;


