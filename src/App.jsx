import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";
import Testimonials from "./Pages/Testimonials";

function App() {

 return (

  <BrowserRouter>

   <Routes>

    <Route path="/" element={<Layout />}>

      <Route index element={<Home />} />

      <Route path="features" element={<Features />} />

      <Route path="pricing" element={<Pricing />} />

      <Route path="testimonials" element={<Testimonials />} />

    </Route>

   </Routes>

  </BrowserRouter>

 );

}

export default App;