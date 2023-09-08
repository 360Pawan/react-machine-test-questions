import "./App.css";

function App() {
  // const sum = (a) => (b) => b ? sum(a + b) : a;

  // const power = (number: number, exponent: number): number =>
  //   exponent === 1 ? number : number * power(number, exponent - 1);

  const power = (number: number, exponent: number): number => {
    if (exponent === 1) return number;
    return number * power(number, exponent - 1);
  };

  console.log(power(6, 5));

  return <h1 className="text-2xl text-center">Infinite sum currying</h1>;
}

export default App;
