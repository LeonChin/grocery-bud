import React from "react";

function SingleItem({ item, removeItem, editItem }) {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isCompleted && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
}

export default SingleItem;
