import React from "react";
import { clearCart } from "../Features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { closeModal } from "../Features/modal/modalSlice";

function Modal() {
  const dispatch = useDispatch();
  return (
    <div>
      <aside className="modal-container">
        <div className="modal">
          <h4>Remove all items from your shopping cart?</h4>
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              confirm
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => dispatch(closeModal())}
            >
              cancel
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Modal;
