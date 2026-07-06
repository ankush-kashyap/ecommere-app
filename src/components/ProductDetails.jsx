import { useParams } from "react-router-dom";

function ProductDetails({ products }) {

    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
    return <h2>Product not found</h2>;
  }

   return (
    <div>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>⭐ {product.rating}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetails;