import "./deposit.styles.scss";

type depositProps = {
  title: string,
  ratioSmall: number,
  ratioMedium: number
}

const Deposit = (props: depositProps) => {
  return (
    <div className="deposit">
    <div className="deposit__title">{props.title}</div>
    <div className="deposit__total--small">{props.ratioSmall.toFixed(2)} ONE</div>
    <div className="deposit__total--medium">{props.ratioMedium.toFixed(2)}</div>
    <span className="deposit__total--warning">Not Enough!</span>
    <div className="deposit__cta">
      <button className="deposit__button button">Deposit</button>
      <button className="deposit__button button">Withdraw</button>
    </div>
  </div>
  );
};

export default Deposit;
