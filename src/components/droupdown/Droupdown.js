import React from "react";
import "./Droupdown.scss";

function Droupdown(props) {
  const { data, objkey, blueTheme } = props;

  return (
    <div>
      <select
        name={objkey}
        id={objkey}
        className={blueTheme ? "select" : "default"}
      >
        {data.map((val) => (
          <option value={val[objkey]} key={val[objkey]}>
            {val[objkey]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Droupdown;
