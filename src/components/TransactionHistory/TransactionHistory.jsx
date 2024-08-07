import PropTypes from "prop-types";
import TransactionItem from "../TransactionItem/TransactionItem";
import TransactionsHead from "../TransactionsHead/TransactionsHead";

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <TransactionsHead />
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
