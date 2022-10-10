import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Header } from "./Header";
import { Routes, Route, Link } from "react-router-dom";
import { Content, ContentWrapper } from "./Content";
import { First } from "./First";
import { AnimatePresence } from "framer-motion";

const BodyWrapper = styled.div`
  a {
    text-decoration: none;
    color: inherit;
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
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/first" element={<First />} />
            </Routes>
          </AnimatePresence>
        </ContentWrapper>
      </BodyWrapper>
    </>
  );
}

export default App;
