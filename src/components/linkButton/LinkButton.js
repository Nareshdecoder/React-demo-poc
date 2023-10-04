import React from "react";
import "./LinkButton.scss";

function LinkButton(props) {
  const { onClick, title } = props;
  return (
    <>
      <button onClick={onClick} className="link-button">
        {title}
      </button>
    </>
  );
}

export default LinkButton;
