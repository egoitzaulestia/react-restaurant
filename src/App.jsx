import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

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
    <>
      <BrowserRouter>
        <Header title="My restaurant" />
        <Routes>
          <Route path="/" element={<Home dishes={dishes} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
