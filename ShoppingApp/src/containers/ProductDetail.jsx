import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { title} = product.products;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.error(err));

    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId != "") fetchProductDetails();
  }, []);
  return (
    <div className="ui grid container">
      {Object.keys.length === 0 ? (
        <>...loading</>
      ) : (
        <div className="ui placeholder segment">
            <div className="ui twocolumn stackable center aligned grid">
              {title}
            </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
