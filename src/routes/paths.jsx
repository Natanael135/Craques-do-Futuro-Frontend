import { Routes, Route } from "react-router-dom";
import LayoutPage from "../layout";
import HomePage from "../Pages/Home";

const Paths = () => (
  <Routes>
    <Route path="/" element={<LayoutPage />}>
      <Route index element={<HomePage />} />
    </Route>
  </Routes>
);

export default Paths;
