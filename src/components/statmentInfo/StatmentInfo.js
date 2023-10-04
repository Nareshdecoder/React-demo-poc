import React from "react";
import "../statmentInfo/StatmentInfo.scss";
import Droupdown from "../droupdown/Droupdown";
import LinkButton from "../linkButton/LinkButton";
import {
  droupdownData,
  rewardData,
  statmentInfo,
  repaymentInfo,
} from "../../assets/data";

function StatmentInfo() {
  return (
    <div className="container">
      <div className="row">
        <div className="statment-info-header">
          <div>StatmentInfo</div>
          <Droupdown objkey="month" data={droupdownData} />
        </div>
        <div className="statment-info-body">
          {statmentInfo.map((val) => (
            <div key={val.title} className="statment-info">
              <div>{val.title}</div>
              <div>{val.value}</div>
            </div>
          ))}
        </div>
        <div>
          <Droupdown objkey="value" data={rewardData} blueTheme />
        </div>
      </div>
      <div className="row">
        <div className="statment-info-header justify-end">
          <LinkButton title="View Statment PDF" />
          <LinkButton title="Send Statment" />
        </div>
        <div className="statment-info-body">
          {repaymentInfo.map((value) => (
            <div key={value.title} className="statment-info">
              <div>{value.title}</div>
              <div className={value.value === "Paid" ? "green-badge" : null}>
                {value.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatmentInfo;
