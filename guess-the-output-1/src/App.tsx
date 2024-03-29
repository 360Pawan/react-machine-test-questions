import "./App.css";

function App() {
  // Start here
  const promise = new Promise((resolve) => {
    console.log(1);
    resolve();
    console.log(2);
  });

  console.log(3);
  console.log(4);

  setTimeout(() => {
    console.log(5);
  }, 100);

  setTimeout(() => {
    console.log(6);
  }, 0);
  promise.then(() => {
    console.log(7);
  });

  console.log(8);

  const lol = {
    name: "Andrew Tate",
    first() {
      console.log(this.name + " Loves AngularJS");
    },
    second: () => {
      console.log(this.name + " Loves himself. F Frameworks.");
    },
  };

  lol.first();
  lol.second();

  return <h1>Guess the Output I</h1>;
}

export default App;
