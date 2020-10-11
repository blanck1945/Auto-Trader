import React from "react";
import { CarModel } from "../../../api/Car";

interface CenterProps {
  car: CarModel;
}

const Center = ({ car }: CenterProps) => {
  const { photo_url } = car[0];
  return (
    <div className="center">
      <img src={photo_url} alt="car_photo" className="car_image" />
    </div>
  );
};

export default Center;
