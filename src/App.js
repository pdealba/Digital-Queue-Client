import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Header from "./components/Layout/Header";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/timer" element={<Timer />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
