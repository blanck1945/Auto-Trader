import React from "react";
import { Field, useField } from "formik";
import { Model } from "../../../api/Model";

interface SelectProps {
  options: any;
  selectName: any;
  make?: boolean;
  min?: boolean;
}

const Select = ({ selectName, options, make, min }: SelectProps) => {
  if (make) {
    return (
      <Field as="select" className="select" name={selectName}>
        <option value="all">All makes</option>
        {make &&
          options.map((el: any) => (
            <option
              key={el.make}
              value={el.make}
            >{`${el.make} (${el.count})`}</option>
          ))}
      </Field>
    );
  }

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <Field as="select" className="select" name={selectName}>
      <option value="all">
        {min ? "Min price (any)" : "Max price (any)"}{" "}
      </option>
      {options.map((el: number) => (
        <option key={el} value={el}>
          From ${formatNumber(el)}
        </option>
      ))}
    </Field>
  );
};

export default Select;
