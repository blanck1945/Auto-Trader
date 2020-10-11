import React from "react";

interface IconCompProps {
  icon: any;
  label: string;
}

const IconComp = ({ icon, label }) => {
  return (
    <div>
      <h3>{icon}</h3>
      <h3>{label}</h3>
    </div>
  );
};

export default IconComp;
