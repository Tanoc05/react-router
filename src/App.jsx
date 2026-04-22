import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./RootLayout";
import HomePage from "./HomePage";
import Prodotti from "./Prodotti";
import ChiSiamo from "./ChiSiamo";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/prodotti" element={<Prodotti/>}/>
          <Route path="/chi-siamo" element={<ChiSiamo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
