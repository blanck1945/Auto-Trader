import React from "react";
import IconComp from "./Comp";

interface DisCompProps {
  control?: boolean;
  header?: string;
  subHeader?: string;
  photo?: string;
  btnText?: string;
}

const DisComp = ({
  control,
  header,
  subHeader,
  photo,
  btnText,
}: DisCompProps) => {
  if (control) {
    return (
      <div className="comp_grey">
        Private Seller
        <IconComp icon="tel" label="user tel" />
        <p>
          Seller's number has been protected. <span>Learn more</span>
        </p>
        <IconComp icon="add" label="user address" />
      </div>
    );
  }

  return (
    <div className="comp_white">
      <div className="comp_up">
        <div className="comp_text">
          <h2>{header}</h2>
          <h4>{subHeader}</h4>
        </div>
        <img src={photo} alt="photo" className="comp_photo" />
      </div>
      <button className="comp_btn">{btnText}</button>
    </div>
  );
};

export default DisComp;
