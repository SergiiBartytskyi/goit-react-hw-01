import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./TransactionsHead.module.css";

export default function TransactionsHead() {
  return (
    <>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </>
  );
}
