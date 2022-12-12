import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Layout from "./components/hoc/Layout/Layout";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/timer" element={<Timer />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Layout>
  );
}

export default App;
