import React from "react";

function getItemTotals(items) {
  return items.reduce((acc, next) => {
    return acc + next.price * next.quantity;
  }, 0);
}

function Cart({ items, onRemove }) {
  return items && items.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th colSpan={2} />
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.price * item.quantity}</td>
            <td colSpan={2}>
              <button onClick={() => onRemove(item.title)}>remove</button>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <strong>Total</strong>
          </td>
          <td colSpan={3} style={{ textAlign: "right" }}>
            <strong>{getItemTotals(items)}</strong>
          </td>
          <td colSpan={2} />
        </tr>
      </tbody>
    </table>
  ) : (
    <strong>No items in cart</strong>
  );
}

export default Cart;
