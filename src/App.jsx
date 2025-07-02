import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const dishes = [
    {
      id: 1,
      name: "dish 1",
      description: "This is the dish number 1",
      price: 10,
    },
    {
      id: 2,
      name: "dish 2",
      description: "This is the dish number 2",
      price: 20,
    },
    {
      id: 3,
      name: "dish 3",
      description: "This is the dish number 3",
      price: 15,
    },
  ];

  return (
    <div className="App">
      <Header title="My restaurant" />
      <Home dishes={dishes} />
    </div>
  );
}

export default App;
