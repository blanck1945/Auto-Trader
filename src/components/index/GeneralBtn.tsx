import React from "react";

interface GeneralBtn {
  label: string;
}

const GeneralBtn = ({ label }) => {
  return (
    <button type="submit" className="general_btn">
      {label}
    </button>
  );
};

export default GeneralBtn;
