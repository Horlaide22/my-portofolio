import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fallback from "./component/shared/Fallback";
import Layout from "./component/shared/Layout";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Fallback/>}/>
        <Route element={<Layout/>}>
    
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
