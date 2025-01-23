import "./MyTask_01.css";
import { useState } from "react";

function MyTask_01() {
  // Типи змінних
  let age: number = 25;
  let personName: string = "Ben";
  let isMarid: boolean = false;

  // Типи масивів
  let friendsNames: string[] = ["Anna", "Maria", "Lola"];
  let friendsAge: number[] = [23, 45, 33];

  // Об’єкти
  let person: { name: string; age: number; male: string } = {
    name: "Merry",
    age: 24,
    male: "female",
  };

  let car: { model: string; brand: string; year: number } = {
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
  let user: User = {
    name: "John",
    age: 25,
  };

  interface Book {
    title: string;
    pages: number;
  }
  let book: Book = {
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
        <h4>Give a jobe? - {isMarid} ? "yes" : "no"</h4>
        <hr />
        <p>Friends: {friendsNames.join(", ")}</p>
        <p>Fiends age: {friendsAge.join(" ")}</p>
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
      <div className="task_4-container task-card ">
        <h1>Write your name</h1>
        <div>
          <label htmlFor="Firstnumber">Your name: </label>
          <input
            type="string"
            value={name}
            onChange={(e) => setGreeting(e.target.value)}
          />
        </div>
        <button onClick={handleGreeting}>Click me!</button>
        <p>Hallo, {greeting}!</p>
      </div>
    </div>
  );
}

export default MyTask_01;
