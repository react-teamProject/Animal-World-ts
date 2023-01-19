import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMiniHome from "../pages/DetailMiniHome";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MiniHome from "../pages/MiniHome";
import Profile from "../pages/Profile";
import Write from "../pages/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/:user" element={<MiniHome />} />
        <Route path="/:user/:id" element={<DetailMiniHome />} />
        <Route path="/:user/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
