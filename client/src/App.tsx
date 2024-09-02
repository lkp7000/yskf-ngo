import "./App.css";
import Layout from "./Component/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Component/Pages/About";
import Header from "./Component/Layout/Header/Header";
import Footer from "./Component/Layout/Footer/Footer";
import Contact from "./Component/Pages/Contact";
import Event_imgs from "./Component/Pages/Event_imgs";
import InfiniteText from "./Component/Layout/InfiniteText";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/infinite" element={<InfiniteText />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event_img" element={<Event_imgs />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    // <>
    //   <Layout>
    //     <h1>Yogeshwar NGO</h1>
    //   </Layout>
    // </>
  );
}

export default App;
