import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Routes, Route, Link } from "react-router-dom";
import { Content } from "./Content";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/main" element={<Content />} />
      </Routes>
    </>
  );
}

export default App;
