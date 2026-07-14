import "./Orders.css";
import { useNavigate } from "react-router-dom";

function Orders({ orders }) {

  const navigate = useNavigate();

  const ShowProduct = () => {
    navigate("/product/:id");
    console.log(id);
  };

  return (
    <div className="orders-page">
      <div className="orders-container">

        <h1 className="orders-title">Your Orders</h1>

        {orders.length === 0 ? (

          <div className="empty-orders">
            <h2>No Orders Yet</h2>
            <p>You haven't placed any orders.</p>
          </div>

        ) : (

          orders.map(order => (

            <div className="order-card" key={order.id}>

              <div className="order-header">

                <div>
                  <span className="order-label">ORDER PLACED</span>
                  <span className="order-value">{order.date}</span>
                </div>

                <div>
                  <span className="order-label">TOTAL</span>
                  <span className="order-value">${order.total}</span>
                </div>

                <div>
                  <span className="order-label">ORDER ID</span>
                  <span className="order-value">#{order.id}</span>
                </div>

              </div>

              <div className="order-items">

                {order.items.map(item => (

                  <div className="order-item" key={item.id}>

                    <img src={item.image} alt={item.title} />

                    <div className="order-info">

                      <h3>{item.title}</h3>

                      <p>Quantity: {item.quantity}</p>

                      <p className="order-price">
                        ${item.price}
                      </p>

                      <span className="order-status">
                        {order.status}
                      </span>

                      <div className="order-buttons">

                        <button className="order-btn">
                          Buy Again
                        </button>

                        <button className="order-btn" onClick= {ShowProduct}>
                          View Product
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))

        )}

      </div>
    </div>
  );
}

export default Orders;