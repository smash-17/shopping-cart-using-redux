import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardFooter from "react-bootstrap/esm/CardFooter";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { useSelector } from "react-redux";
const Product = () => {
  const dispatch = useDispatch();
  const {data: products} = useSelector(state => state.products);
  // const [products, getProducts] = useState([]);
  useEffect(() => {

    //dispatching an action for fetchproducts instead of using a normal api call I've used a thunk dispatch call in productSlice
    dispatch(getProducts());

    //api
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
  }, []);

  const addToCart = (product) =>{
    //dispatch an action
    dispatch(add(product))
  }
  const cards = products.map(product => (
    <div className="col-md-3" style={{marginBottom: '10px'}}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{width:"100px", height:"130px"}} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR: {product.price}
          </Card.Text>
        </Card.Body>
        <CardFooter style={{background : 'white'}}>
        <Button variant="primary" onClick={()=> addToCart(product)}>Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      {/* {JSON.stringify(products)} */}
      <div className="row">
        {cards}
      </div>
    </>
  );
};

export default Product;
