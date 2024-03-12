import { useState } from "react";
import "../Components/Cart.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const Cart = ({ products, setProducts, quantity, setQuantity }) => {
  const [total, setTotal] = useState(0);

  // removing the cart from the list
  function removeProduct(id) {
    let tempProducts = [...products];
    // here we are  taking value from products array and storing in tempProducts using spread operation
    let arr = tempProducts.filter((product) => {
      if (product.id === id) {
        setTotal(total - product.quantity * product.price);
        setQuantity(quantity - product.quantity);
      }
      return product.id !== id;
    });
    setProducts(arr);
  }

  //decreasing products items bye one
  function decrease(id) {
    let tempProducts = [...products];
    // here we are taking value from products array and storing in tempProducts using spread operation

    tempProducts.map((product) => {
      // check if product id is equal to the id
      if (product.id === id && product.quantity >= 1) {
        // then decrease the quantity by 1
        product.quantity--;
        setTotal(Number(total) - Number(product.price));
        setQuantity(quantity - 1);
      }
      return product;
    });

    // store the tempProducts
    setProducts(tempProducts);
  }

  // increase the products items by one
  function increase(id) {
    let tempProduct = [...products]; // we are storing reference of products in tempProduct
    tempProduct.map((product) => {
      // check if product id is equal to the id
      if (product.id === id) {
        // then increase the quantity by 1
        product.quantity++;
        setTotal(Number(total) + Number(product.price));
        setQuantity(quantity + 1);
      }
      return product;
    });
    setProducts(tempProduct);
  }

  return (
    <>
      <div className="cart-container">
        {products.length <= 0 && <p style={{ fontSize: '30px', opacity: '0.5' }}>is currently empty</p>}
        {products.map((items, index) => {
          return (
            <div className="parent-container" key={items.id + index}>
              <div className="detail-container">
                <img src={items.image} width={"100px"} height={"100px"} alt="phone_image" />
                <div className="name-and-price">
                  <span style={{ fontSize: "1.5rem" }}>{items.name}</span>
                  <span>{`$${items.price}`}</span>
                  <button
                    id="remove-btn"
                    onClick={() => {
                      removeProduct(items.id);
                    }}
                  >
                    remove
                  </button>
                </div>
              </div>

              <div className="inc-dec-btn">
                <button
                  onClick={() => {
                    increase(items.id);
                  }}
                >
                  <IoIosArrowUp />
                </button>
                <span style={{ fontSize: '18px' }}>{items.quantity}</span>
                <button
                  onClick={() => {
                    decrease(items.id);
                  }}
                >
                  <IoIosArrowDown />
                </button>
              </div>
            </div>
          );
        })}
        {products.length <= 0 ? "" : <div style={{
          width: '100%', display: 'flex',
          flexDirection: 'column', justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div
            style={{
              width: "65%",
              height: "1.5px",
              backgroundColor: "gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
          <div className="total-details">
            <h4 style={{ fontSize: '20px' }}>Total:</h4>
            <p style={{ fontSize: '18px' }}>{`$${total}`}</p>
          </div>
          <div className="clear-btn">
            <button id="clr"
              onClick={() => {
                setProducts([]);
                setTotal(0);
                setQuantity(0);
              }}
            >
              Clear Cart
            </button>
          </div>
        </div>}

      </div>
    </>
  );
};
