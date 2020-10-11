import React from "react";
import { CarModel } from "../../../api/Car";
import DisComp from "./Aside/DisComp";

interface AsideProps {
  car: CarModel;
}

const Aside = ({ car }: AsideProps) => {
  const { make, model, year, price } = car[0];

  return (
    <div className="aside">
      <h1>
        {make} {model}
      </h1>
      <h2>{year}</h2>
      <h2>${price}</h2>
      <DisComp control={true} />
      <DisComp
        header="How much is it to insure?"
        subHeader="Compare insurance quotes for this Car through Compare The Market"
        photo="https://www.autotrader.co.uk/images/ctm-logo.png"
        btnText="Get a quoute"
      />
      <DisComp
        header="Check its full history"
        subHeader="Get peace of mind before you buy this car"
        photo="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/5c74e4af400dae184dfa518f8e54c7a0"
        btnText="Check its full history"
      />
    </div>
  );
};

export default Aside;
