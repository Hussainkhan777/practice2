import { useExamContext } from "../context/FinalExamContext";

export default function Footer() {
  const { singleProduct } = useExamContext();
  return (
    <div className="m-5 d-flex">
      <h1>Footer</h1>
      <img src={singleProduct.image} alt={singleProduct.description} />
    </div>
  );
}
