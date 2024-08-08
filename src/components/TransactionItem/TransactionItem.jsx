import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./TransactionItem.module.css";

export default function TransactionItem({ type, amount, currency }) {
  return (
    <>
      <td className={clsx(css.tableData)}>{type}</td>
      <td className={clsx(css.tableData)}>{amount}</td>
      <td className={clsx(css.tableData)}>{currency}</td>
    </>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
