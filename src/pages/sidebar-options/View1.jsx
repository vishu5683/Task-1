import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layoutdesign from '../../pages/Layout/Layoutdesign';
import { cancelOrder, updateOrderStatus } from '../../containers/reducer/OrderSilce';
import '../../Styles/orders.css';

const ViewOrders = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    dispatch(updateOrderStatus({ orderId, newStatus }));
  };

  const handleViewDetails = (order) => {
    toast.info(
      <div>
        <h3>Order #{order.id} Details</h3>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${order.total.toFixed(2)}</p>
      </div>,
      {
        position: "top-right",
        autoClose: false,
      }
    );
  };

  return (
    <Layoutdesign>
      <div className="view-orders-container">
        <h1 className="view-orders-title">Your Orders</h1>
        {orders.length > 0 ? (
          <ul className="orders-list">
            {orders.map((order) => (
              <li key={order.id} className="order-item">
                <div className="order-details">
                  <h2>Order #{order.id}</h2>
                  <p>Status: <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span></p>
                  <p>Total: ${order.total.toFixed(2)}</p>
                  <button
                    className="view-details-button"
                    onClick={() => handleViewDetails(order)}
                  >
                    View Details
                  </button>
                </div>
                <div className="order-actions">
                  <button
                    className="cancel-order-button"
                    onClick={() => handleCancelOrder(order.id)}
                  >
                    Cancel Order
                  </button>
                  <button
                    className="update-status-button"
                    onClick={() => handleUpdateOrderStatus(order.id, 'Shipped')}
                  >
                    Mark as Shipped
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-orders-message">You have no orders.</p>
        )}
      </div>
      <ToastContainer />
    </Layoutdesign>
  );
};

export default ViewOrders;
