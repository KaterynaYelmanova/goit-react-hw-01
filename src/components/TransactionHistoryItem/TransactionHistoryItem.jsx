import css from "./TransactionHistoryItem.module.css"
export default function TransactionHistoryItem({ transaction }) {
    const {type, amount, currency} = transaction;
    return (
                <tr className={css.tr}>
                    <td className={css.td}>{type}</td>
                    <td className={css.td}>{amount}</td>
                    <td className={css.td}>{currency}</td>
                </tr>
    );
}