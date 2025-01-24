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
          <h1>Hi! interfaces </h1>
          <p>
            Інтерфейси в TypeScript використовуються для опису структури об'єкта,
            його типів та властивостей. Це дуже корисно, щоб гарантувати, що об'єкти
            мають певну форму та типи. F
          </p>
      </div>
      <div tasks-box>
        <div className="myCar_Task-box">

        </div>
      </div>
    </div>
  );
}

export default MyTask_02;
