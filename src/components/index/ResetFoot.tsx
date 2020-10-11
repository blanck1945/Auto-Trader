import React from "react";
import { BiReset } from "react-icons/bi";

const ResetFoot = () => {
  return (
    <div className="reset_box">
      <div className="reset">
        <BiReset />
        <h4>reset</h4>
      </div>
      <h4>More options</h4>
    </div>
  );
};

export default ResetFoot;
