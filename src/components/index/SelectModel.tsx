import React from "react";
import { useField, Field } from "formik";
import { Model } from "../../../api/Model";
import useSWR from "swr";

export interface SelectModelProps {
  name?: string;
  models: Model[];
  make: string;
}

const SelectModel = ({ models, make, name }: SelectModelProps) => {
  const [field] = useField({
    name,
  });

  const { data } = useSWR<Model[]>(`/api/models?make=${make}`, {
    dedupingInterval: 6000,
  });
  const newModels = data || models;
  return (
    <Field as="select" className="select" name={name} {...field}>
      <option value="first">All models</option>
      {newModels.map((el: Model) => (
        <option
          key={el.model}
          value={el.model}
        >{`${el.model} (${el.count})`}</option>
      ))}
    </Field>
  );
};

export default SelectModel;
