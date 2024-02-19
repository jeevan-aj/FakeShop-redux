import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelected_product,
  selectedProducts,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, price, category, title, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelected_product());
    };
  }, [productId]);

  return (
    <div className="ui grid container small mt-4" style={{maxHeight:"100px"}}>
      {Object.keys(product).length == 0 ? (
        <div>...loading</div>
      ) : (
        <div className="ui  segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">And</div>
            <div className="middle aligned row">
              <div className="column lp ">
                <img className="ui fluid image" src={image} style={{padding:'50px'}} alt="product image"></img>
              </div>
              <div className="column rp" style={{padding:'50px'}}>
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">$ {price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex={0}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
