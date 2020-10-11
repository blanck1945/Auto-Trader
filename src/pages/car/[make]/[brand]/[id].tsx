import React from "react";
import * as db from "../../../../../Helpers/Helpers";
import { GetServerSideProps } from "next";
import { tables } from "../../../../../api/tables";
import { CarModel } from "../../../../../api/Car";
import Center from "../../../../components/car/Center";
import Aside from "../../../../components/car/Aside";
import CarHeader from "../../../../components/car/CarHeader";

interface CarDetailsProps {
  car: CarModel | null | undefined;
}

const CarDetails = ({ car }: CarDetailsProps) => {
  if (!car) {
    return <h2>Sorry, car not found</h2>;
  }

  return (
    <div className="car_div">
      <CarHeader />
      <div className="car_show">
        <Center car={car} />
        <Aside car={car} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params.id;
  let car = await db.findById(tables.cars, id);

  return {
    props: { car: car },
  };
};

export default CarDetails;
