import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/hoc/Layout/Layout";
import SignInForum from "./components/admin/SignInForum";
import Timer from "./components/Timer/Timer";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/admin/new-user" element={<SignInForum />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Layout>
  );
}

export default App;
