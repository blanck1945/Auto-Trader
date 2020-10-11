import React from "react";
import Search from ".";
import * as db from "../../Helpers/Helpers";
import { GetServerSideProps } from "next";
import { getString } from "../../Helpers/func";
import { CarModel } from "../../api/Car";
import { Model } from "../../api/Model";
import { Make } from "../../api/Make";
import { useRouter } from "next/router";

export interface CarsProps {
  makes: Make[];
  models: Model[];
  cars: CarModel[];
}

const Cars = ({ makes, models, cars }: CarsProps) => {
  const { query } = useRouter();

  return (
    <div className="_home fix">
      <div className="cars_page">
        <div className="cars_side">
          <Search makes={makes} models={models} />
        </div>
        <div className="cars_center">
          <pre>{JSON.stringify({ cars }, null, 4)}</pre>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const make = getString(ctx.query.make);
  const [makes, models, pagination] = await Promise.all([
    db.findByMakeAndCount(),
    db.findByModelAndCount(make ? make : "Ford"),
    db.getPaginateCars(ctx.query),
  ]);
  console.log(ctx.query);
  return {
    props: {
      makes,
      models,
      cars: pagination.data,
    },
  };
};

export default Cars;
