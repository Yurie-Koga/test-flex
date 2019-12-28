import React from "react";

export default function FlexItems({ ClassNameFlex }) {
  return (
    <div className={ClassNameFlex}>
      <div className="f-item inside-item">1</div>
      <div className="f-item inside-item">2</div>
      <div className="f-item inside-item">3</div>
      <div className="f-item inside-item">4</div>
      <div className="f-item inside-item">5</div>
    </div>
  );
}
