import React from "react";

const coze1 = [
  "YouTube (Upload product videos.",
  "Buy Facebook ads.",
  "Buy Google AdWords.",
  "Directly buy leads from digital agencies.",
  "Email Marketing.",
  "Corporate Marketing.",
  "Direct Marketing and etc.",
];

const coz2 = [
  "Need",
  "Interest",
  "Budget",
  "Timing",
  "Decision maker's role",
];

const WhyJoinDes = () => {
  return (
    <div className="text-bg py-70 -mb50px">
      <div className="container">
        <p>There are many reasons of join us. </p>
        <p>
          Most commonly the sellers always search for the buyers. There're
          following other ways Seller can generate buyer leads online:
        </p>
        <ul>
          {coze1.map((coz) => (
            <li key={coz}>{coz}</li>
          ))}
        </ul>
        <p>
          In lead generation, these following five key criteria that enable an
          evaluation of a lead's potential are the most common:
        </p>
        <ul>
          {coz2.map((coz) => (
            <li key={coz}>{coz}</li>
          ))}
        </ul>
        <p>
          A Marketing Qualified Lead (MQL) is a lead who has indicated interest
          in what a brand has to offer based on marketing efforts or is
          otherwise more likely to become a customer than other leads.
        </p>
        <p>
          We work for the Seller to save their time and expenses to reach the
          Marketing Qualified Lead (MQL).{" "}
        </p>
        <p>So, why don’t you join us? </p>
      </div>
    </div>
  );
};

export default WhyJoinDes;
