import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import { MyExamInformationProvider } from "./context/FinalExamContext";

export default function App() {
  return (
    <MyExamInformationProvider>
      <div>
        <Header />
        <Routes>
          <Route path={"/"} element={<HeroSection />}></Route>
        </Routes>
        <Footer />
      </div>
    </MyExamInformationProvider>
  );
}
