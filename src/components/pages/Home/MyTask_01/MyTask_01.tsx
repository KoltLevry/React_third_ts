import "./MyTask_01.css";
import { useState } from "react";

function MyTask_01() {
  // Типи змінних
  const age: number = 25;
  const personName: string = "Ben";
  // const isMarid: boolean = false;
  const isMarid: boolean = true;

  // Типи масивів
  const friendsNames: string[] = ["Anna", "Maria", "Lola"];
  const friendsAge: number[] = [23, 45, 33];

  // Об’єкти
  const person: { name: string; age: number; gender: "male" | "female"} = {
    name: "Merry",
    age: 24,
    gender: "female",
  };
  // ! юніон тип ("male" | "female"):

  const car: { model: string; brand: string; year: number } = {
    model: "GLC-X",
    brand: "Mercedes-Bens",
    year: 2013,
  };

  // Функції
  function add(a: number, b: number): number {
    return a + b;
  }

  function greet(name: string): string {
    return `Hello, ${name}!`;
  }

  // ^ FIRST task continuing
  const [num1, setNum1] = useState<number>();
  const [num2, setNum2] = useState<number>();
  const [result, setResult] = useState<number>();
  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const [num12, setNum12] = useState<number>();
  const [num22, setNum22] = useState<number>();
  const [result2, setResult2] = useState<number>();
  const handleAdditionSecVar = () => {
    setResult2(add(Number(num12), Number(num22)));
  }

  const [num123, setNum123] = useState<number>();
  const [num223, setNum223] = useState<number>();
  const [userSign, setUserSign] = useState("");
  const [resultCalc, setResultCalc] = useState<number>();

  const handleCalc = () => {
    if(userSign === "-") {
      setResultCalc( Number(num123) - Number(num223))
      return;
    }
    if(userSign === "+") {
      setResultCalc( Number(num123) + Number(num223))
      return;
    }
    if(userSign === "/") {
      setResultCalc( Number(num123) / Number(num223))
      return;
    }
    if(userSign === "*") {
      setResultCalc( Number(num123) * Number(num223))
      return;
    } else {
      setResultCalc("enter the sign!")
    }
  }

  // * SECOND task continue
  const [name, setName] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  const handleGreeting = () => {
    if (name) {
      setGreeting(`Hello, ${name}!`);
    } else {
      setGreeting("Please enter your name!");
    }
  };

  // Інтерфейси
  interface User {
    name: string;
    age: number;
  }
  const user: User = {
    name: "John",
    age: 25,
  };

  interface Book {
    title: string;
    pages: number;
  }
  const book: Book = {
    title: "Harry Poter",
    pages: 332,
  };

  return (
    <div className="task-wrapper">
      <div className="task_1-container task-card">
        <h1>Personal info</h1>
        <hr />
        <h2>Name: {personName}</h2>
        <h2>Age: {age}</h2>
        <h3>Marid? - {isMarid}</h3>
        <h4>Give a jobe? - {isMarid ? "yes" : "no"}</h4>
        <hr />
        <p>Friends: {friendsNames.join(", ")}</p>
        <p>Fiends age: {friendsAge.join(" ")}</p>
      </div>
      <div className="task_1-container task-card">
        <h1>Personal info №2</h1>
        <hr />
        <h2>Name: {person.name}</h2>
        <h2>Age: {person.age}</h2>
        <h2>Gender: {person.gender}</h2>
      </div>
      <div className="task_2-container task-card ">
        <h1>Car info</h1>
        <hr />
        <h2>Model: {car.model}</h2>
        <h2>Brand: {car.brand} </h2>
        <h2>Year: {car.year} </h2>
      </div>
      <div className="task_3-container task-card ">
        <h1>Adding</h1>
        <div>
          <label htmlFor="Firstnumber">1 number: </label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Secondnumber">2 number: </label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <button onClick={handleAddition}>Result</button>
        <p>Hier is your result: {result}</p>
      </div>
      <div className="task_3-container task-card ">
        <h1>Adding №2</h1>
        <div>
          <label htmlFor="Firstnumber">1 number: </label>
          <input
            type="number"
            value={num12}
            onChange={(e) => setNum12(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Secondnumber">2 number: </label>
          <input
            type="number"
            value={num22}
            onChange={(e) => setNum22(e.target.value)}
          />
        </div>
        <button onClick={handleAdditionSecVar}>Result</button>
        <p>Hier is your result: {result2}</p>
      </div>
      <div className="task_4-container task-card ">
        <h1>Write your name</h1>
        <div>
          <label htmlFor="Firstnumber">Your name: </label>
          <input
            type="string"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button onClick={handleGreeting}>Click me!</button>
        <p>{greeting}</p>
      </div>
      <div className="task_3-container task-card ">
        <h1>Calculate</h1>
        <div>
          <label htmlFor="Firstnumber">1 number: </label>
          <input
            type="number"
            value={num123}
            onChange={(e) => setNum123(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Secondnumber">2 number: </label>
          <input
            type="number"
            value={num223}
            onChange={(e) => setNum223(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Thirdsign">Your sign: </label>
          <input
            type="string"
            value={userSign}
            placeholder="+ | - or / | *"
            onChange={(e) => setUserSign(e.target.value)}
          />
        </div>
        <select 
            name="theSign" 
            value={userSign}
            onChange={ (e) => setUserSign(e.target.value)} 
          >
            <option value="">Choose operation</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
          </select>
        <button onClick={handleCalc}>Result</button>
        <p>Hier is your result: {resultCalc}</p>
        <button 
          onClick={ () => {
            setNum123(0);
            setNum223(0);
            setUserSign("");
            setResultCalc(0);
          }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default MyTask_01;
