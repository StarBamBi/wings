import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Header } from "./Header";
import { Routes, Route, Link } from "react-router-dom";
import { Content, ContentWrapper } from "./Content";
import { First } from "./First";

const BodyWrapper = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: none !important;
  }
`;

function App() {
  return (
    <>
      <BodyWrapper>
        <Header></Header>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/first" element={<First />} />
          </Routes>
        </ContentWrapper>
      </BodyWrapper>
    </>
  );
}

export default App;
