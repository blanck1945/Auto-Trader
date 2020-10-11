import * as db from "../../Helpers/Helpers";
import { GetServerSideProps } from "next";
import { Formik, Form, Field } from "formik";
import { Make } from "../../api/Make";
import Select from "../components/index/Select";
import MoneyBtn from "../components/index/MoneyBtn";
import GeneralBtn from "../components/index/GeneralBtn";
import ResetFoot from "../components/index/ResetFoot";
import router, { useRouter } from "next/router";
import { Model } from "../../api/Model";
import { getString } from "../../Helpers/func";
import SelectModel from "../components/index/SelectModel";

export interface HomeProps {
  makes: Make[];
  models: Model[];
}

const arr = ["Aerith", "Tifa", "Yuffie"];

const Search = ({ makes, models }: HomeProps) => {
  const { query } = useRouter();
  const initialValues = {
    make: getString(query.make) || "all",
    model: getString(query.model) || "all",
    minPrice: getString(query.minPrice) || "all",
    maxPrice: getString(query.maxPrice) || "all",
  };

  //  query: { ...values, page: 1 },
  //+`?make=${values.make}&model=${values.model}&minPrice=${values.minPrice}&maxPrice=${values.maxPrice}`,

  const prices = [500, 2500, 4500, 6500, 9000, 9500, 12000, 27500, 30000];

  return (
    <div className="_home">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          router.push(
            {
              pathname: "/cars",
              query: { ...values, page: 1 },
            },
            undefined
          );
        }}
      >
        {({ values }) => (
          <Form className="form">
            <h2>Find your perfect car</h2>
            <div className="form_center">
              <div className="form_row">
                <input type="text" placeholder="Enter a Postcode" />
                <Select options={arr} selectName={"distance"} />
              </div>
              <div className="form_row">
                <Select options={makes} selectName="make" make />
                <SelectModel models={models} make={values.make} name="model" />
              </div>
            </div>
            <MoneyBtn />
            <div className="form_row">
              <Select options={prices} selectName="minPrice" min />
              <Select options={prices} selectName="maxPrice" />
            </div>
            <GeneralBtn label="Search cars" />
            <ResetFoot />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const make = getString(ctx.query.make);
  const [makes, models] = await Promise.all([
    db.findByMakeAndCount(),
    db.findByModelAndCount(make ? make : "Ford"),
  ]);
  return {
    props: {
      makes,
      models,
    },
  };
};

export default Search;

// <Select options={makes} make selectName="make" />
