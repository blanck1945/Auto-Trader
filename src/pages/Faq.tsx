import React from "react";
import * as db from "../../Helpers/Helpers";
import { GetStaticProps } from "next";
import { tables } from "../../api/tables";
import { FaqModel } from "../../api/Faq";

interface FaqProps {
  faq: FaqModel[];
}

const Faq = ({ faq }: FaqProps) => {
  return (
    <div className="_home">
      {faq.map((el: FaqModel) => (
        <h3 key={el.id}>{el.question}</h3>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const faq = await db.find(tables.questions);
  return {
    props: {
      faq,
    },
  };
};

export default Faq;
