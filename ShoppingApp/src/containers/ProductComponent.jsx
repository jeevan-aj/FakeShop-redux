import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((cur) => {
    const { id, title, image, price, category } = cur;
    return (
      <div className="four wide  column"  key={id}>
        <Link to={`/product/${id}`} >
        <div className="ui doubling cards link ">
          <div className="card " >
            <div className="image" style={{ maxHeight: '250px', minHeight:'250px', overflow: 'hidden' , background:'white', padding:'10px'}}>
              <img src={image} alt={title} style={{ objectFit: 'contain', height: '100%' }}/>
            </div>
            <div className="content" style={{height:'200px', alignContent:'baseline',display:'flex',flexDirection:'column',justifyContent:'end'} } >
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
