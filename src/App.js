import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fallback from "./component/shared/Fallback";
import Layout from "./component/shared/Layout";
import { Home } from "./Views/Homepage/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Fallback />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
