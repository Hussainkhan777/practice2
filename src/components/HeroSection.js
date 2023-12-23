import Header from "./Header";
import { Routes } from "react-router-dom";
import Footer from "./Footer";
import { useExamContext } from "../context/FinalExamContext";

export default function HeroSection() {
  const { products } = useExamContext();
  console.log(products);
  return (
    <div className="d-flex  flex-wrap justify-content-center">
      <h1 className="text-center">HeroSection</h1>
      {products.map((product) => {
        return (
          <div className="card  m-2">
            <img
              src={product.image}
              alt="product.description"
              className="card-img-top w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
          </div>
        );
      })}
    </div>
  );
}
