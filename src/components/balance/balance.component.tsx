import "./balance.styles.scss";

type balanceProps = {
  title?: string,
  oneTotal: number,
  ubTotal: number
}

const Balance: React.FC<balanceProps> = (props) => {
  return (
    <div className="balance">
      <div className="balance__row">
        <div className="balance__title">ONE Available</div>
        <div className="balance__total">{props.oneTotal.toFixed(2)}</div>
        <div className="balance__converted">= ${props.oneTotal.toFixed(2)}</div>
      </div>
      <div className="balance__row">
        <div className="balance__title">ubONE Balance</div>
        <div className="balance__total">{props.ubTotal.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Balance;
