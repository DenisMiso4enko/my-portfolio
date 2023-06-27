import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Contacts from "../../pages/Contacts/Contacts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={"/portfolio"} element={<Portfolio />} />
      <Route path={"/contacts"} element={<Contacts />} />
    </Routes>
  );
};

export default AppRoutes;
