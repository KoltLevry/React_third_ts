import "./Homework_01.css";

function Homework_01() {
  let age: number = 25; 
  let name: string = "Alice"; 
  let isActive: boolean = true; 

  let nullableValue: string | null = null;

  let numbers: number[] = [1, 2, 3, 4]; 
  let numbersAlt: Array<number> = [1, 2, 3, 4]; 

  let names: string[] = ["Alice", "Bob", "Charlie"]; 
  let namesAlt: Array<string> = ["Alice", "Bob", "Charlie"]; 

  let mixed: (number | string)[] = [1, "Alice", 2, "Bob"]; 
  let mixedAlt: Array<number | string> = [1, "Alice", 2, "Bob"]; 

  let colors: (number | string | boolean)[] = [123, "red", true, "blue"]; 
  let colorsAlt: Array<number | string | boolean> = [123, "red", true, "blue"]; 

  const add: (a: number, b: number) => number = (a, b) => {
    return a - b;
  }; 

  const logMessage: (message: string) => void = (message) => {
    console.log(message);
  }; 

  return <div>Homework_01 TS!</div>;
}

export default Homework_01;
